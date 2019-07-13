<template lang="pug">
#access.background
    v-container
        v-layout.my-4
            v-flex.xs12.text-xs-center
                first-heading(name="Access")
        v-layout.wrap.fill-height
            v-flex.xs12.sm12.md8.px-2
                v-card(height="100%")
                    v-layout.pa-3
                        v-flex.md12.text-xs-center
                            span
                                span.headline 09.15
                                span.caption.ml-1 日
                                span.headline.px-3 /
                                span.headline 09.16
                                span.caption.ml-1 月・祝
                                span.headline.px-3 /
                                span.headline 09.17
                                span.caption.ml-1 火
                    v-divider
                    v-layout.column.pa-3
                        v-flex.md12.text-xs-left
                            .display-1
                                v-icon(size=40).primary--text location_on
                                span.ml-3 大田区産業プラザ PiO
                        v-flex.xs12.pa-3
                            GmapMap(
                                :center="{lat:35.5587595, lng:139.7219626}"
                                :zoom="16"
                                map-type-id="terrain"
                                style="width: 100%; height: 400px"
                            )
                                GmapMarker(
                                    :position="{lat: 35.5587595, lng: 139.7219626}"
                                    :clickable="true"
                                    :draggable="true"
                                )
            v-flex.xs12.sm12.md4.px-2(
                :class="{'pt-4': $vuetify.breakpoint.smAndDown, 'pt-0': $vuetify.breakpoint.mdAndUp }"
            )
                v-card(height="100%")
                    v-layout.justify-center.pa-3
                        v-flex.md12.text-xs-center
                            span.headline 09.14
                            span.caption.ml-1 土
                    v-divider
                    v-layout.column.pa-3
                        v-flex.xs12.text-xs-left
                            .display-1
                                v-icon(size=40).primary--text location_on
                                span.ml-3 HDE
                        v-flex.xs12.pa-3
                            GmapMap(
                                :center="{lat: 35.6549717, lng: 139.6926278}"
                                :zoom="16"
                                map-type-id="terrain"
                                style="width: 100%; height: 400px"
                            )
                                GmapMarker(
                                    :position="{lat: 35.6549717, lng: 139.6926278}"
                                    :clickable="true"
                                    :draggable="true"
                                )
</template>

<script>
import FirstHeading from "@/components/parts/FirstHeading"
export default {
    name: "TheAccess",
    components: {
        "first-heading": FirstHeading
    }
}
</script>

