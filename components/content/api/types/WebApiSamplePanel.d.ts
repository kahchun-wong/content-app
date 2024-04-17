import { WebApiPanel } from '~/modules/api-parser/types/ApiPanel'

/**
 * Defines valid properties of WebApiSamplePanel component
 */
export interface WebApiSamplePanelProps {
    title: string,
    contents: Array<WebApiPanel.ApiStatusCodeBody>
}