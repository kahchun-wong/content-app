/**
 * Get the select content type dropdown
 */
export const useContentTypeDropdown = (statusCode: string, contentTypes: string[]) => {
    return computed(() => {
        const contentTypeDropdown = contentTypes?.filter(contentType => contentType).map((contentType, index) => {
            let selected = false

            if (index == 0) { selected = true }

            return { 
                label: contentType, 
                value: { statusCode: statusCode, contentType: contentType }, 
                selected: selected
            }
        })

        return contentTypeDropdown
    })
}