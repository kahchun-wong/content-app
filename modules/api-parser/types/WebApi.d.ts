import type { OpenAPI, OpenAPIV2, OpenAPIV3, OpenAPIV3_1 } from 'openapi-types'

/**
 * Defines valid interface and types of API Panel
 */
export declare namespace WebApi {
    type Document = OpenAPI.Document;
    type TagObject = OpenAPIV2.TagObject | OpenAPIV3.TagObject | OpenAPIV3.TagObject | undefined
    type PathsObject = OpenAPIV2.PathsObject | OpenAPIV3.PathsObject | OpenAPIV3_1.PathsObject | undefined
    type Parameter = OpenAPI.Parameter
    type ParameterObject = OpenAPIV3_1.ParameterObject | OpenAPIV3.ParameterObject | OpenAPIV2.Parameter
    type Parameters = OpenAPI.Parameters
    type Operation = OpenAPI.Operation | undefined
    type OperationObject = OpenAPIV3.OperationObject | OpenAPIV3_1.OperationObject
    interface Contents {
        [media: string]: (OpenAPIV3.MediaTypeObject | OpenAPIV3_1.MediaTypeObject)
    }
    type RequestBody = OpenAPIV2.ReferenceObject | OpenAPIV3.ReferenceObject | OpenAPIV3.RequestBodyObject | OpenAPIV3_1.ReferenceObject | OpenAPIV3_1.RequestBodyObject
    type RequestBodyObject = OpenAPIV3.RequestBodyObject | OpenAPIV3_1.RequestBodyObject
    type Responses =  OpenAPIV3.ResponsesObject | OpenAPIV3_1.ResponsesObject
    type ResponseObject = OpenAPIV3.ResponseObject | OpenAPIV3_1.ResponseObject
    type Schema = OpenAPIV2.ReferenceObject | OpenAPIV2.SchemaObject | OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject | OpenAPIV3_1.ReferenceObject | OpenAPIV3_1.SchemaObject
    type SchemaObject = OpenAPIV3.SchemaObject | OpenAPIV3_1.SchemaObject
    type ArraySchemaObject = OpenAPIV3.ArraySchemaObject | OpenAPIV3_1.ArraySchemaObject
    interface Example {
        [media: string]: ReferenceObject | ExampleObject
    }
}