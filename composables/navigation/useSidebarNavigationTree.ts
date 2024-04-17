import type { MenuItem } from 'primevue/menuitem'
import type { SidebarNavigationConfig, NavigationItem } from './types/Navigation'
import type { MarkdownNode, TocLink } from '@nuxt/content/types'
import _ from 'lodash'

export const useSidebarNavigationTree = (): MenuItem[] => {
    const sidebarConfig: SidebarNavigationConfig = useAppConfig().sidebar

    return sidebarConfig
        ? resolveSidebar(sidebarConfig)
        : []
}

const resolveSidebar = (sidebarConfig: SidebarNavigationConfig) => {
    const keys = Object.keys(sidebarConfig).sort((x, y) => y.length - x.length)
    for (const base of keys) {
        if (decodeURI(useRoute().path).startsWith(base)) {
            const matchedConfig = sidebarConfig[base]
            return matchedConfig
                ? resolveSidebarItems(matchedConfig)
                : []
        }
    }

    return []
}

const resolveSidebarItems = (sidebarNavigationItems: NavigationItem[]) => {
    const { toc } = useContent()

    const resolveChildItem = (item: NavigationItem, key: string): MenuItem => {
        const childItem: NavigationItem = _.isEmpty(item.items)
            ? {
                ...item,
                url: useVersionedLink(item.url ?? "")
            }
            : item

        if ("items" in childItem) {
            return {
                type: "group",
                key: key,
                ...childItem,
                items: childItem.items?.map((item, index) => resolveChildItem(item, `${key}_${index}`))
            }
        }

        return {
            type: "page",
            key: key,
            ...childItem,
            items: childItem.url === useRoute().path
                ? resolvePageHeaders(
                    toc.value.links[0]?.depth === 1
                        ? toc.value.links[0].children
                        : toc.value.links, key)
                : []
        }
    }
    
    return sidebarNavigationItems.map((item, index) => resolveChildItem(item, `item_${index}`))
}

const resolvePageHeaders = (headers: TocLink[], key: string, headerDepth: number = 2) => {
    return headerDepth > 0 
        ? headers.map((header, index) => resolvePageHeader(header, `${key}_${index}`, headerDepth - 1)) 
        : []
}

const resolvePageHeader = (header: TocLink, key: string, headerDepth: number): MenuItem => {
    const { page } = useContent()
    const resolveHttpMethod = () => {
        const headerNode = page.value.body.children.find((child: MarkdownNode) => child.tag === 'h3' && child.props?.id === header.id)
        const headerSpanNode = headerNode?.children.find((child: MarkdownNode) => child.tag === 'span')
        return headerSpanNode?.props['http-method']
    }
    
    if ("children" in header) {
        return {
            type: "heading",
            key: key,
            label: header.text,
            hash: header.id,
            httpMethod: resolveHttpMethod(),
            items: resolvePageHeaders(header.children??[], key, headerDepth)
        }
    }

    return {
        type: "heading",
        key: key,
        label: header.text,
        hash: header.id,
        httpMethod: resolveHttpMethod(),
        url: `${page.value._path}#${header.id}`
    }
}