import _ from 'lodash'

/**
* Use versioned link if needed
*/
export const useVersionedLink = (link: string) => {
    if (_.isEmpty(link)) { return link }

    // To replace the version placeholder with actual value
    const matches = link?.match(/.*(\${version\..+}).*/)

    if (matches) {
        // should be in format of ${version.<product>}
        const placeholder = matches[1]

        // extract the product
        const product = placeholder.substring(placeholder.lastIndexOf(".") + 1, placeholder.length - 1)

        // retrieve current selected version path of the product
        const versionManager = useVersionManager()
        versionManager.loadVersions(product)
        const currentVersionPath = versionManager.getCurrentVersion()?.path.replace(/^\/|\/$/g, "") ?? ""

        // replace the placeholder with the actual version path
        return link.replace(placeholder, currentVersionPath)
    }

    return link
}