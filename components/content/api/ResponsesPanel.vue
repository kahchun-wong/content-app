<template>
    <div v-if="responses" class="ss-api-param-panel ss-api-responses-panel">
        <div class="ss-api-param-panel-header ss-api-responses-panel-header">
            <span class="ss-api-param-panel-title ss-api-responses-panel-title">RESPONSES</span>
        </div>
        <div class="ss-api-param-panel-body ss-api-responses-panel-body">
            <div class="ss-api-param-panel-table">
                <template v-for="(response, index) in responses">
                    <div class="ss-api-param-panel-table-row"
                        :class="{ 'last': (index == (responses.length - 1)),
                            'only': (responses.length == 1) }">
                        <div class="ss-api-param-panel-table-col-1" :class="{ 'expanded': expanded[index] }">
                            <Button v-if="response.body.content?.length" class="ss-api-param-toggle" @click="toggleChildren(index)">
                                <code class="ss-api-param-name">{{ getStatusCodePhrase(response.statusCode) }}</code>
                                <ExpandToggleIcon :expanded="expanded[index]" />
                            </Button>
                            <code v-else class="ss-api-param-name">{{ getStatusCodePhrase(response.statusCode) }}</code>
                        </div>
                        <div class="ss-api-param-panel-table-col-2" :class="{ 'expanded': expanded[index] }">
                            <Markdown class="ss-api-param-description" v-if="response.body.description" :value="response.body.description" />
                        </div>
                    </div>
                    <div v-if="response.body.content?.length && expanded[index]"  class="ss-api-param-panel-children-table-row">
                        <div class="ss-api-param-panel-children-table-col">
                            <ContentTypeDropdown 
                                v-if="statusCodeContentTypes[response.statusCode]" 
                                :statusCode="response.statusCode" 
                                :contentTypes="statusCodeContentTypes[response.statusCode]" 
                                @updateContentTypeOption="updateContentTypeOption" 
                            />
                            <ParamPanel 
                                v-if="statusCodeContentTypeProperties[response.statusCode]"
                                class="children" 
                                :params="statusCodeContentTypeProperties[response.statusCode]" />
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { WebApiPanel } from 'modules/api-parser/types/ApiPanel'
    import type { ResponsesPanelProps } from './types/ResponsesPanel'
    import type { ContentTypeItemValue } from './types/ContentTypeDropdown'
    import { getReasonPhrase } from 'http-status-codes'

    const props = defineProps<ResponsesPanelProps>()
    const emits = defineEmits([ 'updateContentTypeOption' ])
    
    const statusCodeContentTypes = {} as Record<string, string[]>
    const statusCodeProperties = props.responses
        ? props.responses.reduce((acc, cur) => {
            
            const contentTypeProperties = cur.body?.content.reduce((acc, cur) => {
                const contentType = cur.properties?.contentType
                const properties = cur.properties?.properties
                acc[contentType] = properties
                return acc
            }, {} as Record<string, WebApiPanel.SchemaProperties[]>)

            const statusCode = cur.statusCode
            statusCodeContentTypes[statusCode] = contentTypeProperties ? Object.keys(contentTypeProperties) : []
            acc[statusCode] = contentTypeProperties
            return acc
        }, {} as Record<string, Record<string, WebApiPanel.SchemaProperties[]>>)
        : {}

    const statusCodeContentTypeProperties = ref({}) as Ref<Record<string, WebApiPanel.SchemaProperties[]>>
    const updateContentTypeOption = (selectedOption: ContentTypeItemValue) => {
        const statusCodeContentTypes = statusCodeProperties[selectedOption.statusCode]
        statusCodeContentTypeProperties.value[selectedOption.statusCode] = statusCodeContentTypes[selectedOption.contentType]
    }

    const getStatusCodePhrase = (statusCode: string) => {
        return statusCode + " - " + getReasonPhrase(statusCode)
    }

    const expanded = ref(props.responses ? props.responses.map(() => false) : [])
    const toggleChildren = (index: number) => {
        expanded.value[index] = !expanded.value[index]
    }
</script>