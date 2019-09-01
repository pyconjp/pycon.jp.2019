<template lang="pug">
.schedule-table.pl-5
    v-layout.tt-row
        v-flex.md2.text-md-center(v-for="(room, idx) in rooms" :key="idx")
            p.body-2.font-weight-bold {{ $t('rooms.' + roomsMaster[room]) }}
    v-layout.tt-row.py-2
        v-flex.text-md-center.text-xs-center.subheading {{ $t("timetable.opening") }}
    // 11:25
    v-layout.tt-row
        v-flex.md2.px-2.py-2(v-for="(room, idx) in rooms" :key="idx" :class="idx % 2 == 0 ? 'blueGrey2' : ''")
            card(v-if="matchSession(room, 1)" :session="matchSession(room, 1)")
    // 13:40
    v-layout.tt-row
        v-flex.md2.px-2.py-2(v-for="(room, idx) in rooms" :key="idx" :class="idx % 2 == 0 ? 'blueGrey2' : ''")
            card(v-if="matchSession(room, 2)" :session="matchSession(room, 2)")
    // 14:40
    v-layout.tt-row
        v-flex.md2.px-2.py-2(v-for="(room, idx) in rooms" :key="idx" :class="idx % 2 == 0 ? 'blueGrey2' : ''")
            card(v-if="matchSession(room, 3)" :session="matchSession(room, 3)")
    // 16:00
    v-layout.tt-row
        v-flex.md2.px-2.py-2(v-for="(room, idx) in rooms" :key="idx" :class="idx % 2 == 0 ? 'blueGrey2' : ''")
            card(v-if="matchSession(room, 4)" :session="matchSession(room, 4)")
    // 16:30
    v-layout.tt-row
        v-flex.md2.px-2.py-2(v-for="(room, idx) in rooms" :key="idx" :class="idx % 2 == 0 ? 'blueGrey2' : ''")
            card(v-if="matchSession(room, 5)" :session="matchSession(room, 5)")

</template>

<style lang="sass" scoped>
.tt-row
    border-bottom: 1px grey solid
</style>

<script>
import Vue from 'vue'

import Card from "@/components/pages/schedule/Card"
import { roomsMaster } from "@/plugins/constants"

export default Vue.extend({
    name: "time-table",
    props: ['sessions'],
    components: {
        "card": Card
    },
    data()  {
        return {
            rooms: [1001, 1002, 1003, 1004, 1005, 1006],
            roomsMaster: roomsMaster
        }
    },
    created() {
        console.log(this.sessions)
    },
    methods: {
        matchSession(roomId, no) {
            const matchs = this.sessions.filter(s => s.room_id == roomId && s.no == no)
            return matchs.length > 0 ? matchs[0] : null
        }
    }
})
</script>