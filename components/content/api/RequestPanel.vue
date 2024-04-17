<template>
    <div v-if="request" class="ss-api-param-panel ss-api-request-panel">
        <div class="ss-api-param-panel-header ss-api-request-panel-header">
            <span class="ss-api-param-panel-title ss-api-request-panel-title">REQUEST</span>
            <ContentTypeDropdown 
                v-if="contentTypes" 
                :statusCode="statusCode" 
                :contentTypes="contentTypes" 
                @updateContentTypeOption="updateContentTypeOption" 
            />
        </div>
        <ParamPanel class="ss-api-request-param-panel" v-if="requestProperties" :params="requestProperties" />
        <div v-else class="ss-api-param-panel-body no-param">
            <p>Properties are not available.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { WebApiPanel } from 'modules/api-parser/types/ApiPanel'
    import type { RequestPanelProps } from './types/RequestPanel'
    import type { ContentTypeItemValue } from './types/ContentTypeDropdown'

    const props = defineProps<RequestPanelProps>()
    const emits = defineEmits([ 'updateContentTypeOption' ])

    const contentTypeProperties = props.request.length
        ? props.request[0].body?.content.reduce((acc, cur) => {
            const contentType = cur.properties?.contentType
            const properties = cur.properties?.properties
            acc[contentType] = properties
            return acc
        }, {} as Record<string, WebApiPanel.SchemaProperties[]>)
        : {}

    const statusCode = props.request.length ? props.request[0].statusCode : ''
    const contentTypes = contentTypeProperties ? Object.keys(contentTypeProperties) : []
    const requestProperties = ref()
    const updateContentTypeOption = (selectedOption: ContentTypeItemValue) => {
        requestProperties.value = contentTypeProperties[selectedOption.contentType]
    }
</script>