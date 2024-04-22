/**
 * Defines valid properties of GroupedContentList component
 */
export interface GroupedContentListProps {
    /**
     * List of content to be grouped
     */
    contents?: NavItem[] | undefined | null,
    depth: false | number
}