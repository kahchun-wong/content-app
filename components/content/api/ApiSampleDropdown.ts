import type { DropdownChangeEvent } from 'primevue/dropdown'
import GenericDropdown from '../common/GenericDropdown'

/**
* Dropdown for request / response samples
*/
export default defineNuxtComponent({
    name: "ApiSampleDropdown",
    props: {
        names: {
            type: Array<string>,
            required: true
        }
    },
    setup(props, {emit}) {
        const nameOptions = useApiSampleDropdown(props.names)

        const updateNameOption = (event: DropdownChangeEvent) => {
            emit("updateNameOption", event.value.value);
        }

        return () => 
            h(GenericDropdown, { 
                class: "sample",
                panelClass: "sample",
                dataList: nameOptions.value,
                onChangeSelectionDropdown: updateNameOption
            });
    },
});