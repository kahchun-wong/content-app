/**
 * Defines valid properties of product version object
 */
export interface ProductVersion {
    [product: string]: PlatformVersions
}

/**
 * Defines valid properties of platform versions object
 */
export interface PlatformVersions {
    platforms: PlatformVersion[]
}

/**
 * Defines valid properties of platform version object
 */
export interface PlatformVersion {
    /**
     * Platform name
     */
    name: string,
    /**
     * Array of versions
     */
    versions: Version[]
}

/**
 * Defines valid properties of version object
 */
export interface Version {
    version: string,
    path: string
}

