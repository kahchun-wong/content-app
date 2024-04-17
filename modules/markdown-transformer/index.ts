import { createResolver, defineNuxtModule } from 'nuxt/kit'

/**
 * Module for custom markdown transformer
 */
export default defineNuxtModule({
  meta: {
    name: 'markdown-transformer'
  },
  setup (_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // @ts-ignore
    nuxt.hook('content:context', (contentContext) => {
        contentContext.transformers.push(resolve('./markdownTransformer.ts'))
    })
  }
})