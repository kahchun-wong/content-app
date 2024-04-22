<template>
    <div v-if="contentList.length" class="ss-content-list">
        <div v-for="group in contentList" class="ss-content-group">
            <p class="ss-content-group-title">{{ group.title }}</p>
            <div v-for="item in group.children" class="ss-content-item">
                <FaasNuxtLink class="ss-content-item-link" :to="item._path" @click="selected">
                    <Icon class="ss-content-item-icon" :name="item.icon ?? 'mdi:file-document-outline'" />
                    <span class="ss-content-item-title">{{ item.title }}</span>
                    <span class="ss-content-item-description">{{ item.description }}</span>
                </FaasNuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { NavItem } from '@nuxt/content/types'
    import type { GroupedContentListProps } from './types/GroupedContentList'

    const props = defineProps<GroupedContentListProps>()
    const emit = defineEmits([ 'selected' ])

    const selected = (event: MouseEvent) => {
        emit('selected', event)
    }

    const contentList = computed(() => {
        const contentList: { title: string, children: NavItem[] }[] = []

        const buildChildContentList = (contents: NavItem[] | null | undefined, depth: false | number, parentTitle: string = '') => {
            if (typeof depth === 'number' && depth <= 0) { return }

            const childContents: { parentTitle: string, children: NavItem[] }[] = []

            contents?.forEach((content) => {
                const contentChildren = content.children?.filter((child) => content._path !== child._path)
                if (contentChildren) {
                    const title = parentTitle ? parentTitle + ' > ' + content.title : content.title
                    childContents.push({ parentTitle: title, children: contentChildren })
                    contentList.push({ title: title, children: contentChildren })
                }
            })

            childContents.forEach((childContent) => {
                buildChildContentList(childContent.children, depth ? depth - 1 : depth, childContent.parentTitle )
            })
        }

        if (props.contents?.length) {
            contentList.push({ title: 'Links', children: props.contents })
            buildChildContentList(props.contents, props.depth)
        }

        return contentList
    })    
</script>