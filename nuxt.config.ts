export default defineNuxtConfig({
  target: "server",
  telemetry: false,
  // plugins: [{ src: "vue-notion/nuxt/plugin.js", mode: "client" }],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-svgo',
    '@nuxt/image',
    ['vue3-notion/nuxt', { css: true }],
  ],
  css: [
    '@/assets/scss/app.scss',
  ],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  svgo: {
    componentPrefix: 'icons'
  },
  imageOptions: {
    component: "nuxt-img",
    "some-attribute": "vue-notion-attr",
    loading: "lazy"
  }
});
