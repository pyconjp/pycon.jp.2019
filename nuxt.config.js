const baseUrl = process.env.BASE_URL || '/2019';
module.exports = {
  head: {
    titleTemplate: '%s - PyCon JP 2018',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'Meta description' },
      { hid: 'keywords', name: 'keywords', content: 'PyConJP2018,python,カンファレンス' },
      { property: 'og:locale', content: 'ja_JP' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'PyCon JP 2018 in Tokyo | Sep 17th &ndash; Sep 18th' },
      { property: 'og:description', content: 'PyCon JP 2018 ひろがるpython' },
      { property: 'og:url', content: 'https://pycon.jp/2018' },
      { property: 'og:image', content: 'https://pycon.jp/2018/common/ogp_image.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: baseUrl + '/common/favicon.ico'}
    ]
  },
  build: {
    vendor: ['uikit']
  },
  css: [
    { src: '~/assets/css/main.sass', lang: 'sass' },
  ],
  router: {
    middleware: 'i18n',
    base: '/2019/'
  },
  plugins: [
            '~/plugins/i18n.js',
            {src: '~/plugins/element-scroll.js', ssr: false},
            ],
  generate: {
    minify: {
      collapseWhitespace: false
    },
    routes: ['/','/code-of-conduct','/sponsor','/event/conference','/event/sessions','/en','/en/code-of-conduct','/en/sponsor','/en/event/conference','/en/event/sessions']
  },
  env: {
    baseUrl: '/2019',
    sponsorApiEndpoint: 'https://script.google.com/macros/s/AKfycbyKmE6Ew9aWmOnj3VSwn435T8cx8kF0SkJb9fN7_PdE_ME2QpqP/exec',
    talkApiEndpoint: 'https://script.google.com/macros/s/AKfycbyW6ECkWGiV6godDT9zWpwC2somqXW2UnTQfigMGAdJ2Uhy-50/exec',
    posterApiEndpoint: 'https://script.google.com/macros/s/AKfycbw9iy2_I5n5mxKcrX_wghzz18f5fUSdeROGpdic2Q/exec',
    ltApiEndpoint: 'https://script.google.com/macros/s/AKfycbw6udsETgpLvHJxooAy1RjYKqQ0QECHITnT2oRHRA/exec',
    newsApiEndpoint: 'https://script.googleusercontent.com/macros/echo?user_content_key=tio5y4jp6m05ZSErm9pLF1zXPMh0XpOUDZq-ZWmMlWDOVQZQklATugjR-TLj-rYhYb3V0yVHpS9hqTUsUS1s79t63mokgpNUm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJ9mZKgggRSOURRQ0WvbGHmV5NYIYqOUFVR_DbOCwbvdNONDik88y9c0VZXY9HZEGr0uJ9YYKCWC&lib=MnV3PmCdam9EutRvBBsyupNVJGv4Fseyb'
  },
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    sass: './assets/css/variables.sass'
  }
}
