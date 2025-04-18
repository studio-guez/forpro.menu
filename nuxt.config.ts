// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    app: {
        baseURL: '/'
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    css: [
        '~/assets/_main.scss'
    ],
    imports: {
        autoImport: false,
    }
})
