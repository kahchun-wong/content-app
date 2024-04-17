<template>
    <div v-if="params?.length" class="ss-api-param-panel">
        <div v-if="title" class="ss-api-param-panel-header">
            <span class="ss-api-param-panel-title">{{ title }}</span>
        </div>
        <div class="ss-api-param-panel-body">
            <div class="ss-api-param-panel-table">
                <template v-for="(param, index) in params">
                    <div class="ss-api-param-panel-table-row"
                        :class="{ 'last': (index == (params.length - 1)),
                            'only': (params.length == 1) }">
                        <div class="ss-api-param-panel-table-col-1" :class="{ 'expanded': expanded[index] }">
                            <Button v-if="param.children?.length" class="ss-api-param-toggle" @click="toggleChildren(index)">
                                <code class="ss-api-param-name" :class="{ 'deprecated': param.deprecated }">
                                    {{ param.name }}
                                </code>
                                <ExpandToggleIcon :expanded="expanded[index]" />
                            </Button>
                            <code v-else class="ss-api-param-name" :class="{ 'deprecated': param.deprecated }">
                                {{ param.name }}
                            </code>
                            <span v-if="param.deprecated" class="ss-api-param-deprecated">deprecated</span>
                            <span v-if="param.required" class="ss-api-param-required">required</span>
                        </div>
                        <div class="ss-api-param-panel-table-col-2" :class="{ 'expanded': expanded[index] }">
                            <span class="ss-api-param-data-type">{{ param.type }}</span>
                            <Markdown v-if="param.description" class="ss-api-param-description" :value="param.description" />
                        </div>
                    </div>
                    <div v-if="param.children?.length && expanded[index]"  class="ss-api-param-panel-children-table-row">
                        <div class="ss-api-param-panel-children-table-col">
                            <ParamPanel class="children" :params="param.children" />
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { ParamPanelProps } from './types/ParamPanel'

    const props = defineProps<ParamPanelProps>()
    const expanded = ref(props.params ? props.params.map(() => false) : [])
    const toggleChildren = (index: number) => {
        expanded.value[index] = !expanded.value[index]
    }
</script>