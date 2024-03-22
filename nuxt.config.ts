// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxthq/studio',
    'nuxt-primevue'
  ],
  content: {
    documentDriven: true,
    markdown: {
      remarkPlugins: {
        'remark-container': {}
      }
    }
  },
  css: ['primevue/resources/themes/aura-light-green/theme.css']
})
