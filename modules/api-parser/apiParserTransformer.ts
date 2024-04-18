import type { ParsedContent } from '@nuxt/content/types'
import { defineTransformer } from '@nuxt/content/transformers'
import { isValidApiYaml, parseApiYaml } from './apiYamlParser'
import yamlTransformer from '@nuxt/content/transformers/yaml'
import markdownTransformer from '~/modules/markdown-transformer/markdownTransformer'

export default defineTransformer({
    name: 'api-parser-transformer',
    extensions: ['.md'], 
    async parse (_id, content) {
        const parseContent = (content: any) => {
            const match = String(content)?.match(/^---([\s\S]*?)---([\s\S]*)/)
        
            if (match) {
                return [ `---\n${match[1]}\n---\n\n`, match[2] ]
            }
        
            return [ , content ]
        }

        const parseToMarkdownContent = (content: any) => {
            console.log('parsed: ' + content)
            return markdownTransformer.parse
                ? markdownTransformer.parse(_id, content, {})
                : <ParsedContent> { body: content }
        }

        // const parseToDefaultYamlContent = (content: any) => {
        //     return yamlTransformer.parse
        //         ? yamlTransformer.parse(_id, content, {})
        //         : <ParsedContent> { body: content }
        // }
        
        const [ frontmatter, yamlContent ] = parseContent(content)
        
        if (!isValidApiYaml(yamlContent)) {
            console.log("invalid api yaml")
            return parseToMarkdownContent(content)
        }

        return await parseApiYaml(yamlContent)
            .then((parsedContent) => parseToMarkdownContent((frontmatter?? '') + parsedContent))
            .catch((err) => {
                console.error(err)
                console.warn("Failed to parse API YAML, fallback to default YAML parser.")
                return parseToMarkdownContent(content)
            })
    }
})
  