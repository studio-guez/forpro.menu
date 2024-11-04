// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        preset: 'node-server'
    },
    app: {
        baseURL: '/menus'
    },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
      '~/assets/_main.scss'
  ]
})
