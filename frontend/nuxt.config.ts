// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  css: ['~/assets/css/index.css'],
  modules: [
    'vuetify-nuxt-module'
  ],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
        themes: {
          dark: {
            colors: {
              background: '#0a0a0f',
              surface: '#11111a',
              primary: '#6366f1',
              secondary: '#ec4899',
            }
          }
        }
      }
    }
  },
  app: {
    head: {
      title: 'CostCut | Premium AI Without the Cloud Bill',
      meta: [
        { name: 'description', content: 'CostCut is an intelligent routing engine that offloads tasks to local models and only uses expensive Cloud APIs when necessary.' }
      ]
    }
  }
})
