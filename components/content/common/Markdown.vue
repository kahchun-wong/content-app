<template> 
    <MDC :class="class" :tag="tag" :excerpt="excerpt" :parserOptions="options" :value="value" />
</template>

<script setup lang="ts">
    import type { MDCParseOptions } from '@nuxtjs/mdc/runtime/types/parser'
    //@ts-ignore
    import { TYPE_TABLE, mdast2hastGridTablesHandler } from '@adobe/mdast-util-gridtables'

    const props = defineProps({
        tag: {
            type: [String, Boolean],
            default: 'div'
        },
        /**
         * Raw markdown string or parsed markdown object from `parseMarkdown`
         */
        value: {
            type: [String, Object],
            required: true
        },
        /**
         * Render only the excerpt
         */
        excerpt: {
            type: Boolean,
            default: false
        },
        /**
         * Options for `parseMarkdown`
         */
        parserOptions: {
            type: Object as PropType<MDCParseOptions>,
            default: () => ({})
        },
        /**
         * Class to be applied to the root element
         */
        class: {
            type: [String, Array, Object],
            default: ''
        }
    })

    const options = {...props.parserOptions, rehype: {
        options: {
            handlers: {
                [TYPE_TABLE]: mdast2hastGridTablesHandler()
            }
        },
    }}
</script>