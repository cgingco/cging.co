import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  fonts: {
    defaults: {
      weights: [400, 700],
      styles: ['normal'],
      subsets: [
        'cyrillic-ext',
        'cyrillic',
        'greek-ext',
        'greek',
        'vietnamese',
        'latin-ext',
        'latin',
      ]
    },
    families: [
      { name: 'Alte Haas Grostek', provider: 'local' },
    ]
  },
  modules: [
    '@nuxthub/core',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content'
  ],
  vite: {
    plugins: [
      svgLoader(),
    ],
  },
  devtools: { enabled: true }
})
