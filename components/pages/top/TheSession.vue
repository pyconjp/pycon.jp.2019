<template lang="pug">
    #session
        v-container(:class="{'pa-0': $vuetify.breakpoint.smAndDown}")
            v-layout.wrap
                v-flex#development-sprint.xs12.sm12.md6.tertiary.pb-4(
                    :class="{'px-4': $vuetify.breakpoint.smAndDown, 'pr-4': $vuetify.breakpoint.mdAndUp}"
                )
                    .expand-background
                    v-layout.column.mt-2
                        v-flex.my-2.white--text
                            .display-1.font-weight-bold.heading-font Development Sprints
                            .subheading 開発者スプリント
                        v-flex
                            v-card.pa-3
                                v-card-title.align-end
                                    span.display-1 09.14 
                                    span.mx-2 {{ $t("weekday.sat") }}
                                    v-icon location_on
                                    span {{ $t("basic.access") }}: {{ $t("basic.hennge") }}
                                v-card-text
                                    span {{ $t("home.session.dev-spr.desc") }}
                                v-layout.wrap.pa-2
                                    v-flex.xs12.xs12.sm12.md6.px-1
                                        v-btn(block color="primary" round outline disabled)
                                            span {{ $t("basic.detail") }}
                                            v-icon keyboard_arrow_right
                                    v-flex.xs12.xs12.sm12.md6.px-1
                                        v-btn(block color="primary" round href="https://pyconjp.connpass.com/event/136558/" target="_blank")
                                            span.font-weight-bold {{ $t("basic.apply") }}
                                            v-icon keyboard_arrow_right
                v-flex#turorial.xs12.sm12.md6.quaternary.pb-4(
                    :class="{'px-4': $vuetify.breakpoint.smAndDown, 'pl-4': $vuetify.breakpoint.mdAndUp}"
                )
                    .expand-background
                    v-layout.column.mt-2
                        v-flex.my-2.white--text
                            .display-1.font-weight-bold.heading-font Tutorial Day
                            .subheading チュートリアル
                        v-flex
                            v-card.pa-3
                                v-card-title.align-end
                                    span.display-1 09.15
                                    span.mx-2 {{ $t("weekday.sun") }}
                                    v-icon location_on
                                    span {{ $t("basic.access") }}: {{ $t("basic.pio") }}
                                v-card-text
                                    span {{ $t("home.session.tutorial.desc") }}
                                v-layout.wrap.pa-2
                                    v-flex.xs12.sm12.md6.px-1
                                        v-btn(block color="primary" round outline disabled)
                                            span {{ $t("basic.detail") }}
                                            v-icon keyboard_arrow_right
                                    v-flex.xs12.sm12.md6.px-1
                                        v-btn(block color="primary" round disabled)
                                            span.font-weight-bold {{ $t("basic.apply") }}
                                            v-icon keyboard_arrow_right
</template>

<style lang="sass" scoped>
.expand-background
    position: absolute
    width: 500%
    height: 100%

#development-sprint
    position: relative
    .expand-background
        right: 100%
        background-color: #998CBA

#turorial
    position: relative
    .expand-background
        left: 100%
        background-color: #E1A7C2
</style>


<script>
export default {
    name: "TheSession"
}
</script>

