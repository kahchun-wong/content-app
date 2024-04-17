import _ from "lodash"

// List of supported special characters
const DOUBLE_QUOTE: string = "\""
const SINGLE_QUOTE: string = "'"
const BACK_QUOTE: string = "`"

// Mapping of special character encoding
const ENCODING = {
    [DOUBLE_QUOTE]: "\&quot;",
    [SINGLE_QUOTE]: "\&#39;",
    [BACK_QUOTE]: "\\&#96;"
}

/**
 * Escape characters
 * Replace matching regex with target value, returning the string with replaced values
 * Scenario:
 * (1) Multiple escape char /
 * (2) Encoded html entities in yaml file (coated with backquote `)
 * (3) Special char with no encoded or escaped in yaml
 * (4) If placed in <code>e.g. &quot;</code>, entities remain display
 */

export const encodeAll = (str: string = '') =>{
    if(_.isEmpty(str))
        return str

    let strUpdates = str
    for(const specialChar in ENCODING){
        //replacing all special char with encoded value from text
        strUpdates = strUpdates?.replace(new RegExp(specialChar,"g"), ENCODING[specialChar]);
    }
    return strUpdates
}

export const encode = (str: string = '', specialChar: string = '') =>{
    if(_.isEmpty(str) || _.isEmpty(specialChar))
        return str

    let strUpdates = str
    //replacing special char with encoded value from text
    return strUpdates?.replace(new RegExp(specialChar,"g"), ENCODING[specialChar]);
}