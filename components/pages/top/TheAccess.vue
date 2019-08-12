<template lang="pug">
#access.background
    v-container
        v-layout.my-4
            v-flex.xs12.text-xs-center
                first-heading(name="Access")
        v-layout.wrap.fill-height.access
            v-flex.xs12.sm12.md8.px-2
                v-card.pt-3.mt-3(height="100%")
                    .tags
                        v-chip.heading-font(label color="themeColor3" small).font-weight-bold.white--text Conference
                        v-chip.heading-font(label color="themeColor2" small).font-weight-bold.white--text Tutorial
                        v-chip.heading-font(label color="themeColor4" small).font-weight-bold.white--text Youth Coder Workshop
                    v-layout.pa-3
                        v-flex.md12.text-xs-center
                            span
                                span.headline 09.15
                                span.caption.ml-1 {{ $t("weekday.sun") }}
                                span.headline.px-3 /
                                span.headline 09.16
                                span.caption.ml-1 {{ $t("weekday.mon") }}
                                span.headline.px-3 /
                                span.headline 09.17
                                span.caption.ml-1 {{ $t("weekday.tue") }}
                    v-divider
                    v-layout.column.pa-3
                        v-flex.md12.text-xs-left
                            .display-1
                                v-icon(size=40).themeColor3--text location_on
                                span.ml-3 {{ $t("basic.pio") }}
                        v-flex.xs12.pa-3
                            GmapMap(
                                :center="{lat:35.558812, lng:139.724187}"
                                :zoom="16"
                                map-type-id="roadmap"
                                style="width: 100%; height: 400px"
                            )
                                GmapMarker(
                                    :position="{lat:35.558812, lng:139.724187}"
                                    :clickable="true"
                                    :draggable="true"
                                )
            v-flex.xs12.sm12.md4.px-2(
                :class="{'pt-4': $vuetify.breakpoint.smAndDown, 'pt-0': $vuetify.breakpoint.mdAndUp }"
            )
                v-card.pt-3.mt-3(height="100%")
                    .tags
                        v-chip.heading-font(label color="themeColor1" small).font-weight-bold.white--text Development Sprints
                    v-layout.justify-center.pa-3
                        v-flex.md12.text-xs-center
                            span.headline 09.14
                            span.caption.ml-1 {{ $t("weekday.sat") }}
                    v-divider
                    v-layout.column.pa-3
                        v-flex.xs12.text-xs-left
                            .display-1
                                v-icon(size=40).themeColor3--text location_on
                                span.ml-3 {{ $t("basic.hennge") }}
                        v-flex.xs12.pa-3
                            GmapMap(
                                :center="{lat:35.654938, lng:139.694813}"
                                :zoom="16"
                                map-type-id="roadmap"
                                style="width: 100%; height: 400px"
                            )
                                GmapMarker(
                                    :position="{lat:35.654938, lng:139.694813}"
                                    :clickable="true"
                                    :draggable="true"
                                )
</template>

<style lang="sass" scoped>
.access
    margin: 0 -8px
.tags 
  position: absolute;
  width: 100%
  top: 0
  transform: translateY(-50%)
  text-align: center
</style>


<script>
import FirstHeading from "@/components/parts/FirstHeading"
export default {
    name: "TheAccess",
    components: {
        "first-heading": FirstHeading
    }
}
</script>

