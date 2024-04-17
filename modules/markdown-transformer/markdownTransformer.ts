import { defineTransformer } from '@nuxt/content/transformers'
import { parseMarkdown } from '@nuxtjs/mdc/runtime'
import { normalizeUri } from 'micromark-util-sanitize-uri'
import { isRelative } from 'ufo'
import { generatePath } from '@nuxt/content/transformers/path-meta'
//@ts-ignore
import { TYPE_TABLE, mdast2hastGridTablesHandler } from '@adobe/mdast-util-gridtables'

/**
 * Custom markdown transformer replicated from the default transformer 
 * to use 'remark-gridtables'
 */
export default defineTransformer({
    name: "markdown",
    extensions: [".md"],
    parse: async (_id: string, content: string, options = {}) => {
        const config = { ...options }
        config.rehypePlugins = await importPlugins(config.rehypePlugins)
        config.remarkPlugins = await importPlugins(config.remarkPlugins)

        const highlightOptions = options.highlight ? {
            ...options.highlight,
            // Pass only when it's an function. String values are handled by `@nuxtjs/mdc`
            highlighter: typeof options.highlight?.highlighter === "function" ? options.highlight.highlighter : void 0
        } : void 0

        const parsed = await parseMarkdown(content, {
            ...config,
            highlight: highlightOptions,
            remark: {
                plugins: config.remarkPlugins
            },
            rehype: {
                options: {
                handlers: {
                    link,
                    [TYPE_TABLE]: mdast2hastGridTablesHandler()
                }
                },
                plugins: config.rehypePlugins
            },
            toc: config.toc
        })

        return {
            ...parsed.data,
            excerpt: parsed.excerpt,
            body: {
                ...parsed.body,
                toc: parsed.toc
            },
            _type: "markdown",
            _id
        }
    }
})

async function importPlugins(plugins = {}) {
    const resolvedPlugins: any = {};
    for (const [name, plugin] of Object.entries<any>(plugins)) {
        if (plugin) {
            resolvedPlugins[name] = {
                instance: plugin.instance || await import(
                /* @vite-ignore */
                name
                ).then((m) => m.default || m),
                options: plugin
            }
        } else {
            resolvedPlugins[name] = false
        }
    }

    return resolvedPlugins
}

function link(state: any, node: any) {
    const properties = {
        ...node.attributes || {},
        href: normalizeUri(normalizeLink(node.url))
    }

    if (node.title !== null && node.title !== void 0) {
        properties.title = node.title
    }

    const result = {
        type: "element",
        tagName: "a",
        properties,
        children: state.all(node)
    }
    state.patch(node, result);

    return state.applyData(node, result);
}

function normalizeLink(link2: any) {
    const match = link2.match(/#.+$/)
    const hash = match ? match[0] : ""

    if (link2.replace(/#.+$/, "").endsWith(".md") && (isRelative(link2) || !/^https?/.test(link2) && !link2.startsWith("/"))) {
        return generatePath(link2.replace(".md" + hash, ""), { forceLeadingSlash: false }) + hash
    } else {
        return link2
    }
}
