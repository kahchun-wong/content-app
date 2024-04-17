import type { ApiPanel } from '~/modules/api-parser/types/ApiPanel'
import ApiSampleDropdown from './ApiSampleDropdown'
import SampleTabs from './SampleTabs'
import _ from 'lodash'

/**
* Panel for request / response sample
*/
export default defineNuxtComponent({
    name: "SamplePanel",
    props: {
        title: {
            type: String,
            required: true
        },
        samples: {
            type: Array<ApiPanel.ApiSample>,
            required: true
        }
    },

    setup(props) {
        const selectedSample = ref()
        const isDummyStatusCode = props.samples?.length == 1 && props.samples[0]?.name == '000'

        const updateSelectedSample = (selectedName: string) =>{
            const selectedNameSample = props.samples?.find(sample => sample?.name == selectedName)
            selectedSample.value = selectedNameSample
        }

        return () => !_.isEmpty(props.samples)
        ? h("div", { class:"ss-api-panel-sample-container" }, [
            h("div", { class:"ss-api-panel-sample-header" }, [
                h("span", { class:"ss-api-panel-sample-title" }, props.title),
                !isDummyStatusCode 
                    ? h(ApiSampleDropdown, { 
                        names: props.samples.map(sample => sample.name), 
                        onUpdateNameOption: updateSelectedSample
                    })
                    : null
            ]),
            props.samples?.map(({ name, value }) => {
                const isActive = name == (isDummyStatusCode ? '000' : selectedSample.value?.name)
                return h(SampleTabs, { 
                    class: ["ss-api-sample-tabs", isActive ? "selected" : undefined], 
                    data: value, 
                    id: name 
                })
            })
        ])
        :undefined
    }
})