<template lang="pug">
v-toolbar#header(flat).white
    v-toolbar-title.mx-4
        img(src="/images/horizontal_logo.png" width="150px")
    v-toolbar-title.grey--text.text--lighten-2.display-2 |
    v-toolbar-title(v-for="item in items" :key="item.id").subheading.text-xs-center.pa-2
        | {{ item.name }}
    v-spacer
    v-toolbar-title.subheading.pa-3 English
    v-toolbar-items
        v-btn(color="primary").depressed.subheading
            span 各種申込み
            v-icon expand_more
</template>

<style lang="scss">
#header .v-toolbar__content {
    padding: 0 !important;
}
</style>


<script>
export default {
    name: "header",
    data() {
        return {
            items: [
                { id: 1, name: "Home" },
                { id: 2, name: "About" },
                { id: 3, name: "Event" },
                { id: 4, name: "News" }
            ]
        }
    }
}
</script>

