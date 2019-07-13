<template lang="pug">
    #key-visual
        v-container
            v-layout.wrap.align-center
                v-flex.md6.xs12.sm12
                    v-layout.column
                        v-flex.px-5.text-xs-center(:class="{'right-border': $vuetify.breakpoint.mdAndUp}")
                            img(:src="require('@/assets/images/square_logo.png')" :width="$vuetify.breakpoint.sm ? '50%' : '100%'")
                        v-flex.my-4.text-xs-left.text-xs-center
                            span.headline
                                span.primaryText--text
                                    span(v-show="$vuetify.breakpoint.mdAndUp").mr-1 ────
                                    span 2019.09.14 - 17
                                span.ml-4.text-no-wrap
                                    v-icon(color="twitter") fab fa-twitter
                                span.ml-2.twitter--text #pyconjp
                v-flex.md6.xs12.sm12(:class="{'pa-0': $vuetify.breakpoint.smAndDown, 'pa-5': $vuetify.breakpoint.mdAndUp}")
                    v-layout.column.right-padding
                        v-flex
                            h2.display-2.primaryText--text.font-weight-bold.heading-font Conference
                        v-flex.caption
                            span.primaryText--text カンファレンス
                        v-flex.py-4.text-xs-center
                            span
                                span.text-no-wrap
                                    span.display-2 09.16
                                    span.title.ml-2 {{ $t("home.keyvisual.mon") }}
                                span.display-1.grey--text.grey--lighten(:class="{'mx-2': $vuetify.breakpoint.smAndDown, 'mx-4': $vuetify.breakpoint.mdAndUp}") -
                                span.text-no-wrap
                                    span.display-2 09.17
                                    span.title.ml-2  {{ $t("home.keyvisual.tue") }}
                        v-flex
                            v-icon.material-icons-outlined location_on
                            span.title.ml-2  {{ $t("home.keyvisual.access") }}: {{ $t("home.keyvisual.pio") }}
                        v-flex.text-xs-center.my-2.pa-4
                            v-btn(block color="primary" large round style="height: 60px;")
                                span.title.font-weight-bold {{ $t("home.keyvisual.apply") }}
                                v-icon keyboard_arrow_right
                        v-flex.text-xs-center.mt-4.mb-2.subheading
                            v-layout.align-center.justify-center
                                v-flex.xs12
                                    v-icon(color="secondaryText") tag_faces
                                    span.secondaryText--text.ml-2.font-weight-bold {{ $t("home.keyvisual.child-workshop") }}
                        v-flex.text-xs-center
                            v-card(color="secondaryText").pa-3.text-xs-left
                                span.title.white--text Youth Coder Workshop
                                v-btn(color="white" block large)
                                    v-flex.align-end
                                        span.title 09.16
                                        span.caption.ml-2 {{ $t("home.keyvisual.mon") }}
                                    v-spacer
                                    span.secondary--text.subheading.font-weight-bold {{ $t("home.keyvisual.detail") }}
                                    v-icon.secondary--text.ml-2 keyboard_arrow_right
</template>

<style lang="sass" scoped>
.right-border
    border-right: solid 1px #E9EBF0
</style>


<script>
export default {
    name: "TheKeyVisual"
}
</script>
