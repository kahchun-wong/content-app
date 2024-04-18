<template>
    <Button class="ss-search-button" @click="openSearchDialog">
        <Icon class="ss-search-button-icon" name="prime:search" />
        <span class="ss-search-button-label">Search...</span>
        <span class="ss-search-button-shortcut">
            <Kbd>/</Kbd>
        </span>
    </Button>

    <Dialog class="ss-search-dialog" v-model:visible="visible" :draggable="false" modal dismissableMask>
        <template #header>
            <div class="ss-search-input">
                <Icon name="prime:search" />
                <InputText v-model="search" placeholder="Search..." autofocus></InputText>
            </div>
        </template>
        <GroupedContentList v-if="search.length == 0" :contents="navigation" @selected="closeSearchDialog" />
        <SearchResults v-else :model="results" @selected="closeSearchDialog" />      
    </Dialog>
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