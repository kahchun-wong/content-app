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
        const app = useNuxtApp()
        const product = props.product
        const platforms = app.$versioning.usePlatformDropdown(product)

        async function changePlatform(event: DropdownChangeEvent) {
            let selectedPath = event.value.value

            if (useRoute().fullPath != selectedPath) {
                const { data } = await useAsyncData('platform' + selectedPath, () => queryContent().where({ _path: { $eq: selectedPath } }).findOne())

                if (!data.value) { 
                    const parentPath = selectedPath.split("/").slice(0, -1).join("/")
                    const { data } = await useAsyncData('platform' + parentPath, () => queryContent(parentPath).find())
                    if (data.value?.length) { selectedPath = data.value[0]._path }
                }
                useRouter().push({ path: selectedPath })
            }
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