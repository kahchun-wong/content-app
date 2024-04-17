import type { Version } from "./types/Versioning"

/**
 * Get the select version dropdown
 */
export const useVersionDropdown = (product: string) => {
    const versionManager = useVersionManager()

    return computed(() => {
        // Retrieve the version of selected product from versions json file
        versionManager.loadVersions(product)
        const selectedVersions = versionManager.getVersions()
        const currentVersion = versionManager.getCurrentVersion()?? {} as Version

        const versionDropdown = selectedVersions?.map((selectedVersion: Version) => {
            const targetPath = useRoute().path
            const version = selectedVersion.version
            let link;
            let selected = false

            // if the version is the same as current version
            if (version === currentVersion?.version) {
                // stay at current link
                link = targetPath
                selected = true
            }

            // else modify the link with version
            else {
                link = rebuildVersionedLink(targetPath, currentVersion, selectedVersion)
            }

            return { label: version, value: link, selected: selected }
        })

        return versionDropdown
    })
}