import type { ApiPanel } from '~/modules/api-parser/types/ApiPanel'
import { useStorage } from '@vueuse/core'
import CodeBlock from './CodeBlock.vue'
import _  from 'lodash'

/**
* Tabs for request / response samples
*/
const tabStore = useStorage("VUEPRESS_TAB_STORE", {}) as Ref<Record<string, string>>

export default defineNuxtComponent({
    name: "SampleTabs",
    props: {
        active: {
            type: Number,
            default: 0
        },
        data: {
            type: Array<ApiPanel.Sample>, 
            required: true,
        },
        id: { 
            type: String, 
            required: true 
        },
    },

    setup(props) {
        const getInitialIndex = () => {
            if (props.id) {
                const valueIndex = props.data.findIndex(
                    (value) => tabStore.value[props.id] === JSON.stringify(value)
                );
      
                if (valueIndex !== -1) return valueIndex
            }
      
            return props.active;
        }
      
        // refs of the tab buttons
        const tabRefs = ref([]) as Ref<any[]>
      
        // index of current active item
        let activeIndex = ref(getInitialIndex())
      
        // update store
        const updateStore = () => {
            if (props.id) {
                const value = props.data[activeIndex.value]
                tabStore.value[props.id] = JSON.stringify(value)
            }
        }
      
        // activate next tab
        const activateNext = (index = activeIndex.value) => {
            activeIndex.value = index < tabRefs.value.length - 1 ? index + 1 : 0
            tabRefs.value[activeIndex.value].focus()
        }
      
        // activate previous tab
        const activatePrev = (index = activeIndex.value) => {
            activeIndex.value = index > 0 ? index - 1 : tabRefs.value.length - 1
            tabRefs.value[activeIndex.value].focus()
        }
      
        // handle keyboard event
        const keyboardHandler = (event: KeyboardEvent, index: number) => {
            if (event.key === " " || event.key === "Enter") {
                event.preventDefault()
                activeIndex.value = index
            } else if (event.key === "ArrowRight") {
                event.preventDefault()
                activateNext()
            } else if (event.key === "ArrowLeft") {
                event.preventDefault()
                activatePrev()
            }
      
            updateStore()
        }
      
        watch(
            () => tabStore.value[props.id],
            (newValue, oldValue) => {
                if (props.id && newValue !== oldValue) {
                    const index = props.data.findIndex(
                        (value) => JSON.stringify(value) === newValue
                    )
      
                    if (index !== -1) activeIndex.value = index
                }
            }
        )
      
        watch(
            () => props.id,
            (newValue, oldValue) => {
                if (newValue !== oldValue) {
                    activeIndex.value = 0
                }
            }
        )

        return () => !(_.isEmpty(props.data)) 
        ? h("div", [
            h("div", { class: "ss-sample-tabs-nav", role: "tablist" },
                props.data.map(({ lang }, index) => {
                let isActive = index === activeIndex.value && !(_.isEmpty(lang))

                return !(_.isEmpty(lang)) 
                ? h("button", {
                    ref: (element) => {
                        if (element)
                            tabRefs.value[index] = element
                    },
                    class: ["ss-sample-tabs-nav-item", { active: isActive }],
                    role: "tab",
                    "aria-controls": `tab-${props.id}-${index}`,
                    "aria-selected": isActive,
                    onClick: () => {
                        activeIndex.value = index
                        updateStore()
                    },
                    onKeydown: (event) =>
                        keyboardHandler(event, index),
                    }, 
                    lang.toUpperCase()
                )
                : undefined
                })
            ),
            h("div", { class: "ss-api-sample-panel-wrapper" }, 
                props.data.map(({lang, code}, index) => {
                    const isActive = index === activeIndex.value

                    return h("div", {
                        class: ["ss-api-sample-panel", { active: isActive }],
                        id: `tab-${props.id}-${index}`,
                        role: "tabpanel",
                        "aria-expanded": isActive,
                        },
                        h(CodeBlock, { lang: lang, code: code })
                    )
                })
            ),
        ])
        : undefined
    }
})