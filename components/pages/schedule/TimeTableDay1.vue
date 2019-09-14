<template lang="pug">
.schedule-table(:class="{'pl-4': $vuetify.breakpoint.mdAndUp}")
    // header
    row(v-if="$vuetify.breakpoint.mdAndUp")
        v-layout.wrap
            v-flex.xs12.sm12.md2.text-md-center(v-for="(room, idx) in rooms" :key="idx")
                p.body-2.font-weight-bold {{ $t('rooms.' + roomsMaster[room]) }}
    row(time="09:00" :day="day")
        v-layout.wrap
            v-flex.pa-2.text-md-center.text-xs-center.subheading {{ $t("timetable.open") }}
    row(time="09:45" :day="day")
        v-layout.wrap
            v-flex.xs12.sm12.md2.pa-2.blueGrey2
                simple-card(:roomIds="[1006]") {{ $t("timetable.opening") }}
            v-flex.md2(v-for="(_, idx) in 5" :key="idx")
    row(time="10:10" :day="day")
        v-layout.wrap
            v-flex.xs12.sm12.md2.pa-2.blueGrey2
                simple-card(:roomIds="[1006]" :session="keynoteSeseion") {{ $t("timetable.keynote") }}<br> {{ keynoteSeseion.title }}
                    template(#detail)
                        p {{ keynoteSeseion.name }}
                        p {{ keynoteSeseion.abstract }}
            v-flex.md2(v-for="(_, idx) in 5" :key="idx")
    row(time="11:25" :day="day")
        v-layout.wrap
            v-flex.xs12.sm12.md2.pa-2(v-for="(room, idx) in rooms" :key="idx" :class="idx % 2 == 0 ? 'blueGrey2' : ''")
                card(v-if="matchSession(room, 1)" :session="matchSession(room, 1)")
    row(time="12:10" :day="day")
        v-layout.wrap
            v-flex.xs12.sm12.md4.pa-2
                simple-card(:roomIds="[1006, 1001]")
                    p(
                        :class="{'pt-3': $vuetify.breakpoint.smAndDown, 'pt-5': $vuetify.breakpoint.mdAndUp}"
                    ) {{ $t("timetable.lunch") }}
            v-flex.xs12.sm12.md2.pa-2
                simple-card(:roomIds="[1002]" :session="jobfairSeseion" :seeDetail="true") {{ $t("timetable.jobfair") }}
                    template(#detail)  {{ $t("timetable.jobfair_desc") }}
            v-flex.xs12.sm12.md6.pa-2
                simple-card(:roomIds="[1003, 1004, 1005]")
                    p(
                        :class="{'pt-3': $vuetify.breakpoint.smAndDown, 'pt-5': $vuetify.breakpoint.mdAndUp}"
                    ) {{ $t("timetable.lunch") }}
    row(time="13:40" :day="day")
        v-layout.wrap
            v-flex.xs12.sm12.md2.pa-2(v-for="(room, idx) in rooms" :key="idx" :class="idx % 2 == 0 ? 'blueGrey2' : ''")
                card(v-if="matchSession(room, 2)" :session="matchSession(room, 2)")
    row(time="14:40" :day="day")
        v-layout.wrap
            v-flex.xs12.sm12.md2.pa-2(v-for="(room, idx) in rooms" :key="idx" :class="idx % 2 == 0 ? 'blueGrey2' : ''")
                card(v-if="matchSession(room, 3)" :session="matchSession(room, 3)")
    row(time="15:10" :day="day")
        v-layout.wrap
            v-flex.xs12.sm12.md2.pa-2.blueGrey2
                simple-card(:roomIds="[1006]") {{ $t("timetable.poster") }} / {{ $t("timetable.coffee") }}
                    template(#seeDetail)
                        .pt-1.pb-1
                        .bottom.py-1(style="width: 95%")
                            v-divider
                            configurable-link(path="/sessions?category=poster")
                                .pt-1.text-md-center.text-xs-center {{ $t("timetable.poster_link") }}
            v-flex.md2(v-for="(_, idx) in 5" :key="idx")
    row(time="16:00" :day="day")
        v-layout.wrap
            v-flex.xs12.sm12.md2.pa-2(v-for="(room, idx) in rooms" :key="idx" :class="idx % 2 == 0 ? 'blueGrey2' : ''")
                card(v-if="matchSession(room, 4)" :session="matchSession(room, 4)")
    row(time="16:30" :day="day")
        v-layout.wrap
            v-flex.xs12.sm12.md2.pa-2(v-for="(room, idx) in rooms" :key="idx" :class="idx % 2 == 0 ? 'blueGrey2' : ''")
                card(v-if="matchSession(room, 5)" :session="matchSession(room, 5)")
    row(time="17:00" :day="day")
        v-layout.wrap
            v-flex.xs12.sm12.md2.pa-2.blueGrey2
                simple-card(:roomIds="[1006]" :session="ltSeseion") {{ $t("timetable.lt") }}
                    template(#detail) {{ ltSeseion.abstract }}
                    template(#seeDetail)
                        .pt-1.pb-1
                        .bottom.py-1(style="width: 95%")
                            v-divider
                            configurable-link(path="/sessions?category=lt")
                                .pt-1.text-md-center.text-xs-center {{ $t("timetable.lt_link") }}
            v-flex.xs12.sm12.md2(v-for="(_, idx) in 5" :key="idx")
    row(time="17:20" :day="day")
        v-layout.wrap
            v-flex.xs12.sm12.md2.pa-2.blueGrey2
                simple-card(:roomIds="[1006]") {{ $t("timetable.photo") }}
            v-flex.xs12.sm12.md2(v-for="(_, idx) in 5" :key="idx")
    row(time="17:30" :day="day")
        v-layout.wrap
            v-flex.xs12.sm12.md2.pa-2.blueGrey2
                simple-card(:roomIds="[1006]") {{ $t("timetable.smlt") }} ＆ {{ $t("timetable.closing") }}
            v-flex.xs12.sm12.md2(v-for="(_, idx) in 5" :key="idx")
    row(time="18:00" :no-border="true" :day="day")
        v-layout.wrap
            v-flex.xs12.sm12.pa-2.text-md-center.text-xs-center.subheading {{ $t("timetable.party") }}
    row(time="20:00")

</template>


<style lang="sass" scoped>
@media only screen and (max-width: 1200px)
    .flex
        background-color: white !important
</style>

<script>
import Vue from 'vue'

import Card from "@/components/pages/schedule/Card"
import SimpleCard from "@/components/pages/schedule/SimpleCard"
import ConfigurableLink from "@/components/parts/ConfigurableLink"
import Row from "@/components/pages/schedule/Row"
import { roomsMaster } from "@/plugins/constants"

export default Vue.extend({
    name: "time-table",
    props: ['sessions'],
    components: {
        "card": Card,
        "row": Row,
        "simple-card": SimpleCard,
        "configurable-link": ConfigurableLink
    },
    data()  {
        return {
            rooms: [1006, 1001, 1002, 1003, 1004, 1005],
            roomsMaster: roomsMaster,
            day: this.$t('days.day1' ) + ' 09/16'
        }
    },
    computed: {
        jobfairSeseion() {
            return this.sessions.filter(s => s.id == 501)[0]
        },
        keynoteSeseion() {
            return this.sessions.filter(s => s.id == 502)[0]
        },
        ltSeseion() {
            console.log("lt", this.sessions.filter(s => s.id == 504)[0])
            return this.sessions.filter(s => s.id == 504)[0]
        }
    },
    created() {
        // console.log(this.sessions)
    },
    methods: {
        matchSession(roomId, no) {
            const matchs = this.sessions.filter(s => s.room_id == roomId && s.no == no)
            return matchs.length > 0 ? matchs[0] : null
        }
    }
})
</script>