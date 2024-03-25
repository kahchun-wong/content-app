/**
 * Defines valid properties of Container component
 */
interface ContainerProps {
    /**
     * Type of the container,
     * bounded to "note", "warning", and "error".
     */
    type?: "note" | "warning" | "error",
    /**
     * Custom icon of the container when specified, 
     * default icon based on type otherwise.
     */
    icon?: string | undefined,
    /**
     * Title of the container when specified,
     * default title based on type otherwise.
     */
    title?: string | undefined
}
