<template>
    <nav v-if="toc && toc.links?.length" class="ss-toc">
        <div class="ss-toc-wrapper">
            <Button class="ss-toc-header" @click="toggleToc">
                <span class="ss-toc-header-title">On this page</span>
                <ExpandToggleIcon :expanded="!hidden" />
            </Button>
            <PageTocLinks :links="toc.links" :class="{ 'hidden': hidden }" />
        </div>
    </nav>
</template>

<script setup lang="ts">
    const { toc } = useContent()
    const hidden = ref(true)
    const toggleToc = () => hidden.value = !hidden.value
</script>