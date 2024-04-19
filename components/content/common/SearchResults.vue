<template>
    <div v-if="resultContents?.length" class="ss-search-results">
        <GroupedContentList :contents="resultContents" @selected="$emit('selected')" />
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
</script>