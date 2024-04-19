import type { PlatformVersion, ProductVersion, Version } from './Versioning'
import path from 'path-browserify'
import _ from 'lodash'

/**
 * Plugin to support versioning
 */
export default defineNuxtPlugin(nuxtApp => {
    /**
     * Util to load and populate the product versions from json file
     */
    class VersionManager {
        private currentPlatform?: PlatformVersion
        private currentVersion?: Version
        private platforms: PlatformVersion[]
        private versions: Version[] 

        public constructor() {
            this.platforms = []
            this.versions = []
        }

        /**
         * Load the product versions
         */
        public loadVersions (product: string) {
            const productVersions: ProductVersion = useAppConfig().productVersions

            if (_.isEmpty(productVersions)) { return }

            // Get the product version object
            const productVersion = productVersions[product]

            // Platforms field is compulsory
            if (_.isEmpty(productVersion.platforms)) {
                console.warn(`'platforms' field of '${product}' is missing or empty.`)
                return
            }

            // Get all platforms of the product
            this.platforms = productVersion.platforms

            // Try to resolve version from current route
            const resolvedVersion = this.resolveVersionFromCurrentRoute(this.platforms)

            // Get the current platform of the product
            this.currentPlatform = resolvedVersion ? resolvedVersion.platform : this.platforms[0]
            
            // Versions fiels is compulsory
            if (_.isEmpty(this.currentPlatform.versions)) {
                console.warn(`'versions' field of '${product}-${this.currentPlatform.name}' is missing or empty.`)
                return
            }

            // Get all versions of the selected product platform
            this.versions = this.currentPlatform.versions

            // Get the current version of the product platform
            this.currentVersion = resolvedVersion ? resolvedVersion.version : this.versions[0]
        }

        /**
         * Try to resolve version from current route
         */
        public resolveVersionFromCurrentRoute (platformVersions: PlatformVersion[]) {
            const currentPath = useRoute().path

            for (const platformVersion of platformVersions) {
                for (const version of platformVersion.versions) {
                    // 1. split the path into segments
                    const pathSegments = currentPath.split("/")
                    // 2. pop the path segments to remove current page segment
                    pathSegments.pop()
                    
                    // 3. Resolve platform & version from path
                    let currentVersionPath = '/'
                    version.path
                        .split('/')
                        .filter(segment => segment)
                        .map(() => currentVersionPath = '/' + pathSegments.pop() + currentVersionPath)

                    // 4. Return matching version
                    if (currentVersionPath === version.path) return { platform: platformVersion, version: version }
                }
            }
        }

        /**
         * Get current platform
         */
        public getCurrentPlatform () {
            return this.currentPlatform
        }

        /**
         * Get current version
         */
        public getCurrentVersion () {
            return this.currentVersion
        }

        /**
         * Get available platform versions
         */
        public getPlatforms () {
            return this.platforms
        }

        /**
         * Get available versions
         */
        public getVersions () {
            return this.versions
        }
    }

    const useVersionManager = () => new VersionManager()

    /**
     * Use versioned link if needed
     */
    const useVersionedLink = (link: string) => {
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

    /**
     * Get the select version dropdown
     */
    const useVersionDropdown = (product: string) => {
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

    /**
     * Get the select platform dropdown
     */
    const usePlatformDropdown = (product: string) => {
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

    /**
     * Rebuild new versioned path upon new platform or version selection
     */
    const rebuildVersionedLink = (targetPath: string, currentVersion: Version, selectedVersion: Version) => {
        // 1. split the path into segments
        const pathSegments = targetPath.split("/")
        // 2. pop the path segments to get current page
        const currentPage = pathSegments.pop() ?? ''
        // 3. remove current version segment
        currentVersion.path.split('/').filter(segment => segment).map(() => pathSegments.pop())
        // 4. join the path again
        targetPath = pathSegments.join("/")
        // 5. form the new path
        const targetVersionedPath = path.join(targetPath, selectedVersion.path, currentPage)
        
        return `${targetVersionedPath}${useRoute().hash}`
    }

    const versioning = {
        useVersionManager: useVersionManager,
        useVersionedLink: (link: string) => useVersionedLink(link),
        useVersionDropdown: (product: string) => useVersionDropdown(product),
        usePlatformDropdown: (product: string) => usePlatformDropdown(product),
        rebuildVersionedLink: (targetPath: string, currentVersion: Version, selectedVersion: Version) => rebuildVersionedLink(targetPath, currentVersion, selectedVersion)
    }

    return {
        provide: {
            versioning: versioning
        }
    }
})