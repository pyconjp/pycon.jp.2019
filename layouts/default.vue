<template lang="pug">
v-app(
  class="hide-overflow"
  style="position: relative;"
)
  pyconjp-header(:navigations="navigations" :applies="applies")
  v-content
    navigation-drawer(v-if="$vuetify.breakpoint.smAndDown" :navigations="navigations" :applies="applies")
    nuxt
    v-btn(
      :style="'opacity: ' + opacity + ';'"
      transition="slide-y-reverse-transition"
      absolute dark fab bottom fixed right color="themeColor3" style="bottom: 16px;"
      @click="$vuetify.goTo('#pyconjp-header')"
    )
      v-icon keyboard_arrow_up
  contact
  pyconjp-footer
</template>

<style lang="sass">
.application--wrap
  background-color: white
</style>


<script>
import Header from '@/components/partials/Header'
import Contact from '@/components/partials/Contact'
import Footer from '@/components/partials/Footer'
import NavigationDrawer from '@/components/partials/NavigationDrawer'

export default {
  components: {
    'pyconjp-header': Header,
    contact: Contact,
    'pyconjp-footer': Footer,
    'navigation-drawer': NavigationDrawer
  },
  data() {
    return {
      navigations: [
        {
          id: 0,
          name: this.$t('header.menu.about.parent'),
          to: this.$i18n.locale + '/about',
          submenus: [
            { 
              id: 0,
              name: this.$t('header.menu.about.about-event'), 
              scroll: "#overview",
              onlyTop: true
            },
            { 
              id: 1, 
              name: this.$t('header.menu.about.coc'), 
              pageTrans: false, 
              to: this.$i18n.locale + "/code-of-conduct" 
            }
          ]
        },
        {
          id: 1,
          name: this.$t('header.menu.events.parent'),
          submenus: [
            {
              id: 1,
              name: this.$t('header.menu.events.conference.parent'),
              to: this.$i18n.locale + "/conference",
              subsubmenus: [
                {
                  id: 0,
                  name: this.$t('header.menu.events.conference.timetable'),
                  to: this.$i18n.locale + "/schedule",
                },
                {
                  id: 1,
                  name: this.$t('header.menu.events.conference.sessions'),
                  to: this.$i18n.locale + "/sessions",
                }
              ]
            },
            {
              id: 2,
              name: this.$t('header.menu.events.child-workshop'),
              // pageTrans: true,
              to: this.$i18n.locale + "/youth",
              // to: "https://pyconjp.connpass.com/event/139133/"
            },
            {
              id: 3,
              name: this.$t('header.menu.events.dev-spr'),
              to: this.$i18n.locale + "/sprint"
            },
            {
              id: 4,
              name: this.$t('header.menu.events.tutorial'),
              to: this.$i18n.locale + "/tutorial"
            }
          ]
        },
        {
          id: 3,
          name: this.$t('header.menu.news'),
          to: 'https://pyconjp.blogspot.com/search/label/pyconjp2019',
          submenus: [],
          pageTrans: true
        },
        {
          id: 4,
          name: this.$t('header.menu.access'),
          scroll: "#access",
          onlyTop: true,
          submenus: []
        },
        {
          id: 5,
          name: this.$t('header.menu.support'),
          scroll: "#support",
          onlyTop: true,
          submenus: []
        },
        {
          id: 6,
          name: this.$t('header.menu.sponsor'),
          to: this.$i18n.locale + '/sponsors',
          submenus: []
        }
      ],
      applies: [
        {
          id: 0,
          name: this.$t('header.apply.event.parent'),
          submenus: [
            // { 
            //   id: 0, name: this.$t('header.apply.event.conference'), pageTrans: true, link: this.$t('links.conference')
            // },
            { 
              id: 1, name: this.$t('header.apply.event.child-workshop'), pageTrans: true, link: this.$t('links.child-workshop')
            },
            { 
              id: 2, name: this.$t('header.apply.event.dev-spr'), pageTrans: true, link: this.$t('links.dev-sprint')
            },
            { 
              id: 3, name: this.$t('header.apply.event.tutorial'), pageTrans: true, link: this.$t('links.tutorial')
            }
          ]
        },
        {
          id: 1,
          name: this.$t('header.apply.nursery.parent'),
          pageTrans: true,
          link: this.$t('links.nursery')
          // submenus: [
          //   {
          //     id: 0,
          //     name: this.$t('header.apply.nursery.conf-child'),
          //     pageTrans: true,
          //     link: ""
          //   },
          //   { 
          //     id: 1, name: this.$t('header.apply.nursery.dev-spr'),
          //     link: ""
          //   },
          //   { 
          //     id: 2, name: this.$t('header.apply.nursery.tutorial'),
          //     // pageTrans: true,
          //     // link: this.$t('links.tutorial'),
              
          //   }
          // ]
        },
        // {
        //   id: 2,
        //   name: this.$t('header.apply.distant-support')
        // }
      ],
      windowTop: window.top.scrollY
    }
  },
  mounted() {
    console.log(this)
    window.addEventListener("scroll", this.onScroll)
    // if(this.$route.path === "/") setTimeout(() => this.scrollFix(this.$route.hash), 5)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    onScroll() {
      this.windowTop = window.top.scrollY
    },
    // scrollFix(hashbang) {
    //   this.$vuetify.goTo(hashbang)
    // }
  },
  computed: {
    showScrollTop() {
      return this.windowTop > 1000
    },
    opacity() {
      return this.windowTop / 1200
    }
  }
}
</script>
