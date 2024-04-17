import type { OpenApi } from './OpenApi'
import type { WebApi } from './WebApi'

/**
 * Defines generic interface and types of API Panel
 */
export declare namespace ApiPanel {
    interface ApiPanelGroup {
        header?: ApiGroupHeader,
        content: ApiContent[]
    }
    interface ApiGroupHeader extends ApiHeader {
        description?: string | undefined
    }
    interface ApiHeader {
        title: string
    }
    interface ApiContent {
        header?: ApiHeader,
        body?: ApiBodyContent
    }
    interface ApiContents {
        [tag: string]: ApiContent[]
    }
    type ApiBodyContent = WebApiPanel.WebApiBodyContent | SdkApiPanel.SdkApiBodyContent
    type ApiParameter = WebApiPanel.ApiParameter | SdkApiPanel.ApiParameter
    interface BaseApiParameter {
        name: string,
        type: string,
        required?: boolean,
        deprecated?: boolean,
        description?: string | undefined
    }
    interface ApiSample {
        name: string,
        value: Sample[]
    }
    interface Sample {
        lang: string,
        code: string
    }
}

/**
 * Defines valid interface and types of Web API Panel
 */
export declare namespace WebApiPanel {
    interface ApiPath {
        path?: string | undefined,
        httpMethod?: string | undefined,
        props?: OpenApi.Operation
    }
    interface ApiStatusCodeBody {
        statusCode: string,
        body: ApiStatusCodeBodyContent
    }
    interface ApiStatusCodeBodyContent {
        description: string | undefined,
        content: ApiContentTypeBodies
    }
    type ApiContentTypeBodies = ApiContentTypeBody[]
    interface ApiContentTypeBody {
        properties: ContentTypeSchemaProperties,
        samples: ApiPanel.Samples
    }
    interface ContentTypeSchemaProperties {
        contentType: string,
        properties: SchemaProperties[]
    }
    interface WebApiBodyContent {
        path?: string | undefined,
        httpMethod?: string | undefined,
        description?: string | undefined,
        parameters?: ApiParameters,
        request?: ApiStatusCodeBody[],
        responses?: ApiStatusCodeBody[],
    }
    interface SchemaProperties {
        name: string,
        type: any,
        required: boolean,
        deprecated?: boolean,
        description: string | undefined,
        example: string,
        children: SchemaProperties[]
    }
    interface ApiParameters {
        [type: string]: ApiParameter[]
    }
    interface ApiParameter extends ApiPanel.BaseApiParameter {
        children: SchemaProperties[]
    }
}

/**
 * Defines valid interface and types of SDK API Panel
 */
export declare namespace SdkApiPanel {
    interface SdkApiBodyContent {
        description?: string | undefined,
        method?: ApiMethod | undefined,
        hint?: ApiHint | undefined,
        parameters?: ApiParameters | undefined,
        returnValues?: ApiReturnValues | undefined,
        samples?: ApiSample[] | undefined,
        deprecated?: boolean
    }
    interface ApiMethod {
        lang: string,
        code: string
    }
    interface ApiHint {
        containerType: "note" | "warning" | "error",
        text: string
    }
    interface ApiParameter extends ApiPanel.BaseApiParameter {
        // TODO: Leave this here to avoid type error,
        // and to support children in future
        children: any[]
    }
    type ApiReturnValues = ApiReturnValue[]
    interface ApiReturnValue {
        type: string,
        description: string
    }
}