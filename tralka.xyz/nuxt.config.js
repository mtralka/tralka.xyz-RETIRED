export default {
  target: 'static',
  head: {
    title: 'Matthew Tralka',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛰️</text></svg>',
      },
    ],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-windicss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/composition-api/module',
    'nuxt-purge-icons-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true,
  },
  purgeIcons: {},
  googleFonts: {
    families: {
      Montserrat: {
        wght: [100, 200, 300, 400, 600, 700, 800, 900],
      },
      'Work Sans': {
        wght: [100, 200, 300, 400, 600, 700, 800, 900],
      },
    },
  },
}
