<template>
    <div class="ss-api-panel ss-sdk-api-panel">
        <div class="ss-api-panel-content ss-sdk-api-panel-content">
            <Markdown v-if="description" class="ss-api-panel-description" :value="description" />
            <Container v-if="hint" class="ss-sdk-api-hint" :type="hint.containerType">{{ hint.text }}</Container>
            <div v-if="method" class="ss-api-panel-content-method">
                <CodeBlock :lang="method.lang" :code="method.code" />
            </div>
            <div v-if="parameters?.length" class="ss-api-panel-content-parameters">
                <ParamPanel title="PARAMETERS" :params="parameters" />
            </div>
            <div v-if="returnValues?.length" class="ss-api-panel-content-return-values">
                <ReturnValuesPanel :returnValues="returnValues" />
            </div>
        </div>
        <div v-if="samples?.length" class="ss-api-panel-sample">
            <SamplePanel title="SAMPLE" :samples="samples" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { SdkApiPanelProps } from './types/SdkApiPanel'

    defineProps<SdkApiPanelProps>()
</script>