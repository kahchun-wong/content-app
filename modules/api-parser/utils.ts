/******************************************************************************
 * Utility class to parse OpenAPI specification file specified in the .md file 
 * into structured format which is then translated into Web API Panel component
 * for rendering.
 *****************************************************************************/

import type { ApiPanel }    from "./types/ApiPanel"
import type { WebApi }      from './types/WebApi'
import type { SdkApi }      from './types/SdkApi'
import type { ErrorObject } from 'ajv/dist/types'
import _                    from "lodash"
import { encode }           from "./encode.js"
import jsyaml               from 'js-yaml'

/**
 * Retrieve every single tag from root "tags" section and map them into structured API Panel Header object.
 */
const resolveApiGroupHeaders = (rootTags: (WebApi.TagObject | SdkApi.TagObject)[] | undefined) => {
    let headers: ApiPanel.ApiGroupHeader[] = []
    
    if (rootTags) {
        rootTags.forEach(rootTag => {
            const header = resolveRootTags(rootTag)
            if (header) {
                headers.push(header)
            }
        })
    }
    
    return headers
}

/**
 * Retrieve api group headers and map them into structured API object.
 * 
 * The API Panel Header comprises:
 *  a) Title
 *  b) Description
 */
const resolveRootTags = (tag: WebApi.TagObject | SdkApi.TagObject) => {
    if (_.isEmpty(tag))
        return undefined
  
    return <ApiPanel.ApiGroupHeader>{
        title: encode(tag.name, "'"),
        description: encode(tag.description, "'")
    }
}

/**
 * Retrieve list of tags from single api
 */
const resolveSingleApiTags = (apiOperation: WebApi.Operation | SdkApi.ApiItem, emptyTag = "") => {
    let tagList: string[] = []

    // clean up duplicate tags string
    let tags = [...new Set(apiOperation?.tags ?? [emptyTag])]
    for (let tag of tags) {
        tagList.push(encode(tag, "'"))
    }

    return tagList
}

/**
 * Retrieve api header (i.e. tags) and body (i.e. <SdkApiPanel>/<WebApiPanel> attributes) 
 * and map them into structured API objects of {apiPanelHeader, apiPanel}.
 */
const resolveApiPanelGroups = (headers: ApiPanel.ApiGroupHeader[], contents: ApiPanel.ApiContents) => {
    const allTags = [...headers, ...resolveApiTags(headers, Object.keys(contents))]

    const apiPanelGroups: ApiPanel.ApiPanelGroup[] = []
    allTags?.forEach(tag => {
        const apiPanelGroup = { header: tag, content: contents[tag.title] }
        apiPanelGroups.push(apiPanelGroup)
    })

    return apiPanelGroups
}

/**
 * Filter and return operation tags excluded in global/root tags
 */
const resolveApiTags = (headers: ApiPanel.ApiGroupHeader[], apiTags: string[]) => {
    return apiTags
      .filter(apiTags => !headers?.some(header => apiTags == header.title))
      .map(apiTags => ({ title: apiTags }));
}

/**
 * Build API Panel markdown of all API Panel objects
 */
const buildApiPanels = (apiPanelObjects: ApiPanel.ApiPanelGroup[] | undefined, type: "web" | "sdk") => {
    let apiPanelMarkdown = "";

    apiPanelObjects?.forEach(apiPanelObject => {
        apiPanelMarkdown += buildApiPanelGroupHeader(apiPanelObject.header)
        apiPanelObject.content?.forEach(content => {
            apiPanelMarkdown += buildApiPanelContent(content, type)
        })
    })

    return apiPanelMarkdown
}

/**
 * Build API Panel Group Header markdown of an API
 */
const buildApiPanelGroupHeader = (header: ApiPanel.ApiGroupHeader | undefined) => {
    let apiGroupHeaderMarkdown = "";
  
    if (header) {
        apiGroupHeaderMarkdown += header.title ? `## ${header.title} \n\n` : ""
        apiGroupHeaderMarkdown += header.description ? `${header.description} \n\n` : ""
    }
  
    return apiGroupHeaderMarkdown
}

/**
 * Build API Panel Content markdown of an API
 */
const buildApiPanelContent = (content: ApiPanel.ApiContent, type: "web" | "sdk") => {
    const body = content.body
    
    let apiBodyContentMarkdown = ''
    apiBodyContentMarkdown += content.header?.title ? `### ${content.header.title} \n\n` : ""
    apiBodyContentMarkdown += type === 'web' ? "::web-api-panel" : "::sdk-api-panel"
    apiBodyContentMarkdown += "\n---\n"
    apiBodyContentMarkdown += jsyaml.dump(body)
    apiBodyContentMarkdown += "\n---\n"
    apiBodyContentMarkdown += "\n::\n\n"

    return apiBodyContentMarkdown
}

/**
 * Run through a set of Ajv errors and compile them into an error message array.
 */
const collectAjvErrorDetails = (errors: ErrorObject<string, Record<string, any>, unknown>[] | any[] | null | undefined) =>{
    let details: {
        path: string,
        message: string,
        params: Record<string, any> | any[]
    }[] = []
  
    errors?.forEach((error => {
        const path = error.instancePath.length 
            ? error.instancePath
                // Removes the leading '/'
                .replace(/^\//, '')
                // Replace '/' with '.'
                .split("/").join(".")
                // Replace '~0' with '~' 
                .replace(/~0/g, "~")
                // Replace '~1' with '/'
                .replace(/~1/g, "/")
            : "/"
        details.push({ path: path, message: error.message, params: error.params }) 
    }))
  
    return details;
}

const utils = { 
    resolveApiGroupHeaders, 
    resolveSingleApiTags, 
    resolveApiPanelGroups, 
    resolveApiTags, 
    buildApiPanels, 
    collectAjvErrorDetails 
}

export default utils