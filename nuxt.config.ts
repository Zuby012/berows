// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/image',
  ],
  app: {
    head: {
      titleTemplate: 'Berows University - %s',
      link: [
        {rel: 'icon', type: 'image/png', href: '/logo1.1.png'}
      ],
    }
  },
  generate: {
    fallback: '404.html' // This ensures a 404.html file is created in the output directory
  }
})
