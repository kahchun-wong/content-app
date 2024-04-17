/**
 * Get the select API sample dropdown
 */
export const useApiSampleDropdown = (names: string[]) => {
    return computed(() => {
        const apiSampleDropdown = names?.filter(name => name).map((name, index) => {
            let selected = false

            if (index == 0) { selected = true }

            return { 
                label: name, 
                value: name,
                selected: selected
            }
        })

        return apiSampleDropdown
    })
}