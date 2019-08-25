<template lang="pug">
v-app(
  class="hide-overflow"
  style="position: relative;"
)
  pyconjp-header(:navigations="navigations" :applies="applies")
  v-content
    navigation-drawer(v-if="$vuetify.breakpoint.smAndDown" :navigations="navigations" :applies="applies")
    nuxt
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
  created(){
  },
  data() {
    return {
      navigations: [
        {
          id: 0,
          name: this.$t('header.menu.about.parent'),
          to: this.$router.history.base + '/about',
          submenus: [
            { 
              id: 0, name: this.$t('header.menu.about.about-event'), to: this.$router.history.base + "/#overview" 
            },
            { 
              id: 1, name: this.$t('header.menu.about.coc'), pageTrans: false, to: this.$router.history.base + "/code-of-conduct" 
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
              to: this.$router.history.base + "/conference",
              // subsubmenus: [
              //   {
              //     id: 0,
              //     name: this.$t('header.menu.events.conference.timetable')
              //   },
              //   {
              //     id: 1,
              //     name: this.$t('header.menu.events.conference.sessions')
              //   }
              // ]
            },
            {
              id: 2,
              name: this.$t('header.menu.events.child-workshop'),
              // pageTrans: true,
              to: this.$router.history.base + "/youth",
              // to: "https://pyconjp.connpass.com/event/139133/"
            },
            {
              id: 3,
              name: this.$t('header.menu.events.dev-spr'),
              to: this.$router.history.base + "/sprint"
            },
            {
              id: 4,
              name: this.$t('header.menu.events.tutorial'),
              to: this.$router.history.base + "/tutorial"
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
          to: this.$router.history.base + '/#access',
          submenus: []
        },
        {
          id: 5,
          name: this.$t('header.menu.support'),
          to: this.$router.history.base + '/#support',
          submenus: []
        },
        {
          id: 6,
          name: this.$t('header.menu.sponsor'),
          to: this.$router.history.base + '/sponsors',
          submenus: []
        }
      ],
      applies: [
        {
          id: 0,
          name: this.$t('header.apply.event.parent'),
          submenus: [
            { 
              id: 0, name: this.$t('header.apply.event.conference'), pageTrans: true, link: this.$t('links.conference')
            },
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
      ]
    }
  }
}
</script>
