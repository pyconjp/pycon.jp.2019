<template lang="pug">
#pyconjp-header
    template(v-if="$vuetify.breakpoint.mdAndUp")
        v-toolbar#header(flat).white
            nuxt-link(to="/")
                v-toolbar-title.ml-4.pa-2
                    img(src="@/assets/images/horizontal_color.svg" width="180px").mt-2
            v-toolbar-title.grey--text.text--lighten-4.display-1 |
            .menu(v-for="menu in navigations" :key="menu.id")
                template(v-if="menu.submenus.length === 0")
                    a(:href="menu.to" :target="menu.pageTrans ? '_blank' : '_self'")
                        v-btn(flat).text-xs-center.menu-btn
                            span.subheading.font-weight-bold.textColor1--text {{ menu.name }}
                template(v-else)
                    v-menu(:nudge-width="100" offset-y)
                        template(#activator="{ on }")
                            .btn(v-on="on")
                                v-btn(flat).text-xs-center.menu-btn
                                    span.subheading.font-weight-bold.textColor1--text {{ menu.name }}
                                    v-icon.textColor1--text arrow_drop_down
                        v-card(depressed color="themeColor0")
                            v-layout.column.py-3.px-4
                                v-flex(v-for='submenu in menu.submenus' :key="submenu.id").pa-2
                                    a(:href="submenu.to" :target="submenu.pageTrans ? '_blank' : '_self'")
                                        v-layout.align-top
                                            v-flex.shrink
                                                span.white--text.subheading {{ submenu.name }}
                                            v-flex.ml-4
                                                v-icon(v-if="submenu.pageTrans" medium color="white") keyboard_arrow_right
                                    .subsubmenus(v-if="submenu.subsubmenus").pt-2
                                        .subsubmenu(v-for="ssmenu in submenu.subsubmenus" :key="ssmenu.id").py-2
                                            a(:href="ssmenu.to" :target="ssmenu.pageTrans ? '_blank' : '_self'")
                                                span.subheading.apply--text.font-weight-bold ─
                                                span.subheading.ml-2.white--text {{ ssmenu.name }}
            v-spacer
            nuxt-link(:to="toLocale")
                v-btn(outline round)
                    v-icon(small).tertiary--text fas fa-globe
                    span.ml-2.textColor1--text {{ toLang }}
            // 「参加申込み」
            v-toolbar-items.ml-2
                //- v-btn(large color="apply" href="https://pyconjp.connpass.com/event/135734/" target="_blank").depressed.subheading
                //-     span {{ $t('header.apply') }}
                v-menu(v-model="applyMenu" offset-y min-width="350px")
                    template(v-slot:activator="{ on }")
                        v-btn(color="apply" v-on="on" depressed).subheading.font-weight-bold.px-4.white--text
                            span {{ $t('header.apply.parent') }}
                            v-icon expand_more
                    // TODO: ikedaosushi 右寄せできていないので方法を検討する
                    v-card(depressed color="apply")
                        v-layout.column.py-1
                            v-flex(v-for='(menu, idx) in applies' :key="menu.id")
                                .pl-4.py-3
                                    a(v-if="menu.link" :href="menu.link" :target="menu.pageTrans ? '_blank' : '_self'")
                                        v-layout.align-top.pr-1
                                            v-flex.shrink
                                                span.white--text.subheading.font-weight-bold {{ menu.name }}
                                            v-flex.ml-4
                                                v-icon(v-if="menu.pageTrans" medium color="white") keyboard_arrow_right
                                    v-layout(v-else).align-top.pr-1
                                        v-flex.shrink
                                            span.white--text.subheading.font-weight-bold {{ menu.name }}
                                    
                                    .subsubmenus(v-if="menu.submenus").pt-2
                                        .subsubmenu(v-for="submenu in menu.submenus" :key="submenu.id").py-1
                                            a(:href="submenu.link" :target="menu.pageTrans ? '_blank' : '_self'")
                                                v-layout.align-center
                                                    v-flex.shrink
                                                        span.body-2.white--text ─
                                                    v-flex.shrink
                                                        span.body-2.ml-3.white--text {{ submenu.name }}
                                                    v-flex.ml-2
                                                        v-icon(v-if="submenu.pageTrans" color="white") keyboard_arrow_right
                                v-divider(v-if="idx != applies.length - 1" color="white")
    template(v-if="$vuetify.breakpoint.smAndDown")
        v-toolbar(flat)#header.white.pa-2
            v-toolbar-title.ml-2
                nuxt-link(to="/")
                    img(src="@/assets/images/horizontal_logo.png" width="150px")
            v-spacer
            v-btn(flat icon @click="toggleDrawer").mr-2
                v-icon(medium v-if="drawerIsOpen") close
                v-icon(medium v-else) menu
</template>

<style lang="sass">
#header .v-toolbar__content
    padding: 0 !important

.menu-btn
    padding: 0 !important

</style>


<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
    name: "pycon-header",
    props: [
        "navigations", "applies"
    ],
    data() {
        return {
            applyMenu: false,
        }
    },
    computed: {
        ...mapState(['locale', 'drawerIsOpen']),
        toLang() {
            return this.locale === "ja" ? "English" : "日本語"
        },
        toLocale() {
            switch(this.locale) {
                case "ja":
                    return "/en" + this.$route.fullPath
                case "en":
                    return "/ja" + this.$route.fullPath.replace("en/", "")
            }
        }
    },
    methods: {
        ...mapActions(["switchLang"]),
        ...mapMutations(["toggleDrawer"]),
    }
}
</script>

