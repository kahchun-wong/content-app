import type { DropdownChangeEvent } from 'primevue/dropdown'
import GenericDropdown from '../common/GenericDropdown'

/**
* Dropdown for request / response content types
*/
export default defineNuxtComponent({
    name: "ContentTypeDropdown",
    props: {
        statusCode: {
            type: String,
            required: true
        },
        contentTypes: {
            type: Array<string>,
            required: true
        }
    },
    setup(props, {emit}) {
        const contentTypeOptions = useContentTypeDropdown(props.statusCode, props.contentTypes);

        const updateContentTypeOption = (event: DropdownChangeEvent) => {
            emit("updateContentTypeOption", event.value.value);
        }

        return () => 
            h(GenericDropdown, { 
                class: "content-type",
                dataList: contentTypeOptions.value,
                onChangeSelectionDropdown: updateContentTypeOption
            });
    },
});