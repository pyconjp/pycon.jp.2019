<template lang="pug">
v-navigation-drawer.elevation-0(v-model="drawer" right absolute width="300")
    v-divider
    v-list.pa-0
        nuxt-link(:to="toLocale")
            v-list-tile
                v-layout(align-center justify-end row fill-height)
                v-icon.tertiary--text fas fa-globe
                div.ml-2.grey--text {{ toLang }}
        v-divider
        a(href="https://pyconjp.blogspot.com/2019/06/pyconjp-2019-tickets.html" target="_blank" rel="noreferrer noopener" @click="$store.commit('toggleDrawer')")
            v-list-tile.primary
                v-list-tile-content
                v-list-tile-title.font-weight-bold {{$t("basic.apply")}}
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      locale: state => state.locale
    }),
    toLang() {
      return this.locale === 'ja' ? 'English' : '日本語'
    },
    toLocale() {
      switch (this.locale) {
        case 'ja':
          return '/en' + this.$route.fullPath
        case 'en':
          return '/ja' + this.$route.fullPath.replace('en/', '')
      }
    },
    drawer: {
      get() {
        return this.$store.state.drawerIsOpen
      },
      set(val) {
        this.$store.commit('setDrawer', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.primary {
  background-color: #d66194;

  color: white;
}
</style>
