import type { ParsedContent } from '@nuxt/content/types'
import { defineTransformer } from '@nuxt/content/transformers'
import { isValidApiYaml, parseApiYaml } from './apiYamlParser'
import yamlTransformer from '@nuxt/content/transformers/yaml'
import markdownTransformer from '~/modules/markdown-transformer/markdownTransformer'

export default defineTransformer({
    name: 'api-parser-transformer',
    extensions: ['.yml', 'yaml'], 
    async parse (_id, content) {
        const parseContent = (content: any) => {
            const match = String(content)?.match(/^---([\s\S]*?)---([\s\S]*)/)
        
            if (match) {
                return [ `---\n${match[1]}\n---\n\n`, match[2] ]
            }
        
            return [ , content ]
        }

        const parseToMarkdownContent = (frontmatter: string, parsedContent: string) => {
            return markdownTransformer.parse
                ? markdownTransformer.parse(_id, frontmatter + parsedContent, {})
                : <ParsedContent> { body: content }
        }

        const parseToDefaultYamlContent = (content: any) => {
            return yamlTransformer.parse
                ? yamlTransformer.parse(_id, content, {})
                : <ParsedContent> { body: content }
        }
        
        const [ frontmatter, yamlContent ] = parseContent(content)
        
        if (!isValidApiYaml(yamlContent)) {
            return parseToDefaultYamlContent(yamlContent)
        }

        return await parseApiYaml(yamlContent)
            .then((parsedContent) => parseToMarkdownContent(frontmatter, parsedContent))
            .catch((err) => {
                console.error(err)
                console.warn("Failed to parse API YAML, fallback to default YAML parser.")
                return parseToDefaultYamlContent(yamlContent)
            })
    }
})
  