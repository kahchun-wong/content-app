<template>
    <div class="ss-code-block-wrapper">
        <button ref="copy" class="ss-copy-button">
            <Icon 
                :name="copyState === 'copied' ? 'lucide:copy-check' : 'lucide:copy'" 
                class="w-5 h-5" 
            />
        </button>
        <Markdown class="ss-code-block" :value="codeBlock" />
    </div>
</template>

<script setup lang="ts">
    import type { CodeBlockProps } from './types/CodeBlock'
    import YAML from 'js-yaml'
    import ClipboardJS from 'clipboard'

    const props = defineProps<CodeBlockProps>()

    const codeBlock = computed(() => {
        const fence = "```"
        let content =  `${fence}${props.lang}\n`

        if (typeof props.code == "object") {
            if ([ "yaml", "yml" ].includes(props.lang)) {
                content += YAML.dump(props.code)
            } else {
                content += JSON.stringify(props.code, null, 2)
            }
        } else {
            content += props.code
        }

        content += `\n${fence}\n`
        return content
    })

    const copy = ref(null)
    const copyState = ref("init")

    onMounted(() => {
        if (copy.value) {
            const copyCode = new ClipboardJS(copy.value, {
                target (trigger: any) {
                    return trigger.nextElementSibling
                }
            })

            copyCode.on("success", (event: any) => {
                event.clearSelection()
                copyState.value = "copied"
                window.setTimeout(() => {
                    copyState.value = "init"
                }, 2000)
            })
        }
    })
    
</script>