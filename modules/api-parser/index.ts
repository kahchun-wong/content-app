import { createResolver, defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'api-parser'
  },
  setup (_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // @ts-ignore
    nuxt.hook('content:context', (contentContext) => {
        contentContext.transformers.push(resolve('./apiParserTransformer.ts'))
    })
  }
})