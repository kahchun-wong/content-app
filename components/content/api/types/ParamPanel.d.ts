import { ApiPanel, WebApiPanel } from '~/modules/api-parser/types/ApiPanel'

/**
 * Defines valid properties of ParamPanel component
 */
export interface ParamPanelProps {
    title?: string,
    params: (ApiPanel.ApiParameter | WebApiPanel.SchemaProperties )[]
}
