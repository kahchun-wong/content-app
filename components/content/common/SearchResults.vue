<template>
    <div v-if="resultContents?.length" class="ss-search-results">
        <GroupedContentList :contents="resultContents" />
        <pre>{{ model }}</pre>
    </div>
    <div v-else class="ss-search-not-found">
        <Icon class="ss-search-not-found-icon" name="material-symbols:sad-tab" />
        <span class="ss-search-not-found-text">Sorry, we couldn't find any results</span>
    </div>
</template>
 
<script setup lang="ts">
    const props = defineProps<{ model: Ref<any> }>()

    const resultContents = computed(() => {
        return props.model?.value?.map((content: any) => {
            return {
                _path: content.id, 
                title: content.title,
                description: content.content
            }
        })
    })
 
    // const resultContents = computed(async () => {
    //     const navItems: NavItem[] = []

    //     for (const result of props.model?.value) {
    //         const contentPath = result.id.split('#')[0]
    //         const segments = contentPath.replace(/^\/|\/$/g, '').split('/')

    //         const query = queryContent(contentPath)
    //         const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(query))

    //         let cumulativePath = '/' + segments.shift()
    //         let title = ''
    //         const icon = nav.icon

    //         const 

    //         navigation.value?.forEach((nav) => {
    //             if (nav._path == cumulativePath) {
    //                 title += nav.title
                    
    //                 if (segments.length > 0) {
    //                     cumulativePath += '/' + segments.shift()
    //                     nav.children?.forEach((nav) => {

    //                     })
    //                 }
    //             }

                
                
    //         })
    //     }

        
    // })
</script>