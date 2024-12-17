import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  modules: [
    '@primevue/nuxt-module',
  ],

  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: Aura,
      },
    }
  },


});