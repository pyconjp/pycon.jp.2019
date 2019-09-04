<template lang="pug">
v-card(height="100%").pa-1
    v-layout.align-top.py-1(v-if="$vuetify.breakpoint.smAndDown && roomIds.length > 0")
        v-flex.text-xs-center
            .caption.blueGrey1--text {{ roomText }}
    .text-md-center.text-xs-center.font-weight-bold.body-2
        slot
    .text-md-left.text-xs-left.caption.grey--text
        slot(name="detail")
    template(v-if="seeDetail")
        .detail.py-1
            v-divider
            v-dialog(v-model="dialog")
                template(#activator="{ on }")
                    a(v-on="on")
                        .pt-1.text-md-center.text-xs-center {{ $t("timetable.detail") }}
                SessionModalWindow(:session="session" @close="dialog = false")
    
</template>

<style lang="sass" scoped>
.v-dialog__container
    display: none !important
</style>

<script>
import { roomsMaster } from "@/plugins/constants"
import SessionModalWindow from '@/components/parts/SessionModalWindow'

export default {
    name: "timetable-simple-card",
    components: { SessionModalWindow },
    props: {
        roomIds: { type: Array, default: () => [] },
        seeDetail: { type: Boolean, default: false },
        session: { type: Object, default: () => {} }
    },
    data() {
        return {
            dialog: false,
            roomsMaster: roomsMaster
        }
    },
    computed: {
        roomText() {
            return this.roomIds.map(roomId => this.$t("rooms." + roomsMaster[roomId])).join(",")
        }
    }
}
</script>