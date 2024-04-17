import type { Version } from './types/Versioning'
import path from 'path-browserify'

/**
 * Rebuild new versioned path upon new platform or version selection
 */
export const rebuildVersionedLink = (targetPath: string, currentVersion: Version, selectedVersion: Version) => {
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

    // try to keep current hash across versions
    return `${targetVersionedPath}${useRoute().hash}`
}