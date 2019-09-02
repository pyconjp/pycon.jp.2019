<template lang="pug">
v-navigation-drawer.elevation-0(v-model="drawer" right absolute)
    v-divider
    .pa-0
        nuxt-link(:to="toLocale")
          v-layout.align-center.justify-end.pa-3
              v-icon.apply--text fas fa-globe
              div.ml-2.apply--text {{ toLang }}
        // 参加申し込み
        v-expansion-panel(dark).apply
          v-expansion-panel-content(expand-icon="arrow_drop_down" color="apply")
            template(#header style="color")
              span.subheading.font-weight-bold  {{$t("basic.apply")}}
            v-card(flat)
              v-layout.column.py-1.px-3(v-if="applies.length !== 0")
                  v-flex(v-for='apply in applies' :key="apply.id").pa-2
                    template(v-if="apply.submenus").pt-2
                      .body-1 {{ apply.name }}
                      .py-2
                        .py-1(
                          v-for="submenu in apply.submenus" :key="submenu.id"
                        )
                          a(
                            :target="submenu.pageTrans ? '_blank' : '_self'"
                            :href="submenu.link"
                          )
                            span.subheading.white--text.font-weight-bold ─
                            span.body-1.ml-2 {{ submenu.name }}
                            v-icon(v-if="submenu.pageTrans" small color="white").ml-1 keyboard_arrow_right
                    template(v-else).pt-2
                      a(:href="apply.link" :target="apply.pageTrans ? '_blank' : '_self'")
                        v-layout.align-center
                          v-flex.shrink
                            span.body-2 {{ apply.name }}
                          v-flex
                            v-icon(v-if="apply.pageTrans" color="white").ml-1 keyboard_arrow_right
        // Navigations
        v-layout.column.justify-start.py-2
          v-expansion-panel
            v-expansion-panel-content(v-for="(menu, idx) in navigations" :key="menu.id" expand-icon="arrow_drop_down" :hide-actions="menu.submenus.length === 0")
              template(#header)
                template(v-if="menu.submenus.length === 0")
                    a(:href="menu.to" :target="menu.pageTrans ? '_blank' : '_self'")
                      v-layout.align-center
                        v-flex.shrink
                          span.subheading.font-weight-bold {{ menu.name }}
                        v-flex
                          v-icon(v-if="menu.pageTrans" color="text1").ml-2 keyboard_arrow_right
                template(v-else)
                  span.subheading.font-weight-bold {{ menu.name }}

              v-card(flat)
                v-layout.column.py-1.px-3(v-if="menu.submenus.length !== 0")
                    v-flex(v-for='submenu in menu.submenus' :key="submenu.id").pa-2
                      template(v-if="submenu.subsubmenus").pt-2
                        a(
                          :href="submenu.to"
                          :target="submenu.pageTrans ? '_blank' : '_self'"
                        ).body-1 {{ submenu.name }}
                        .py-2
                          .subsubmenu(v-for="ssmenu in submenu.subsubmenus" :key="ssmenu.id").py-1
                            a(:href="ssmenu.to" :target="ssmenu.pageTrans ? '_blank' : '_self'")
                              span.subheading.apply--text.font-weight-bold ─
                              span.body-1.ml-2 {{ ssmenu.name }}
                              v-icon(v-if="ssmenu.pageTrans" color="text1").ml-2 keyboard_arrow_right
                      template(v-else).pt-2
                        a(
                          :href="submenu.to"
                          :target="submenu.pageTrans ? '_blank' : '_self'"
                        ).body-1 {{ submenu.name }}
                        v-icon(v-if="submenu.pageTrans" small color="text1").ml-2 keyboard_arrow_right
</template>

<style lang="sass" scoped>
a
  color: #444444
.apply a
  color: white
</style>


<style lang="sass">
.apply 
  .v-expansion-panel__container, .v-sheet
    background-color: #5970A5 !important 
</style>


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
