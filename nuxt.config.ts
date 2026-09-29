// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        class: 'dark scroll-smooth'
      },
      title: 'Andrea Puglisi — Full-Stack Developer & AI Solutions Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#090a0f' },
        { name: 'color-scheme', content: 'dark' },
        { name: 'author', content: 'Andrea Puglisi' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'keywords', content: 'Andrea Puglisi, Full-Stack Developer, AI Solutions Engineer, Generative AI, LLM Integration, AI Agents, RAG, Nuxt 3, Vue 3, TypeScript, Python, Node.js, Laravel, PHP, Tailwind CSS, Software Engineer Italy, Ragusa Sicily Developer' },
        { name: 'geo.region', content: 'IT-88' },
        { name: 'geo.placename', content: 'Ragusa' },
        { name: 'geo.position', content: '36.9273;14.7145' },
        { name: 'ICBM', content: '36.9273, 14.7145' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://andreapuglisi.io/' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=JetBrains+Mono:wght@400;500;600;700&display=swap' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },
  nitro: {
    compressPublicAssets: true
  }
})

