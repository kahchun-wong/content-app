import type { NavItem } from "@nuxt/content/types"
import type { MenuItem } from "primevue/menuitem"

export const mapNavigationLinks = (navigation: NavItem[] | undefined): MenuItem[] => {
    console.log(navigation)

    const menuItems: MenuItem[] = []
    navigation?.forEach((navItem) => {
        // Exclude base URL index page
        if (navItem._path === "/") return

        // skip content that is marked as ignored and has no children
        if (navItem.ignore && !navItem.children?.length) return

        let items = navItem.children ? mapNavigationLinks(navItem.children) : []

        // skip content that is marked as ignored and has no valid children
        if (navItem.ignore && !items.length) return

        if (navItem.ignore) {
            menuItems.push(...items)
        } else {
            const menuItem: MenuItem = {}
            menuItem.label = navItem.title ?? 'Untitled'
            if (navItem.icon) menuItem.icon = navItem.icon
            if (!items.length) menuItem.url = navItem._path
            if (items.length) menuItem.items = items
            menuItems.push(menuItem)
        }
    })
console.log(menuItems)
    return menuItems
}
