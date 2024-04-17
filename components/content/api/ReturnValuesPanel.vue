<template>
    <div v-if="returnValues?.length" class="ss-api-param-panel ss-api-return-value-panel">
        <div class="ss-api-param-panel-header ss-api-return-value-panel-header">
            <span class="ss-api-param-panel-title ss-api-return-value-panel-title">RETURN VALUE</span>
        </div>
        <div class="ss-api-param-panel-body ss-api-return-value-panel-body">
            <div class="ss-api-param-panel-table">
                <template v-for="(returnValue, index) in returnValues">
                    <div class="ss-api-param-panel-table-row"
                        :class="{ 'last': (index == (returnValues.length - 1)),
                            'only': (returnValues.length == 1) }">
                        <div class="ss-api-param-panel-table-col-1">
                            <code class="ss-api-param-name">{{ returnValue.type }}</code>
                        </div>
                        <div class="ss-api-param-panel-table-col-2">
                            <Markdown v-if="returnValue.description" class="ss-api-param-description" :value="returnValue.description" />
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { ReturnValuesPanelProps } from './types/ReturnValuesPanel'

    defineProps<ReturnValuesPanelProps>()
</script>