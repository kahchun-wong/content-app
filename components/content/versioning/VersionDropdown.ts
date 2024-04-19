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
        const app = useNuxtApp()
        const product = props.product
        const versions = app.$versioning.useVersionDropdown(product)

        async function changeVersion(event: DropdownChangeEvent) {
            let selectedPath = event.value.value

            if (useRoute().fullPath != selectedPath) {
                const { data } = await useAsyncData('version' + selectedPath, () => queryContent().where({ _path: { $eq: selectedPath } }).findOne())

                if (!data.value) { 
                    const parentPath = selectedPath.split("/").slice(0, -1).join("/")
                    const { data } = await useAsyncData('version' + parentPath, () => queryContent(parentPath).find())
                    if (data.value?.length) { selectedPath = data.value[0]._path }
                }
                useRouter().push({ path: selectedPath })
            }
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