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
                            .display-1.heading-font Development Sprints
                            .body-2 開発者スプリント
                        v-flex.py-3
                            v-card.pa-3
                                v-card-title.align-end
                                    .day.pr-3.right-border
                                        span.display-1.heading-font 09.14 
                                        span.mx-2.themeBlue--text {{ $t("weekday.sat") }}
                                    .venue.ml-3
                                        v-icon location_on
                                        span {{ $t("basic.access") }}: {{ $t("basic.hennge") }}
                                v-card-text
                                    span {{ $t("home.session.dev-spr.desc") }}
                                v-layout.wrap.pa-2
                                    v-flex.xs12.xs12.sm12.md6.px-1
                                        button-with-arrow(color="themeColor3" :outline="true" :disabled="true" size="normal") {{ $t("basic.detail") }}
                                    v-flex.xs12.xs12.sm12.md6.px-1
                                        button-with-arrow(color="themeColor3" :dark="true" size="normal" href="https://pyconjp.connpass.com/event/136558/") {{ $t("basic.apply") }}
                v-flex#turorial.xs12.sm12.md6.quaternary.pb-4(
                    :class="{'px-4': $vuetify.breakpoint.smAndDown, 'pl-4': $vuetify.breakpoint.mdAndUp}"
                )
                    .expand-background
                    v-layout.column.mt-2
                        v-flex.my-2.white--text
                            .display-1.heading-font Tutorial Day
                            .body-2 チュートリアル
                        v-flex.py-3
                            v-card.pa-3
                                v-card-title.align-end
                                    .day.pr-3.right-border
                                        span.display-1.heading-font 09.15
                                        span.mx-2 {{ $t("weekday.sun") }}
                                    .venue.ml-3
                                        v-icon location_on
                                        span {{ $t("basic.access") }}: {{ $t("basic.pio") }}
                                v-card-text
                                    span {{ $t("home.session.tutorial.desc") }}
                                v-layout.wrap.pa-2
                                    v-flex.xs12.sm12.md6.px-1
                                        button-with-arrow(color="themeColor3" :outline="true" :disabled="true" size="normal") {{ $t("basic.detail") }}
                                    v-flex.xs12.sm12.md6.px-1
                                        button-with-arrow(color="themeColor3" size="normal" href="" :disabled="true" ) {{ $t("basic.apply") }}
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

.right-border
    border-right: solid 1px #E9EBF0
</style>


<script>
import ButtonWithArrow from "@/components/parts/ButtonWithArrow"
export default {
    name: "TheSession",
    components: {
        "button-with-arrow": ButtonWithArrow
    }
}
</script>

