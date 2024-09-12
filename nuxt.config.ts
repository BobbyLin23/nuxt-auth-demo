// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/google-fonts',
  ],
  devServer: {
    port: 3001,
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  googleFonts: {
    families: {
      Poppins: {
        wght: [600],
      },
    },
  },
  components: [
    '~/components',
    {
      path: '~/components/auth',
      pathPrefix: false,
    },
    {
      path: '~/components/icon',
      pathPrefix: false,
    },
  ],
})
