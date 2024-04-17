import type { PlatformVersion, ProductVersion, Version } from './types/Versioning'
import _ from 'lodash'

/**
* Util to load and populate the product versions from json file
*/
export default class VersionManager {
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
        const resolvedVersion = resolveVersionFromCurrentRoute(this.platforms)

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

export const useVersionManager = () => new VersionManager()