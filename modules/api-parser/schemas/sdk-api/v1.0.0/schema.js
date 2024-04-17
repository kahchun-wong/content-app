const faasSdkApiV1 = {
  "type": "object",
  "properties": {
    "faas": {
      "type": "string",
      "pattern": "^(\\d+\\.)(\\d+\\.)(\\d+(-.+)?)$"
    },
    "info": {
      "$ref": "#/$defs/info"
    },
    "tags": {
      "$ref": "#/$defs/tags"
    },
    "apis": {
      "$ref": "#/$defs/apis"
    }
  },
  "required": [
    "faas",
    "info",
    "apis"
  ],
  "$defs": {
    "info": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "summary": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "termsOfService": {
          "type": "string",
          "format": "uri"
        },
        "contact": {
          "$ref": "#/$defs/contact"
        },
        "license": {
          "$ref": "#/$defs/license"
        },
        "version": {
          "type": "string"
        }
      },
      "required": [
        "title",
        "version"
      ]
    },
    "contact": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "url": {
          "type": "string",
          "format": "uri"
        },
        "email": {
          "type": "string",
          "format": "email"
        }
      }
    },
    "license": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "identifier": {
          "type": "string"
        },
        "url": {
          "type": "string",
          "format": "uri"
        }
      },
      "required": [
        "name"
      ],
      "dependentSchemas": {
        "identifier": {
          "not": {
            "required": [
              "url"
            ]
          }
        }
      }
    },
    "tags": {
      "type": "array",
      "uniqueProperty": { "propertyName": "name" },
      "items": {
        "$ref": "#/$defs/tag"
      }
    },
    "apis": {
      "type": "object",
      "patternProperties": {
        "^.+$": {
          "$ref": "#/$defs/api-item"
        }
      }
    },
    "api-item": {
      "type": "object",
      "properties": {
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "summary": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "method": {
          "type": "object",
          "properties": {
            "lang": {
              "type": "string"
            },
            "code": {
              "type": "string"
            }
          }, 
          "required": [
            "lang",
            "code"
          ],
          "additionalProperties": false
        },
        "hint": {
          "type": "object",
          "properties": {
            "containerType": {
              "type": "string"
            },
            "text": {
              "type": "string"
            }
          },
          "required": [
            "containerType",
            "text"
          ],
          "additionalProperties": false
        },
        "parameters": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/parameter"
          }
        },
        "returnValue": {
          "type": "array",
          "items": {
              "$ref": "#/$defs/return-value"
          }
        },
        "samples": {
          "type": "array",
          "items": {
              "$ref": "#/$defs/samples"
          }
        },
        "deprecated": {
          "default": false,
          "type": "boolean"
        }
      },
      "required": [
        "summary"
      ],
      "additionalProperties": false
    },
    "return-value": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string"
        },
        "description": {
          "type": "string"
        }
      },
      "required": [
        "type",
        "description"
      ],
      "additionalProperties": false
    },
    "tag": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        }
      },
      "required": [
        "name"
      ],
      "additionalProperties": false
    },
    "samples": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "value": {
          "type": "object",
          "properties": {
            "lang": {
              "type": "string"
            },
            "code": {
              "type": "string"
            }
          },
          "required": [
            "lang", 
            "code"
          ],
          "additionalProperties": false
        }
      },
      "required": [
        "name",
        "value"
      ],
      "additionalProperties": false
    },
    "parameter": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "required": {
          "default": false,
          "type": "boolean"
        },
        "type": {
          "type": "string"
        }
      },
      "required": [
        "name"
      ],
      "additionalProperties": false
    }
  }
}

export default faasSdkApiV1;