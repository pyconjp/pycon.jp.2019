<template lang="pug">
v-navigation-drawer.elevation-0(v-model="drawer" right absolute)
    v-divider
    .pa-0
        nuxt-link(:to="toLocale")
          v-layout.align-center.justify-end.pa-3
              v-icon.themeColor3--text fas fa-globe
              div.ml-2.themeColor3--text {{ toLang }}
        v-list-tile.themeColor3
          .subheading.font-weight-bold.white--text {{$t("basic.apply")}}
        v-layout.column.justify-start.py-2
          v-expansion-panel
            v-expansion-panel-content(v-for="(menu, idx) in navigations" :key="menu.id" expand-icon="arrow_drop_down" :hide-actions="menu.submenus.length === 0")
              template(#header)
                span.subheading.font-weight-bold {{ menu.name }}
              v-card(flat)
                v-layout.column.py-1.px-3(v-if="menu.submenus.length !== 0")
                    v-flex(v-for='submenu in menu.submenus' :key="submenu.id").pa-2
                      template(v-if="submenu.subsubmenus").pt-2
                        .body-1 {{ submenu.name }}
                        .py-2
                          .subsubmenu(v-for="ssmenu in submenu.subsubmenus" :key="ssmenu.id").py-1
                            span.subheading.themeColor3--text.font-weight-bold ─
                            span.body-1.ml-2 {{ ssmenu.name }}
                      template(v-else).pt-2
                        .body-1 {{ submenu.name }}
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: ['navigations', 'applies'],
  methods: {
    ...mapMutations(['toggleDrawer', 'setDrawer'])
  },
  computed: {
    ...mapState(['locale', 'drawerIsOpen']),
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
        return this.drawerIsOpen
      },
      set(val) {
        this.setDrawer(val)
      }
    }
  }
}
</script>
