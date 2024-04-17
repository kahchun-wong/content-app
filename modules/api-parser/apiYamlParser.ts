import jsyaml              from 'js-yaml'
import { parseSdkApiYaml } from './parseSdkYaml'
import { parseWebApiYaml } from './parseWebYaml'

/**
 * Returns true if content is valid API YAML
 */
export const isValidApiYaml = (content: any) => {
    try {
        resolveApiType(resolveApiYamlObject(content))
        return true
    } catch(err) {
        return false
    }
}

/**
 * To parse API YAML into markdown content
 */
export const parseApiYaml = async (content: any) => {
    const apiYaml = resolveApiYamlObject(content)
    const apiType = resolveApiType(apiYaml)

    return apiType == ApiType.WEB 
        ? await parseWebApiYaml(apiYaml) 
        : await parseSdkApiYaml(apiYaml)
}

/**
 * Enum for API Types
 */
enum ApiType {
    WEB,
    SDK
}

/**
 * Resolve the API YAML object from content
 * 
 * @param content the API YAML content
 */
const resolveApiYamlObject = (content: any) => {
    return (typeof content =='object' && !Array.isArray(content)) ? content : jsyaml.load(content)
}

/**
 * Resolve the API type of the API YAML object
 * 
 * @param apiYaml API YAML object
 * @returns the API type
 */
const resolveApiType = (apiYaml: any) => {
    if (apiYaml?.openapi) {
        return ApiType.WEB
        
    } else if (apiYaml?.faas) {
        return ApiType.SDK
    }

    throw {
        type: 'error',
        text: 'Invalid API YAML content.',
    }    
}
