import type { DropdownChangeEvent } from 'primevue/dropdown'
import GenericDropdown from '../common/GenericDropdown'

/**
* Dropdown for the document versions
*/
export default defineComponent({
    name: "VersionDropdown",
    props: {
        product: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const product = props.product
        const versions = useVersionDropdown(product)

        function changeVersion(event: DropdownChangeEvent) {
            useRouter().push(event.value.value)
        }

        return () => 
            h(GenericDropdown, { 
                class: "versioning version",
                panelClass: "versioning platform",
                dataList: versions.value,
                onChangeSelectionDropdown: changeVersion
            })
    },
})