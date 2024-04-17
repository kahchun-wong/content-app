/******************************************************************************
 * Utility class to parse OpenAPI specification file into structured format
 * which is then translated into Web API Panel component for rendering.
 * 
 * TODO List:
 * 1. To support SDK API Panel component [✓]
 * 2. To include parameters of "query", "path", and "cookie" [✓]
 * 3. To support multiple request & response content types [✓]
 * 4. To support multiple response status codes [✓]
 * 5. To support multiple samples? [ ]
 * 6. To support externalValue field for examples [ ]
 * 7. To handle characters which need to escape [✓]
 * 8. To support multiple yaml versioning based on either web-api/sdk-api [ ]
 * 9. To support standard/custom yaml [ ]
 *****************************************************************************/

import type { ApiPanel, WebApiPanel } from './types/ApiPanel'
import type { WebApi }   from './types/WebApi'
import { HttpMethods }   from './types/HttpMethods'
import SwaggerParser     from '@apidevtools/swagger-parser'
import _                 from 'lodash'
import { encodeAll }     from './encode'
import utils             from './utils'

/**
 * Dereference the API YAML file using SwaggerParser library 
 * and parse the dereference data into structured API objects
 * to build the Web API Panels.
 */
export const parseWebApiYaml = async (apiYaml: WebApi.Document) => {
    return await SwaggerParser.validate(apiYaml)
        .then(async () => await SwaggerParser.dereference(apiYaml))
        .then((dereferencedApiYaml) => resolveWebApiPanels(dereferencedApiYaml))
        .then((apiPanelObjects) => utils.buildApiPanels(apiPanelObjects, "web"))
        .catch(err => { throw rebuildError(err) })
}

/**
 * Retrieve the API properties from the validated Web API YAML object
 * and map them into structured Web API objects.
 * 
 * The Web API object comprises:
 * 1. Header - { title, description }
 * 2. Body   - { path, httpmethod, title, description, parameters, request, request sample, response, response sample }
 */
const resolveWebApiPanels = (apiYaml: WebApi.Document) => {
    if (_.isEmpty(apiYaml))
        return undefined

    const apiGroupHeaders = utils.resolveApiGroupHeaders(apiYaml?.tags)
    const apiContents = resolveWebApiContents(resolveAllApiPaths(apiYaml?.paths))
    
    return utils.resolveApiPanelGroups(apiGroupHeaders, apiContents)
}

/**
 * The dereferenced WebApi definition object isn't in the format that we want. 
 * Hence this is to extract all API paths and the contents of its respective HTTP methods 
 * and put them into a collection for further processing later.
 */
const resolveAllApiPaths = (pathsObject: WebApi.PathsObject) => {
    const apiPaths: WebApiPanel.ApiPath[] = []

    if (pathsObject) {
        // Iterate over all the API paths
        Object.keys(pathsObject).forEach(path => {
            const pathObject = pathsObject[path]
            if (pathObject) {
                // Nested iteration over every HTTP method of current API path
                Object.keys(pathObject).forEach((key) => {
                    // Maintain contents of each [API path + HTTP method] combination as one object
                    const httpMethod: HttpMethods = HttpMethods[key.toUpperCase() as keyof typeof HttpMethods]
                    apiPaths.push({ path: path, httpMethod: httpMethod, props: pathObject[httpMethod] })
                })
            }
        })
    }

    return apiPaths
}

/**
 * Retrieve all Web APIs with key (i.e. tags) and value (i.e. <WebApiPanel> attributes)
 */
const resolveWebApiContents = (apiPaths: WebApiPanel.ApiPath[]) => {
    if (_.isEmpty(apiPaths))
        return {}

    const webApiContents: ApiPanel.ApiContents = {}
    apiPaths.forEach(apiPath => {
        const apiTags = utils.resolveSingleApiTags(apiPath.props)
        for (const tag of apiTags) {
            const webApiContent = resolveWebApiContent(apiPath)
            if (webApiContent)
                webApiContents[tag] = [...(webApiContents[tag] ?? []), webApiContent]
        }
    })

    return webApiContents
}

/**
 * Retrieve the Web API properties from the deferenced API YAML file
 * and map them into structured API objects.
 * 
 * The API object comprises:
 * 1. Path
 * 2. HTTP Method
 * 3. Title
 * 4. Description
 * 5. Parameters (header, query, path, cookie)
 * 6. Request
 * 7. Request Sample
 * 8. Response
 * 9. Response Sample
 */
const resolveWebApiContent = (apiPath: WebApiPanel.ApiPath) => {
    if (_.isEmpty(apiPath))
        return undefined
    
    // Initialize API object to be pushed later into the collection
    const apiContent: ApiPanel.ApiContent = {}
    const props = apiPath.props as WebApi.OperationObject

    // API header
    apiContent.header = {
        // To add httpMethod as attribute for sidebar menu item rendering
        title: encodeAll(`[${props.summary}]{httpMethod=${apiPath.httpMethod}}`)
    }

    // API body content
    apiContent.body = {
        // API Path, HTTP Method
        path: encodeAll(apiPath.path),
        httpMethod: encodeAll(apiPath.httpMethod),
        description: encodeAll(props.description),

        // Parameters
        parameters: resolveParameters(props.parameters),

        // Request, supports multiple content types
        request: resolveRequest(props.requestBody),

        // Response, support multiple status codes & content types
        responses: resolveResponses(props.responses)
    }
    
    return apiContent
}

/**
 * To resolve all parameters of the API and group them into strings
 * Parameter types:
 * 1. header
 * 2. query
 * 3. path
 * 4. cookie
 */
const resolveParameters = (parameters: WebApi.Parameters | undefined)  => {
    const params: WebApiPanel.ApiParameters = {
        header: [],
        query: [],
        path: [],
        cookie: []
    }

    parameters?.forEach((parameter)  => {
        const parameterObject = parameter as WebApi.ParameterObject
        const param: WebApiPanel.ApiParameter = {
            name: parameterObject.name,
            type: parameterObject.schema?.type,
            required: parameterObject.required,
            deprecated: parameterObject.deprecated,
            description: parameterObject.description,
            children: resolveProperties(parameterObject.schema)
        }
        params[parameterObject.in].push(param)
    })

    return params
}

/**
 * A wrapper function to resolve request properties and sample
 */
const resolveRequest = (requestBody: WebApi.RequestBody | undefined) => {
    const requestBodyObject = requestBody as WebApi.RequestBodyObject
    const requestContentTypeBodies: WebApiPanel.ApiContentTypeBodies = []
    const requestStatusCodeBody = [] as WebApiPanel.ApiStatusCodeBody[]

    const requestBodyContents = requestBodyObject?.content
    Object.keys(requestBodyContents).forEach(contentType => {
        const requestContentTypeBody = resolveContentTypeBody(requestBodyContents, contentType)
        requestContentTypeBodies.push(requestContentTypeBody)
    })

    if (!_.isEmpty(requestBodyObject)) {
        // Using dummy status code since request body has no status code
        const statusCode = '000'
        const description = requestBodyObject?.description
        requestStatusCodeBody.push({
            statusCode: statusCode,
            body: { 
                description: description, 
                content: requestContentTypeBodies 
            }
        })
    }

    return requestStatusCodeBody
}

/**
 * A wrapper function to resolve all responses
 */
const resolveResponses = (responses: WebApi.Responses | undefined) => {
    const responseStatusCodeBody = [] as WebApiPanel.ApiStatusCodeBody[]
    
    // To extract all status code contents from the response
    if (!_.isEmpty(responses)) {
        Object.keys(responses).forEach(statusCode => {
            const response = responses[statusCode] as WebApi.ResponseObject
            const description = response?.description
            responseStatusCodeBody.push({
                statusCode: statusCode,
                body: { 
                    description: description, 
                    content: resolveResponse(response) 
                }
            })
        })
    }

    return responseStatusCodeBody
}

/**
 * To resolve response properties and sample
 */
const resolveResponse = (response: WebApi.ResponseObject) => {
    const responseContentTypeBodies: WebApiPanel.ApiContentTypeBodies = []
     
    if(response?.content) {
        const responseContents = response?.content
        Object.keys(responseContents).forEach(contentType => {
            const responseContentTypeBody = resolveContentTypeBody(responseContents, contentType)
            responseContentTypeBodies.push(responseContentTypeBody)
        })
    }
    return responseContentTypeBodies;
}

/**
 * To extract the properties and sample of given content type from 
 * the request/response body.
 */
const resolveContentTypeBody = (bodyContents: WebApi.Contents, contentType: string) => {
    let properties = {} as WebApiPanel.ContentTypeSchemaProperties
    let samples: ApiPanel.Sample[] = []

    // Retrieve content of the content type
    const bodyContent = bodyContents[contentType]
    if (bodyContent) {
        properties = {
            contentType: contentType,
            properties: resolveProperties(bodyContent.schema)
        }

        samples = resolveSamples(contentType, bodyContent.examples)
    }

    return { properties: properties, samples: samples }
}

/**
 * To extract the request/response properties from the request/response 
 * schema recursively.
 */
const resolveProperties = (schema: WebApi.Schema | undefined) => {
    const schemaObject = schema as WebApi.SchemaObject
    const properties: WebApiPanel.SchemaProperties[] = []

    const isArraySchema = (schemaObject: WebApi.SchemaObject)
        : schemaObject is WebApi.ArraySchemaObject => {
            return schemaObject as WebApi.ArraySchemaObject !== undefined
                && schemaObject.type === 'array'
    }

    const schemaProperties = isArraySchema(schemaObject)
        ? (<WebApi.SchemaObject>schemaObject.items)?.properties
        : schemaObject.properties

    if (schemaProperties) {
        const requiredProperties = schemaObject?.required ?? []

        Object.keys(schemaProperties).forEach(propName => {
            const schemaProperty = schemaProperties[propName] as WebApi.SchemaObject
            const childProperties = resolveProperties(schemaProperty)

            properties.push({
                name: propName,
                type: schemaProperty.type,
                required: requiredProperties.includes(propName),
                deprecated:schemaProperty.deprecated,
                description: schemaProperty.description,
                example: schemaProperty.example,
                children: childProperties
            })
        })
    }

    return properties
}

/**
 * To extract the request/response samples from the request/response examples.
 * Supports only "value" field, "externalValue" is not supported.
 */
const resolveSamples = (contentType: string, examples: WebApi.Example | undefined) => {
    const samples: ApiPanel.Sample[] = []

    if (examples) {
        Object.keys(examples)
        .filter(exampleContentType => exampleContentType == contentType)
        .forEach(exampleContentType => {
            samples.push({
                lang: exampleContentType.split("/")[1],
                code: examples[exampleContentType]?.value
            })
        })
    }

    return samples
}

/**
 * Rebuild the error object if it is an Ajv error
 */
const rebuildError = (err: any) => {
    if (err.details) {
        let message = "Web API schema validation failed."
        let details = utils.collectAjvErrorDetails(err.details)
        return { type: 'error', text: message, details: details }
    } 

    return { type: 'error', text: err.message }
}