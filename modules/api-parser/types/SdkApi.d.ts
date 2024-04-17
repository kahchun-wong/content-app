export declare namespace SdkApi {
    type Document<T extends {} = {}> = SdkApiV1.Document<T>;
    type TagObject = SdkApiV1.TagObject;
    type Tags = SdkApiV1.TagObject[];
    type Apis<T extends {} = {}, P extends {} = {}> = SdkApiV1.ApisObject<T>;
    type ApiItem = SdkApiV1.ApiItemObject;
    type Parameter = SdkApiV1.ParameterObject;
    type Parameters = SdkApiV1.ParameterObject[];
    type Method = SdkApiV1.MethodObject;
    type Hint = SdkApiV1.HintObject;
    type HintContainerType = SdkApiV1.HintContainerType;
    type ReturnValue = SdkApiV1.ReturnValueObject;
    type ReturnValues = SdkApiV1.ReturnValueObject[];
    type Sample = SdkApiV1.SampleObject;
    type Samples = SdkApiV1.SampleObject[];
}

export declare namespace SdkApiV1 {
    interface Document<T extends {} = {}> {
        faas: string;
        info: InfoObject;
        tags?: TagObject[];
        apis: ApisObject<T>;
    }
    interface InfoObject {
        title: string;
        description?: string;
        termsOfService?: string;
        contact?: ContactObject;
        license?: LicenseObject;
        version: string;
    }
    interface ContactObject {
        name?: string;
        url?: string;
        email?: string;
    }
    interface LicenseObject {
        name: string;
        url?: string;
    }
    interface TagObject {
        name: string;
        description?: string;
    }
    interface ApisObject<T extends {} = {}, P extends {} = {}> {
        [pattern: string]: (ApiItemObject<T> & P);
    }
    type ApiItemObject<T extends {} = {}> = {
        tags?: string[];
        summary?: string;
        description?: string;
        method?: MethodObject;
        hint?: HintObject;
        parameters?: ParameterObject[];
        returnValue?: ReturnValueObject[];
        samples?: SampleObject[];
        deprecated?: boolean;
    }
    interface ParameterObject {
        name: string,
        description?: string,
        required?: boolean,
        type: string
    }
    interface MethodObject {
        lang: string,
        code: string
    }
    interface HintObject {
        containerType: HintContainerType,
        text: string
    }
    type HintContainerType = "note" | "warning" | "error"
    interface ReturnValueObject {
        type: string,
        description: string
    }
    interface SampleObject {
        name: string,
        value: {
            lang: string,
            code: string
        }
    }
}