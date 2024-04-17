import type { Version } from './types/Versioning'

/**
 * Get the select platform dropdown
 */
export const usePlatformDropdown = (product: string) => {
    const versionManager = useVersionManager()

    return computed(() => {
        // Retrieve the version of selected product from versions json file
        versionManager.loadVersions(product)
        const selectedPlatforms = versionManager.getPlatforms()
        const currentPlatform = versionManager.getCurrentPlatform()
        const currentVersion = versionManager.getCurrentVersion()?? {} as Version

        const platformDropdown = selectedPlatforms.map((selectedPlatform) => {
            const targetPath = useRoute().path
            const platform = selectedPlatform.name
            let link
            let selected = false

            // if the platform is the same as current platform
            if (platform === currentPlatform?.name) {
                // stay at current link
                link = targetPath
                selected = true
            }

            // else modify the link with platform default version
            else {
                const selectedVersion = selectedPlatform.versions[0]
                link = rebuildVersionedLink(targetPath, currentVersion, selectedVersion)
            }

            return { label: platform, value: link, selected: selected }
        })

        return platformDropdown
    })
}