<template lang="pug">
    #key-visual
        v-container
            v-layout.wrap.align-center
                v-flex.md6.xs12.sm12
                    v-layout.column
                        v-flex.px-5.text-xs-center(:class="{'right-border': $vuetify.breakpoint.mdAndUp}")
                            img(:src="require('@/assets/images/rectangle_color.svg')" :width="$vuetify.breakpoint.sm ? '50%' : '100%'")
                        v-flex.my-1.text-xs-left.text-xs-center(
                            :class="{'my-4': $vuetify.breakpoint.mdAndUp}"
                        )
                            span.headline
                                span.themeColor3--text
                                    span(v-show="$vuetify.breakpoint.mdAndUp").mr-1 ────
                                    span 2019.09.14 - 17
                                configurable-link(:path="'https://twitter.com/search?q=%23pyconjp'" :target="'_blank'")
                                    span.ml-4.text-no-wrap
                                        v-icon(color="twitter") fab fa-twitter
                                    span.ml-2.twitter--text #pyconjp
                v-flex.md6.xs12.sm12(:class="{'pa-0': $vuetify.breakpoint.smAndDown, 'pa-5': $vuetify.breakpoint.mdAndUp}")
                    v-layout.column.right-padding
                        template(v-if="$vuetify.breakpoint.mdAndUp")
                            v-flex
                                h2.display-2.themeColor3--text.font-weight-bold.heading-font 
                                    span Conference
                                    span.subheading.pl-2 ({{ $t("home.keyvisual.finish") }})
                            v-flex.caption
                                span.themeColor3--text.font-weight-bold カンファレンス
                            v-flex.py-4.text-md-left
                                span
                                    span.text-no-wrap
                                        span.display-2.heading-font 09.16
                                        span.title.ml-2.themeRed--text {{ $t("weekday.mon") }}
                                    span.display-1.grey--text.grey--lighten(:class="{'mx-2': $vuetify.breakpoint.smAndDown, 'mx-4': $vuetify.breakpoint.mdAndUp}") -
                                    span.text-no-wrap
                                        span.display-2.heading-font 09.17
                                        span.title.ml-2  {{ $t("weekday.tue") }}
                            v-flex
                                configurable-link(:path="'https://goo.gl/maps/sdVaaUHgYaptafBs5'" :target="'_blank'").text1--text
                                    v-layout.align-center
                                        v-flex.shrink
                                            v-icon(large) location_on
                                        v-flex
                                            span.title.ml-2 {{ $t("basic.pio") }}
                        v-flex.text-md-center.mt-2.px-2
                            v-layout.wrap.py-1
                                v-flex.xs12.sm12.md6.px-1
                                    button-with-arrow(color="apply" :outline="true" :href=" '/schedule'") {{ $t("home.keyvisual.timetable") }}
                                v-flex.xs12.sm12.md6.px-1
                                    button-with-arrow(color="apply" :outline="true" :href=" '/sessions'") {{ $t("home.keyvisual.sessions") }}
                        v-flex.text-md-center.py-0.px-2
                            button-with-arrow(color="apply" :outline="true" target="_blank" href="https://www.youtube.com/user/PyConJP/videos?view=2&sort=dd") {{ $t("home.keyvisual.youtube") }}
                        v-flex.text-md-center.py-0.px-2
                            button-with-arrow(color="apply" :outline="true" target="_blank" href="https://pyconjp.connpass.com/event/135734/presentation/") {{ $t("home.keyvisual.presentation") }}
                            //- v-btn(disabled block round).subheading {{ $t("basic.apply-soldout") }}
                        //- v-flex.text-md-center.py-3.body-2.grey--text
                        //-     span {{ $t('home.keyvisual.soldout-desc') }}
                        //- v-flex.text-md-left.mb-2(
                        //-     :class="{'body-2': $vuetify.breakpoint.smAndDown, 'subheading': $vuetify.breakpoint.mdAndUp }"
                        //- )
                        //-     v-layout.align-center
                        //-         v-flex.shrink
                        //-             v-icon(large color="secondaryText") tag_faces
                        //-         v-flex
                        //-             span.secondaryText--text.ml-2.font-weight-bold {{ $t("home.keyvisual.child-workshop") }}
                        //- v-flex.text-xs-center
                        //-     v-card(color="secondaryText").pa-1.text-xs-left(
                        //-         :class="{'pa-3': $vuetify.breakpoint.mdAndUp }"
                        //-     )
                        //-         span.title.white--text.font-weight-bold Youth Coder Workshop
                        //-         v-btn(
                        //-             color="white" block large style="height: 40px;" :href="$t('links.child-workshop')" target="_blank"
                        //-         ).px-3
                        //-             v-layout.justify-center.align-center
                        //-                 v-flex.text-md-right
                        //-                     span.headline.heading-font 09.16
                        //-                     span.caption.ml-2.font-weight-bold {{ $t("weekday.mon") }}
                        //-                 v-spacer
                        //-                 v-flex.text-xs-right.text-xs-center
                        //-                     span(
                        //-                         :class="{'body-2': $vuetify.breakpoint.smAndDown, 'subheading': $vuetify.breakpoint.mdAndUp }"
                        //-                     ).secondary--text.font-weight-bold {{ $t("basic.apply") }}
                        //-                     v-icon.secondary--text.ml-2 keyboard_arrow_right
</template>


<style lang="sass" scoped>
.right-border
    border-right: solid 1px #E9EBF0
</style>


<script>
import ButtonWithArrow from "@/components/parts/ButtonWithArrow";
import ConfigurableLink from "@/components/parts/ConfigurableLink";

export default {
   name: "TheKeyVisual",
   components: {
        "button-with-arrow": ButtonWithArrow,
        "configurable-link": ConfigurableLink
   }
}
</script>
