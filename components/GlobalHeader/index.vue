<template lang="pug">
  header#global-header(uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar" uk-navbar)
    div#pc-nav.uk-container.uk-flex.uk-flex-middle(class="uk-visible@s")
      nuxt-link(:to="$i18n.path('')" exact tag="h1")
        a
          img(src='~/static/common/global-header-logo.png', alt='PyConJP 2018' width='188' height='26')
      nav#global_nav.uk-navbar-right
          ul.uk-navbar-nav
            li(v-bind:class="{'uk-active':isActive('conference')}")
              a {{ $t('header.navi.event') }}
            div.nav-dropdown(uk-dropdown="offset: -10;delay-hide: 200")
              ul.uk-nav.uk-dropdown-nav
                li
                  nuxt-link(:to="$i18n.path('event/conference')" exact) {{ $t('header.navi.conference') }}
                li
                  nuxt-link(:to="$i18n.path('event/sessions')" exact) {{ $t('header.navi.sessions') }}
                li
                  a(href='https://pyconjp.connpass.com/event/97868/' target='_blank')  {{ $t('header.navi.sprint') }}
                li
                  a(href='https://pyconjp.connpass.com/event/94980/' target='_blank') {{ $t('header.navi.tutorial') }}
                li
                  a(href='https://pyconjp.connpass.com/event/94979/' target='_blank')  {{ $t('header.navi.youth_coder_workshop') }}
                li
                  a(href='https://pyconjp.blogspot.com/2018/08/community-booth.html' target='_blank') {{ $t('header.navi.community_booth') }}
            li(v-bind:class="{'uk-active':isActive('sponsor')}")
                nuxt-link(:to="$i18n.path('sponsor')" exact) {{ $t('header.navi.sponsor') }}
            li(v-bind:class="{'uk-active':isActive('code-of-conduct')}")
                nuxt-link(:to="$i18n.path('code-of-conduct')" exact) {{ $t('header.navi.code_of_conduct') }}
            li
                a(:href="getLangPath()") {{ $t('header.navi.lang') }}

    div#mobile-nav.uk-container(class="uk-hidden@s").uk-flex
        .uk-offcanvas-content
          button.uk-button(type="button" href="#mobile-menu" uk-toggle)
            span.top
            span.middle
            span.bottom
          #mobile-menu(uk-offcanvas)
            .uk-offcanvas-bar
              button.uk-offcanvas-close(tyle="button" uk-close)
              nav#global-nav-sp
                  ul
                    nuxt-link(:to="$i18n.path('')" exact tag="li")
                        a.uk-offcanvas-close {{ $t('header.navi.top.top') }}
                    nuxt-link(:to="$i18n.path('event/conference')" exact tag="li")
                        a.uk-offcanvas-close {{ $t('header.navi.conference') }}
                    nuxt-link(:to="$i18n.path('event/sessions')" exact tag="li")
                        a.uk-offcanvas-close {{ $t('header.navi.sessions') }}
                    li
                        a(href='https://pyconjp.connpass.com/event/97868/' target='_blank')  {{ $t('header.navi.sprint') }}
                    li
                        a(href='https://pyconjp.connpass.com/event/94980/' target='_blank') {{ $t('header.navi.tutorial') }}
                    li
                        a(href='https://pyconjp.connpass.com/event/94979/' target='_blank')  {{ $t('header.navi.youth_coder_workshop') }}
                    li
                        a(href='https://pyconjp.blogspot.com/2018/08/community-booth.html' target='_blank') {{ $t('header.navi.community_booth') }}
                    nuxt-link(:to="$i18n.path('sponsor')" exact tag="li")
                        a.uk-offcanvas-close {{ $t('header.navi.sponsor') }}
                    nuxt-link(:to="$i18n.path('code-of-conduct')" exact tag="li")
                        a.uk-offcanvas-close  {{ $t('header.navi.code_of_conduct') }}
                    li
                      a(:href="getLangPath()") {{ $t('header.navi.lang') }}

        nuxt-link(:to="$i18n.path('')" exact)
            img(src='~/static/top/firstview-logo.png', alt='PyConJP 2018')

</template>


<script>
  export default {
    name: 'global-header',
    methods: {
      isActive (route_name) {
        // console.log(this.$nuxt.$route.name);
        // const _route_name = this.$nuxt.$route.name
        return (this.$i18n.local !== 'en')? this.$nuxt.$route.name === route_name : (()=>{
          const _route_name = (route_name === 'index')? "lang-top" : "lang-" + route_name
          return this.$nuxt.$route.name === _route_name
        })()
      },
      getLangPath (path="") {
        // const _path = (this.$i18n.locale === 'en')? this.$route.fullPath.replace(/^\/[^\/]+/, '') : `/en` + this.$route.fullPath;
        // return process.env.baseUrl + _path;
        //const _path =  '/' + path
        //const __path = (this.$i18n.locale === 'ja')? "/en" + _path: _path
        //return process.env.baseUrl + __path;
        return (this.$i18n.locale === 'en') ? process.env.baseUrl + this.$route.fullPath.replace(/^\/[^\/]+/, '') : process.env.baseUrl + `/en` + this.$route.fullPath
      },
      getPath(path=""){
        // console.log(process.env.baseUrl);
        // Todo::Topへのリンクが重いための暫定処理
        const _path =  '/' + path
        const __path = (this.$i18n.locale === 'en')? "/" + this.$i18n.locale + _path: _path
        //return process.env.baseUrl + __path;
        return this.$route.path + path
      }
    }
  }
</script>

<style lang="sass">
header#global-header
    background-color: #ffffff
    div#pc-nav
        width: $breakpoint-large
        padding-top: 2rem
        h1
          margin-bottom: 0
        nav
            ul
                li
                    color: #9b9b9b
                    a
                      font-size: 16px
                      &:hover
                          color: $global-link-hover-color
            div.nav-dropdown
              @include event-box
              min-height: 3rem
              z-index: 20
              &:before,
              &:after
                  content: ""
                  position: absolute
                  right: 0
                  left: -100px
                  width: 0
                  height: 0
                  margin: auto
              &:before
                top: -12px
                border-style: solid
                border-color: transparent transparent #d0d0d0 transparent
                border-width: 0 10px 12px 10px
              &:after
                top: -10px
                border-style: solid
                border-color: transparent transparent #FFF transparent
                border-width: 0 10px 12px 10px
              a
                margin-left: .4rem
                font-size: 15px

    div#mobile-nav
        padding-top: 1.8rem
        padding-bottom: 1rem
        position: relative
        width: 100%
        .uk-offcanvas-content
            vertical-align: middle
            position: absolute
            left: 30px
            top: 30px
            button
                padding: 0
                background: none
                height: 32px
                margin-right: 1rem
                span
                    display: block
                    height: 2px
                    width: 12px
                    transform: rotate(0deg)
                    background-color: #979797
                span.middle
                    margin-top: 2px
                span.bottom
                    margin-top: 2px
        a
            margin: 0 auto
            img
                width: 224px

nav#global-nav-sp
  ul
    list-style: none
    margin-top: 2rem
    li
      margin-bottom: .5rem
      a
        position: static
        font-size: 16px
        font-weight: 300
        padding: 0
    li.nest-title
      color: #979797
      li
        margin-left: 1rem

</style>
