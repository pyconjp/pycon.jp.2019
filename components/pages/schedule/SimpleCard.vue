<template lang="pug">
v-card(height="100%").pa-1
    v-layout.align-top.py-1(v-if="$vuetify.breakpoint.smAndDown && roomIds.length > 0")
        v-flex.text-xs-center
            .caption.blueGrey1--text {{ roomText }}
    .text-md-center.text-xs-center.font-weight-bold.body-2
        slot
</template>

<script>
import { roomsMaster } from "@/plugins/constants"

export default {
    name: "timetable-simple-card",
    props: {
        roomIds: { type: Array, default: () => [] }
    },
    data() {
        return {
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