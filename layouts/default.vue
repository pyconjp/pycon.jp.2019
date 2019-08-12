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
  data() {
    return {
      navigations: [
        {
          id: 0,
          name: this.$t('header.menu.about.parent'),
          to: '/about',
          submenus: [
            { id: 0, name: this.$t('header.menu.about.about-event'), to: "/#overview" },
            { id: 1, name: this.$t('header.menu.about.coc'), pageTrans: true, to: "/code-of-conduct" }
          ]
        },
        {
          id: 1,
          name: this.$t('header.menu.events.parent'),
          submenus: [
            {
              id: 1,
              name: this.$t('header.menu.events.conference.parent'),
              to: "/#conference",
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
              pageTrans: true,
              to: "https://pyconjp.connpass.com/event/139133/"
            },
            {
              id: 3,
              name: this.$t('header.menu.events.dev-spr'),
              to: "/#session"
            },
            {
              id: 4,
              name: this.$t('header.menu.events.tutorial'),
              to: "/#session"
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
          to: '/#access',
          submenus: []
        },
        {
          id: 5,
          name: this.$t('header.menu.support'),
          to: '/#support',
          submenus: []
        },
        {
          id: 6,
          name: this.$t('header.menu.sponsor'),
          to: '/#sponsor',
          submenus: []
        }
      ],
      applies: [
        {
          id: 0,
          name: this.$t('header.apply.event.parent'),
          submenus: [
            { id: 0, name: this.$t('header.apply.event.conference') },
            { id: 1, name: this.$t('header.apply.event.child-workshop') },
            { id: 2, name: this.$t('header.apply.event.dev-spr') },
            { id: 3, name: this.$t('header.apply.event.tutorial') }
          ]
        },
        {
          id: 1,
          name: this.$t('header.apply.nursery.parent'),
          submenus: [
            {
              id: 0,
              name: this.$t('header.apply.nursery.conf-child'),
              pageTrans: true
            },
            { id: 1, name: this.$t('header.apply.nursery.dev-spr') },
            { id: 2, name: this.$t('header.apply.nursery.tutorial') }
          ]
        },
        {
          id: 2,
          name: this.$t('header.apply.distant-support')
        }
      ]
    }
  }
}
</script>
