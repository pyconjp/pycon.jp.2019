<template lang="pug">
v-toolbar#header(flat).white
    v-toolbar-title.ml-4.pa-2
        img(src="/images/horizontal_logo.png" width="180px").mt-2
    v-toolbar-title.grey--text.text--lighten-4.display-1 |
    .menu(v-for="item in items" :key="item.id")
        template(v-if="item.submenus.length === 0")
            v-btn(flat).text-xs-center.menu-btn
                span.subheading.font-weight-bold.textColor--text {{ item.name }}
        template(v-else)
            v-menu(:nudge-width="100")
                template(v-slot:activator="{ on }")
                    .btn(v-on="on")
                        v-btn(flat).text-xs-center.menu-btn
                            span.subheading.font-weight-bold.textColor--text {{ item.name }}
                            v-icon.textColor--text arrow_drop_down
                v-list
                    v-list-tile(v-for='submenu in item.submenus' :key="submenu.id")
                        v-list-tile-title(v-text="submenu.name")
    v-spacer
    v-btn(outline round)
        v-icon(small).tertiary--text fas fa-globe
        span.ml-2.textColor--text English
    v-toolbar-items.ml-2
        v-btn(color="primary").depressed.subheading
            span 各種申込み
            v-icon expand_more
</template>

<style lang="sass">
#header .v-toolbar__content
    padding: 0 !important

.menu-btn
    padding: 0 !important
</style>


<script>
export default {
    name: "header",
    data() {
        return {
            items: [
                { id: 1, name: "Home", submenus: [] },
                { id: 2, name: "About", submenus: [{id: 1, name: "◯◯について"}, {id: 2, name: "△△について"}] },
                { id: 3, name: "Event", submenus: [{id: 1, name: "Conference"}, {id: 2, name: "Tutorail"}] },
                { id: 4, name: "News", submenus: [] },
                { id: 5, name: "Access", submenus: [] },
                { id: 6, name: "Support", submenus: [] },
                { id: 7, name: "Sponsor", submenus: [] }
            ]
        }
    }
}
</script>

