<template>
    <SamplePanel :title="title" :samples="samples" />
</template>

<script setup lang="ts">
    import type { WebApiSamplePanelProps } from './types/WebApiSamplePanel'
    import _ from 'lodash'

    const props = defineProps<WebApiSamplePanelProps>()

    const samples = props.contents?.filter((content) => !_.isEmpty(content.body?.content.map((content) => content.samples)))
        .map((content) => ({
                name: content.statusCode,
                value: content.body?.content.flatMap((content) => content.samples)
            })
        )
</script>