export default defineNuxtConfig({
  build: {
    transpile: ["vue-notion"],
  },
  telemetry: false,
  // plugins: [{ src: "vue-notion/nuxt/plugin.js", mode: "client" }],
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-svgo'
  ],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    }
  },
  css: [
    '@/assets/scss/app.scss',
  ],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  svgo: {
    componentPrefix: 'icons'
  }
});
