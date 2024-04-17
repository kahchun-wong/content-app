/**
 * Defines valid properties of page group item object
 */
export interface PageGroupItem {
    home: string,
    title: string
}

/**
 * Defines valid properties of page group config object
 */
export interface PageGroupConfig {
    [path: string]: PageGroupItem
}