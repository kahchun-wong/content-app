import type { GenericDropdownItem } from './types/GenericDropdown'
import Dropdown, { type DropdownChangeEvent } from 'primevue/dropdown'

/**
* Generic dropdown component to render a select dropdown with list of provided options. 
* An event will be emitted upon option selection change.
*/
export default defineNuxtComponent({
    name: "GenericDropdown",
    props: {
        panelClass: {
            type: String
        },
        dataList: {
            type: Array<GenericDropdownItem>
        }
    },
    setup(props, {emit}) {
        const emitChangeSelection = (event: DropdownChangeEvent) => {
            emit('changeSelectionDropdown', event)
        }

        const options = computed(() => {
            return props.dataList?.map((data) => ({ label: data.label, value: data.value, selected: data.selected }))
        })
        const selectedOption = ref(options.value?.find((option) => option.selected))
        if (selectedOption.value)
            emit('changeSelectionDropdown', { value: selectedOption.value })

        return () => options.value?.length
            ? h("div", { class: "ss-dropdown" },
                h(Dropdown, { 
                    class: "ss-dropdown-wrapper",
                    panelClass: `ss-dropdown-panel ${props.panelClass}`,
                    onChange: (event: DropdownChangeEvent) => emitChangeSelection(event),
                    options: options.value,
                    optionLabel: "label",
                    modelValue: selectedOption.value
                })
            ) 
            : undefined
    },
})