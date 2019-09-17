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
                            v-card(
                                :class="{'pa-3': $vuetify.breakpoint.mdAndUp }"
                            )
                                v-layout.align-center(
                                        :class="{'pa-2': $vuetify.breakpoint.smAndDown, 'pa-3': $vuetify.breakpoint.mdAndUp }"
                                    )
                                    v-flex.shrink.day.right-border(
                                        :class="{'pr-3': $vuetify.breakpoint.mdAndUp }"
                                    )
                                        span.display-1.heading-font 09.14 
                                        span.mx-2.themeBlue--text {{ $t("weekday.sat") }}
                                    v-flex.shrink.venue.mx-2
                                        v-icon location_on
                                    v-flex.text-xs-left
                                        span.body-2 {{ $t("basic.access") }}: {{ $t("basic.hennge") }}
                                v-card-text
                                    span {{ $t("home.session.dev-spr.desc") }}
                                v-layout.wrap.pa-2.align-center
                                    v-flex.xs12.xs12.sm12.md6.px-1.py-2
                                        //- a 
                                        //-     v-layout.align-center
                                        //-         v-flex.text-xs-right(:class="{'shrink': $vuetify.breakpoint.mdAndUp}") {{ $t("basic.detail") }}
                                        //-         v-flex.text-md-left.pl-2
                                        //-             v-icon(color="linkBlue") keyboard_arrow_right
                                    v-flex.xs12.xs12.sm12.md6.px-1
                                        button-with-arrow(color="apply" :dark="true" :outline="true"  href="/sprint") {{ $t("basic.detail") }}
                v-flex#turorial.xs12.sm12.md6.quaternary.pb-4(
                    :class="{'px-4': $vuetify.breakpoint.smAndDown, 'pl-4': $vuetify.breakpoint.mdAndUp}"
                )
                    .expand-background
                    v-layout.column.mt-2
                        v-flex.my-2.white--text
                            .display-1.heading-font Tutorial Day
                            .body-2 チュートリアル
                        v-flex.py-3
                            v-card(
                                :class="{'pa-3': $vuetify.breakpoint.mdAndUp }"
                            )
                                v-layout.align-center(
                                    :class="{'pa-2': $vuetify.breakpoint.smAndDown, 'pa-3': $vuetify.breakpoint.mdAndUp }"
                                )
                                    v-flex.shrink.day.right-border
                                        span.display-1.heading-font 09.15
                                        span.mx-2 {{ $t("weekday.sun") }}
                                    v-flex.shrink.venue.mx-2
                                        v-icon location_on
                                    v-flex.text-xs-left
                                        span.body-2 {{ $t("basic.access") }}: {{ $t("basic.pio") }}
                                v-card-text
                                    span {{ $t("home.session.tutorial.desc") }}
                                v-layout.wrap.pa-2.align-center
                                    v-flex.xs12.sm12.md6.px-1.py-2
                                        a 
                                            //- v-layout.align-center
                                            //-     v-flex.text-xs-right(:class="{'shrink': $vuetify.breakpoint.mdAndUp}") {{ $t("basic.detail") }}
                                            //-     v-flex.text-md-left.pl-2
                                            //-         v-icon(color="linkBlue") keyboard_arrow_right
                                    v-flex.xs12.sm12.md6.px-1
                                        button-with-arrow(color="apply" :dark="true" :outline="true" href="/tutorial") {{ $t("basic.detail") }}
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

