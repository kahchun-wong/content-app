import type { ApiPanel, SdkApiPanel } from './types/ApiPanel'
import type { SdkApi } from './types/SdkApi'
import Ajv from 'ajv/dist/2020.js'
import _ from 'lodash'
import utils from './utils'
import { encode } from './encode'
import faasSdkApiSchemas from './schemas/sdk-api/index'

/**
 * Validate the SDK API file using AJV JSON validator library 
 * and parse the validated data into structured API objects
 * to build the SDK API Panels.
 */
export const parseSdkApiYaml = (apiYaml: SdkApi.Document) => {
    return validateSDKSchema(apiYaml)
        .then((apiYaml) => resolveSdkApiPanels(apiYaml))
        .then((apiPanelObjects) => utils.buildApiPanels(apiPanelObjects, "sdk"))
        .catch((err) => { throw err })
}

/**
 * Validate SDK Schema with the json schema specified in schemas directory
 */
const validateSDKSchema = (apiYaml: SdkApi.Document) => {
    return new Promise<SdkApi.Document>((resolve, reject) => {
        const schema = resolveSchema(apiYaml)
        const ajv = initializeAjv()

        // Validate against the schema
        let isValid = ajv.validate(schema, apiYaml)
        if (!isValid) {
            let err = ajv.errors
            let message = "SDK API schema validation failed."
            let details = utils.collectAjvErrorDetails(err)
            reject({ type: 'error', text: message, details: details })
        }

        resolve(apiYaml)
    })
}

/**
 * Resolve schema of given version. Throw error if the version value is invalid
 */
const resolveSchema = (apiYaml: SdkApi.Document) => {
    // no version field
    if (apiYaml.faas == undefined) {
        throw {
            type: 'error',
            text: `${apiYaml} is not a valid SDK API definition`
        }
    }

    const version = apiYaml.faas

    // Invalid version type
    if (typeof version != 'string') {
        throw {
            type: 'error',
            text: 'SDK API version number must be a string (e.g. "1.0.0") not a number.'
        }
    }

    const schema = faasSdkApiSchemas[version]

    // Unsupported version
    if (!schema) {
        throw {
            type: 'error',
            text: `Unsupported SDK API version: ${version}. The parser only supports versions ${Object.keys(faasSdkApiSchemas)}`,
        }
    }

    return schema
}

/**
 * Determines which version of Ajv to load and prepares it for use.
 *
 * @returns {Ajv}
 */
const initializeAjv = () => {
    const opts = {
        allErrors: true,
        strict: false,
        validateFormats: false
    }

    const ajv = new Ajv(opts)
    const ajvCustomSchemaKeywords = [
        {
            keyword: 'uniqueProperty',
            validate: function (schema: any, data: any) {
                const propertyName = schema.propertyName
        
                if (!Array.isArray(data)) {
                    return true
                }
        
                const propertyValues = data.map(obj => obj[propertyName])
                return new Set(propertyValues).size === propertyValues.length
            }
        }
    ]

    // add custom keywords in ajv schema
    ajvCustomSchemaKeywords.forEach(keyword => {
        ajv.addKeyword(keyword)
    });

    return ajv
}

/**
 * Retrieve the API properties from the validated SDK API YAML file
 * and map them into structured API panel objects.
 * 
 * The API object comprises:
 * 1. Header  -  APIPanelHeader {title, description}
 * 2. Body    -  SdkApiPanel {title, description, hint, deprecated, method, param, returns, sample}
 */
const resolveSdkApiPanels = (apiYaml: SdkApi.Document) => {
    if (_.isEmpty(apiYaml))
        return undefined
  
    let apiGroupHeaders = utils.resolveApiGroupHeaders(apiYaml?.tags)
    let apiContents = resolveSdkApiContents(apiYaml.apis)
    
    return utils.resolveApiPanelGroups(apiGroupHeaders, apiContents)
}

  /**
 * Retrieve all SDK APIs with key (i.e. tags) and value (i.e. <SdkApiPanel> attributes)
 */
const resolveSdkApiContents = (apis: SdkApi.Apis) => {
    if (_.isEmpty(apis))
        return {}
  
    let apiContents: ApiPanel.ApiContents = {}
    Object.keys(apis).forEach(apiKey => {
        const apiItem = apis[apiKey]
        const apiTags = utils.resolveSingleApiTags(apiItem)
        for (const tag of apiTags) {
            const sdkApiContent = resolveSdkApiContent(apiItem)
            if (sdkApiContent)
                apiContents[tag] = [...(apiContents[tag] ?? []), sdkApiContent]
        }
    })

    return apiContents
}

/**
 * Retrieve api and map them into structured SDK API object.
 * 
 * The SDK API comprises:
 *  a) Title
 *  b) Description
 *  c) Hint
 *  d) Deprecated
 *  e) Method
 *  f) Parameters
 *  g) Return Value
 *  h) Sample
 */
const resolveSdkApiContent = (apiItem: SdkApi.ApiItem) => {
    if (_.isEmpty(apiItem))
        return undefined
  
    const apiContent: ApiPanel.ApiContent = {}

    // API header
    apiContent.header = {
        title: encode(apiItem.summary, "'")
    }

    // API body content
    apiContent.body = {
        description: apiItem.description,
        method: resolveMethod(apiItem.method),
        hint: resolveHint(apiItem.hint),
        parameters: resolveParameters(apiItem.parameters),
        returnValues: resolveReturnValues(apiItem.returnValue),
        samples: resolveSamples(apiItem.samples),
        deprecated: apiItem.deprecated
    }
    
    return apiContent
}

/**
 * Resolve method object with props "lang" and "code"
 */
const resolveMethod = (method: SdkApi.Method | undefined) => {
    if (_.isEmpty(method))
        return undefined
  
    const lang =  method.lang
    const code = encode(method.code, "'")
  
    return { lang: lang, code: code }
}

/**
 * Resolve hint object
 */
const resolveHint = (hint: SdkApi.Hint | undefined) => {
    if (_.isEmpty(hint))
        return undefined
  
    const containerType = hint.containerType
    const text = encode(hint.text, "'")
  
    return { containerType: containerType, text: text }
}

/**
 * Resolve parameters object
 */
const resolveParameters = (parameters: SdkApi.Parameters | undefined) => {
    if (_.isEmpty(parameters))
        return undefined
  
    const parametersObject: SdkApiPanel.ApiParameter[] = []
    parameters?.forEach((parameter) => {
        parametersObject.push({
            name: parameter.name,
            description: parameter.description,
            required: parameter.required,
            type: parameter.type,
            children: []
        })
    })
  
    return parametersObject
}

/**
 * Resolve return values object
 */
const resolveReturnValues = (returnValues: SdkApi.ReturnValues | undefined) => {
    if (_.isEmpty(returnValues))
        return undefined
  
    const returnValuesObject: SdkApiPanel.ApiReturnValues = []
    returnValues?.forEach((returnValue) => {
        returnValuesObject.push({
            type: returnValue.type,
            description: returnValue.description
        })
    })
  
    return returnValuesObject
}

/**
 * Resolve samples object
 */
const resolveSamples = (samples: SdkApi.Samples | undefined) => {
    if (_.isEmpty(samples))
        return undefined

    const samplesObject: ApiPanel.ApiSample[] = []
    samples?.forEach((sample) => {
        samplesObject.push({
            name: sample.name,
            value: [...[], sample.value]
        })
    })
  
    return samplesObject
}


