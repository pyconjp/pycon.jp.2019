import colors from 'vuetify/es5/util/colors'

let routerBase = "/"
let dotenvFile = "./config/.env.dev"

switch(process.env.DEPLOY_ENV){
  case "DEV":
    routerBase = '/dev-2019/'
    break
  case "PRD":
    routerBase = '/2019/'
    dotenvFile = "./config/.env.prd"
    break
  default:
    routerBase = "/"
}

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/style/app.styl',
    '@/assets/style/custom.styl',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "@/plugins/googleMap.js",
    "@/plugins/i18n.js"
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    [
      '@nuxtjs/dotenv', { filename: dotenvFile }
    ],
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: "/"
  },
  router: {
    middleware: 'i18n',
    base: routerBase
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      primary: "#D66194",
      primaryText: "#5E6FA1",
      secondary: "#C2A27D",
      secondaryText: "#C2A27D",
      tertiary: "#998CBA",
      quaternary: "#E1A7C2",
      background: "#E9EBF0",
      twitter: "#6BAAE8",
      facebook: "#3876EA",
      textColor: "#4D4659",
      accent: colors.grey.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    babel: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              ie: "11"
            },
            useBuiltIns: 'usage',
            corejs: 3,
            // { version: 3, proposals: true },
          }
        ]
      ],
    },
    postcss: {
      plugins: {
      },
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    },
    extend(config, ctx) {
      // console.log(config)
      config.entry = ["core-js/stable", "regenerator-runtime/runtime"]
    }
  }
}
