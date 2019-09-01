<template lang="pug">
    v-card(height="100%").pa-1.tt-card
        v-layout.align-center
            v-flex.shrink
                v-chip(label small :color="session.lang_of_talk === 'en' ? 'themeBlue' : 'themeRed'" text-color="white").font-weight-bold.text-uppercase {{ session.lang_of_talk }}
            v-spacer
            v-flex.shrink
                .caption.grey--text.lighten--3 {{ session.talk_format }}
        .py-2.caption.font-weight-bold {{ session.title }}
        .py-2.caption.font-weight-thin.grey--text {{ session.name }}
        v-layout.justify-end.py-2
            v-flex.shrink.caption.font-weight-thin.grey--text
                span {{ $t('timetable.level') }} : 
                span.level {{ session.audience_level }}
        .pt-3.pb-3
        .bottom.py-1(style="width: 95%")
            v-divider.py-1
            v-dialog(v-model="dialog" width="500")
                template(#activator="{ on }")
                    a(v-on="on")
                        .text-md-center.text-xs-center {{ $t("timetable.detail") }}
                v-card
                    p {{ session.title }}
</template>

<style lang="sass" scoped>
.tt-card
    height: 100%
    position: relative
.bottom
    position: absolute
    bottom: 5px

</style>

<script>
export default {
    name: "timetable-card",
    props: ["session"],
    methods: {
        openModal() {
            alert("test")
        }
    },
    data() {
        return {
            dialog: false
        }
    }
}
</script>