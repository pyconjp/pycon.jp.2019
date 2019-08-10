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
    titleTemplate: '%s - PyCon JP 2019',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "PyCon JP 2019 Python New Era" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' }
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
      themeColor0: "#4F455A", // テーマカラー0： ロゴのタイプ部分
      themeColor1: "#9C8CBE", // テーマカラー1： フレームボタン、開発スプリント等
      themeColor2: "#EBA4C3", // テーマカラー2： 小見出しテキスト、チュートリアル等
      themeColor3: "#5970A5", // テーマカラー3： エリア見出し、セクション見出しマーカー、カンファレンス等
      themeColor3Transparent: "#BBC2D6", // テーマカラー3、透明度50%
      themeColor4: "#C8A177", // テーマカラー4： 子供向けワークショップ等
      apply: "#E55493", // 申し込み・リンクカラー： 申し込みボタン基本色、テキストリンク
      applyLighten: "#E75C99", // 申し込み・リンクカラー明： 申し込みボタン（グラデーション明側）
      applyDarken: "#E24D8B", // 申し込み・リンクカラー暗： 申し込みボタン（グラデーション暗側）
      blueBlack: "#36476D", // ブルーブラック： ドロップシャドウ（基本）
      pupleBlack: "#443565", // パープルブラック： ドロップシャドウ（テーマカラー1が地の場合）
      pinkBlack: "#6E314C", // ピンクブラック： ドロップシャドウ（テーマカラー2が地の場合）
      brownBlack: "#544331", // ブラウンブラック： ドロップシャドウ（テーマカラー4が地の場合）
      themeBlack: "#222222", // ブラック： キャッチフレーズ、見出しテキスト
      text1: "#444444", // グレー1： 本文テキスト1
      text2: "#888888", // グレー2： 本文テキスト2
      blueGrey1: "#CDCFD4", // ブルーグレー： セクション見出しサブテキスト、補足・注釈テキスト
      blueGrey2: "#E9EBF0", // ブルーグレー2： 罫線、エリア背景
      themeRed: "#CC2343", // レッド： 注意、日曜・祝日
      themeBlue: "#3484C0", // ブルー： 土曜
      // themeColor3: "#D66194",
      // themeColor3: "#5E6FA1",
      secondary: "#C2A27D",
      secondaryText: "#C2A27D",
      tertiary: "#998CBA",
      quaternary: "#E1A7C2",
      background: "#E9EBF0",
      twitter: "#6BAAE8",
      facebook: "#3876EA",
      // accent: colors.grey.darken3,
      // info: colors.teal.lighten1,
      // warning: colors.amber.base,
      // error: colors.deepOrange.accent4,
      // success: colors.green.accent3,
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
