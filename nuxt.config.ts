import remarkGridTable from '@adobe/remark-gridtables'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxthq/studio',
    'nuxt-primevue',
    'nuxt-icon',
    '@nuxtjs/google-fonts'
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
      fields: [ 'description', 'icon', 'ignore' ]
    },
    markdown: {
      remarkPlugins: {
        '@adobe/remark-gridtables': remarkGridTable
      },
      toc: {
        depth: 3,
        searchDepth: 3
      }
    },
    highlight: {
      theme: 'material-theme',
      langs: [
        'json', 
        'js', 
        'ts', 
        'html', 
        'css', 
        'vue', 
        'shell', 
        'mdc', 
        'md', 
        'yaml',
        'java',
        'swift'
      ]
    }
  },
  googleFonts: {
    families: {
      'Source Sans Pro': true
    }
  },
  css: [
    './assets/styles/index.scss',
    'primevue/resources/themes/aura-light-green/theme.css',
    'primeicons/primeicons.css'
  ],
  alias: {
    'modules': '../modules'
  }
})
