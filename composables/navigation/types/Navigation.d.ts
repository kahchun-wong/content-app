/**
 * Defines valid properties of navigation item object
 */
export interface NavigationItem {
    icon?: string,
    label?: string,
    url?: string,
    items?: NavigationItem[]
}

/**
 * Defines types of navbar navigation config object
 */
export type NavigationConfig = NavbarNavigationConfig | SidebarNavigationConfig

/**
 * Defines valid properties of navbar navigation config object
 */
export type NavbarNavigationConfig = NavigationItem[]

/**
 * Defines valid properties of sidebar navigation config object
 */
export interface SidebarNavigationConfig {
    [path: string]: NavigationItem[]
}