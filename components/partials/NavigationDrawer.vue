<template lang="pug">
v-navigation-drawer.elevation-0(v-model="drawer" right absolute)
    v-divider
    .pa-0
        configurable-link(:path="toLocale")
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
                          configurable-link(:path="submenu.link" :target="submenu.pageTrans ? '_blank' : '_self'")
                            span.subheading.white--text.font-weight-bold ─
                            span.body-1.ml-2 {{ submenu.name }}
                            v-icon(v-if="submenu.pageTrans" small color="white").ml-1 keyboard_arrow_right
                    template(v-else).pt-2
                      configurable-link(:path="apply.link" :target="apply.pageTrans ? '_blank' : '_self'")
                        v-layout.align-center
                          v-flex.shrink
                            span.body-2 {{ apply.name }}
                          v-flex
                            v-icon(v-if="apply.pageTrans" color="white").ml-1 keyboard_arrow_right
        // Navigations
        v-layout.column.justify-start.py-2
          v-expansion-panel.navigation
            v-expansion-panel-content(
              v-for="(menu, idx) in navigations" :key="menu.id" expand-icon="arrow_drop_down" :hide-actions="menu.submenus.length === 0"
              v-if="!(menu.onlyTop && $route.path !== '/')"
            )
              template(#header)
                template(v-if="menu.submenus.length === 0")
                  template(v-if="!menu.scroll")
                    configurable-link(:path="menu.to" :target="menu.pageTrans ? '_blank' : '_self'")
                      v-layout.align-center
                        v-flex.shrink
                          span.subheading.font-weight-bold {{ menu.name }}
                        v-flex
                          v-icon(v-if="menu.pageTrans" color="text1").ml-2 keyboard_arrow_right
                  template(v-else)
                    a(@click="$vuetify.goTo(menu.scroll);drawer = false").subheading.font-weight-bold {{ menu.name }}
                template(v-else)
                  span.subheading.font-weight-bold {{ menu.name }}

              v-card(flat)
                v-layout.column.py-1.px-3(v-if="menu.submenus.length !== 0")
                    v-flex(v-for='submenu in menu.submenus' :key="submenu.id" v-if="!(submenu.onlyTop && $route.path !== '/')").pa-2
                      template(v-if="submenu.subsubmenus").pt-2
                        configurable-link.body-1(:path="submenu.to" :target="submenu.pageTrans ? '_blank' : '_self'") {{ submenu.name }}
                        .py-2
                          .subsubmenu(v-for="ssmenu in submenu.subsubmenus" :key="ssmenu.id").py-1
                            configurable-link(:path="ssmenu.to" :target="ssmenu.pageTrans ? '_blank' : '_self'")
                              span.subheading.apply--text.font-weight-bold ─
                              span.body-1.ml-2 {{ ssmenu.name }}
                              v-icon(v-if="ssmenu.pageTrans" color="text1").ml-2 keyboard_arrow_right
                      template(v-else).pt-2
                        template(v-if="!submenu.scroll")
                          configurable-link.body-1(:path="submenu.to" :target="submenu.pageTrans ? '_blank' : '_self'")
                            span {{ submenu.name }}
                            v-icon(v-if="submenu.pageTrans" small color="text1").ml-2 keyboard_arrow_right
                        template(v-else)
                          a(@click="$vuetify.goTo(submenu.scroll);drawer = false").body-1  {{ submenu.name }}
</template>

<style lang="sass">
.apply 
  .v-expansion-panel__container, .v-sheet
    background-color: #5970A5 !important
.navigation a
  color: #444444
.apply a
  color: white
</style>


<script>
import { mapState, mapMutations } from 'vuex';

import ConfigurableLink from '@/components/parts/ConfigurableLink';

export default {
  props: ['navigations', 'applies'],
  components: {
    ConfigurableLink
  },
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
