import type { DropdownChangeEvent } from 'primevue/dropdown'
import GenericDropdown from '../common/GenericDropdown'

/**
* Dropdown for the document platforms
*/
export default defineComponent({
    name: "PlatformDropdown",
    props: {
        product: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const product = props.product
        const platforms = usePlatformDropdown(product)

        function changePlatform(event: DropdownChangeEvent) {
            if (useRoute().fullPath != event.value.value)
                useRouter().replace({ path: event.value.value }) 
        }

        return () => 
            h(GenericDropdown, { 
                class: "versioning platform",
                panelClass: "versioning platform",
                dataList: platforms.value?.filter(platform => platform.value),
                onChangeSelectionDropdown: changePlatform
            })
    },
})