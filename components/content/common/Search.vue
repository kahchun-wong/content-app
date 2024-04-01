<template>
    <ClientOnly>
        <Button class="ss-search-button" @click="openSearchDialog">
            <span class="ss-search-button-icon pi pi-search"></span>
            <span class="ss-search-button-label">Search...</span>
            <span class="ss-search-button-shortcut">
                <Kbd>/</Kbd>
            </span>
        </Button>

        <Dialog class="ss-search-dialog" v-model:visible="visible" :draggable="false" modal dismissableMask>
            <template #header>
                <IconField class="ss-search-input" icon-position="left">
                    <InputIcon class="pi pi-search"></InputIcon>
                    <InputText v-model="search" placeholder="Search..." autofocus></InputText>
                </IconField>
            </template>
            <GroupedContentList v-if="search.length == 0" :contents="navigation" @selected="closeSearchDialog" />
            <SearchResults v-else :model="results" @selected="closeSearchDialog" />      
        </Dialog>
    </ClientOnly>
</template>

<script setup lang="ts"> 
    const visible = ref(false)
    const search  = ref('') 

    const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
    const { data: results } = await useAsyncData('search', () => searchContent(search.value), {
        watch: [search]
    })

    const openSearchDialog = () => { 
        visible.value = true
        search.value = ''
    }

    const closeSearchDialog = () => { 
        visible.value = false
    }
 
    const handleShortcutKeyEvent = (event: KeyboardEvent) => {
        if (event.key === '/') {
            event.preventDefault()
            openSearchDialog()
        }
    }

    onMounted(() => {
        window.addEventListener('keydown', handleShortcutKeyEvent);
    })

    onBeforeUnmount(() => {
        window.removeEventListener('keydown', handleShortcutKeyEvent);
    })
</script>