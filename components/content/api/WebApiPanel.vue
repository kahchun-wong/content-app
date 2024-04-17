<template>
    <div class="ss-api-panel ss-web-api-panel">
        <div class="ss-api-panel-content ss-web-api-panel-content">
            <div class="ss-api-panel-content-header ss-web-api-panel-content-header">
                <HttpMethodTag :httpMethod="httpMethod" />
                <span class="ss-web-api-path">{{ path }}</span>
            </div>
            <MDC v-if="description" class="ss-api-panel-description" :value="description" />
            <div v-if="parameters" class="ss-api-panel-content-parameters">
                <ParamPanel 
                    v-for="(value, key) in parameters" 
                    :key="key"
                    :class="key" 
                    :title="(key + ' PARAMETERS').toUpperCase()" 
                    :params="value" />
            </div>
            <div v-if="request" class="ss-api-panel-content-request">
                <RequestPanel :request="request" />
            </div>
            <div v-if="responses" class="ss-api-panel-content-responses">
                <ResponsesPanel :responses="responses" />
            </div>
        </div>
        <div v-if="request || responses" class="ss-api-panel-sample">
            <WebApiSamplePanel v-if="request" title="REQUEST SAMPLE" :contents="request" />
            <WebApiSamplePanel v-if="responses" title="RESPONSE SAMPLE" :contents="responses" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { WebApiPanelProps } from './types/WebApiPanel'

    defineProps<WebApiPanelProps>()
</script>