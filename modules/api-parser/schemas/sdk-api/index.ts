/**
 * JSON Schema for SDK API Specification v1.0
 */
import faasSdkApiV1 from './v1.0.0/schema.js'

interface SdkSchemas {
  [version: string]: any
}

/**
 * JSON Schemas for every version of the SDK API Specification
 */
const faasSdkApiSchemas: SdkSchemas = {
  '1.0.0': faasSdkApiV1,
}

export default faasSdkApiSchemas
