<template lang="pug">
#sponsor
    v-container
        v-layout.my-4
            v-flex.xs12.text-xs-center
                .display-3.primary--text(style="text-decoration: underline;") Sponsors
        v-layout.wrap.justify-start
            v-flex.xs6(v-for="i in 3" :key="i").pa-2
                v-card
                    v-img(src="https://via.placeholder.com/500" height="100")
        v-layout.wrap.justify-start
            v-flex.xs4(v-for="i in 10" :key="i").pa-2
                v-card
                    v-img(src="https://via.placeholder.com/500" height="100")
        v-layout.wrap.justify-start
            v-flex.xs3(v-for="i in 10" :key="i").pa-2
                v-card
                    v-img(src="https://via.placeholder.com/500" height="100")
        v-layout.wrap.justify-start
            v-flex.xs2(v-for="i in 20" :key="i").pa-2
                v-card
                    v-img(src="https://via.placeholder.com/500" height="100")
        v-layout.my-3
            v-flex.md6.text-xs-right
                v-btn(outline color="primary" round large)
                    span スポンサーリスト
                    v-icon keyboard_arrow_right
            v-flex.md6.text-xs-left
                v-btn(color="primary" round large)
                    span スポンサー募集中
                    v-icon keyboard_arrow_right
</template>

<script>
export default {
    name: "TheSupport"
}
</script>

