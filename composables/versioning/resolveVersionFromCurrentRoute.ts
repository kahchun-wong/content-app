import type { PlatformVersion } from './types/Versioning'

/**
 * Try to resolve version from current route
 */
export const resolveVersionFromCurrentRoute = (platformVersions: PlatformVersion[]) => {
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