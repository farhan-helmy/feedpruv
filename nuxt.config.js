export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'feedpruv',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-supabase', {
      supabaseUrl: 'https://ufkwnttvpxtcrxavnayf.supabase.co',
      supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDY1MTkxNSwiZXhwIjoxOTQ2MjI3OTE1fQ.xlD_XsntwExviokD060mbVcwlY2NL4Hknh-Kz4udmd4'
    }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
