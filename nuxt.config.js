const resolve = require("path").resolve;

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'blognuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  ],
  plugins: [
    { src: "~plugins/server_site/index.js", ssr: true }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  router: {
    extendRoutes (routes) {
      routes.push({
        name: "post",
        path: "/blog/:id/:slug",
        component: resolve(__dirname, "pages/blog/_id.vue")
      });
    }
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

