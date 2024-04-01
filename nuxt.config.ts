// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxthq/studio',
    'nuxt-primevue',
    'nuxt-icon'
  ],
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  content: {
    documentDriven: true,
    experimental: {
      search: true
    },
    navigation: {
      fields: [ 'description' ]
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      }
    }
  },
  css: [
    './assets/styles/index.scss',
    'primevue/resources/themes/aura-light-green/theme.css',
    'primeicons/primeicons.css'
  ]
})
