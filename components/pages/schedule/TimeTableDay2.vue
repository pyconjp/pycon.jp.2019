



<template lang="pug">
.schedule-table(:class="{'pl-4': $vuetify.breakpoint.mdAndUp}")
    // header
    row(v-if="$vuetify.breakpoint.smAndUp")
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
    row(time="10:00" :day="day")
        v-layout.wrap
            v-flex.xs12.sm12.md2.pa-2.blueGrey2
                simple-card(:roomIds="[1006]" :session="keynoteSeseion")
                    p.my-0 {{ $t("timetable.keynote") }} 
                    p.my-0 {{ keynoteSeseion.title }}
                    p.my-0.body-2.font-weight-normal ({{ $t("timetable.interpret") }})
                    template(#detail)
                        p {{ keynoteSeseion.name }}
                        p {{ keynoteSeseion.abstract }}
                        v-layout.justify-center.wrap
                            v-flex.text-xs-center.text-md-center(v-if="keynoteSeseion.youtube")
                                v-btn(small round flat :href="keynoteSeseion.youtube" target="_blank").pa-0.ma-0 
                                    v-icon(small) fab fa-youtube
                                    span.caption.pl-1 {{ $t("basic.youtube") }}
                            v-flex.text-xs-center.text-md-center(v-if="keynoteSeseion.presentation")
                                v-btn(small round flat  :href="keynoteSeseion.presentation" target="_blank").pa-0.ma-0
                                    v-icon(small) fas fa-tv
                                    span.caption.pl-1 {{ $t("basic.presentation") }}
            v-flex.xs12.sm12.md2(v-for="(_, idx) in 5" :key="idx")
    row(time="11:15" :day="day")
        v-layout.wrap
            v-flex.xs12.sm12.md2.pa-2(v-for="(room, idx) in rooms" :key="idx" :class="idx % 2 == 0 ? 'blueGrey2' : ''")
                card(v-if="matchSession(room, 1)" :session="matchSession(room, 1)")
    row(time="12:00" :day="day")
        v-layout.wrap
            v-flex.xs12.sm12.md12.pa-2.blueGrey2
                simple-card(:roomIds="[1006, 1001, 1002, 1003, 1004, 1005]") {{ $t("timetable.lunch") }}
    row(time="13:30" :day="day")
        v-layout.wrap
            v-flex.xs12.sm12.md2.pa-2(v-for="(room, idx) in rooms" :key="idx" :class="idx % 2 == 0 ? 'blueGrey2' : ''")
                card(v-if="matchSession(room, 2)" :session="matchSession(room, 2)")
    row(time="14:15" :day="day")
        v-layout.wrap
            v-flex.xs12.sm12.md2.pa-2(v-for="(room, idx) in rooms" :key="idx" :class="idx % 2 == 0 ? 'blueGrey2' : ''")
                card(v-if="matchSession(room, 3)" :session="matchSession(room, 3)")
    row(time="14:45" :day="day")
        v-layout.wrap
            v-flex.xs12.sm12.md2.pa-2.blueGrey2
                simple-card(:roomIds="[1006]") {{ $t("timetable.poster") }} / {{ $t("timetable.coffee") }}
                    .pt-1.pb-1
                    .bottom.py-1(style="width: 95%")
                        v-divider
                        configurable-link(path="/sessions?category=poster")
                            .pt-1.text-md-center.text-xs-center {{ $t("timetable.poster_link") }}
            v-flex.xs12.sm12.md2(v-for="(_, idx) in 5" :key="idx")
    row(time="15:45" :day="day")
        v-layout.wrap
            v-flex.xs12.sm12.md2.pa-2(v-for="(room, idx) in rooms" :key="idx" :class="idx % 2 == 0 ? 'blueGrey2' : ''")
                card(v-if="matchSession(room, 4)" :session="matchSession(room, 4)")
    row(time="16:15" :day="day")
        v-layout.wrap
            v-flex.xs12.sm12.md2.pa-2(v-for="(room, idx) in rooms" :key="idx" :class="idx % 2 == 0 ? 'blueGrey2' : ''")
                card(v-if="matchSession(room, 5)" :session="matchSession(room, 5)")
    row(time="16:45" :day="day")
        v-layout
            v-flex.xs12.sm12.md2.pa-2.blueGrey2
                simple-card(:roomIds="[1006]" :session="ltSeseion") {{ $t("timetable.lt") }}
                    template(#detail) {{ ltSeseion.abstract }}
                    template(#seeDetail)
                        v-layout.justify-center.wrap
                            v-flex.text-xs-center.text-md-center
                                v-btn(small round flat href="https://www.youtube.com/watch?v=UShlTE8wdzU" target="_blank").pa-0.ma-0 
                                    v-icon(small) fab fa-youtube
                                    span.caption.pl-1 {{ $t("basic.youtube") }}
                        .pt-1.pb-1
                        .bottom.py-1(style="width: 95%")
                            v-divider
                            configurable-link(path="/sessions?category=lt")
                                .pt-1.text-md-center.text-xs-center {{ $t("timetable.lt_link") }}
            v-flex.md2(v-for="(_, idx) in 5" :key="idx")
    row(time="17:20" :day="day")
        v-layout
            v-flex.xs12.sm12.md2.pa-2.blueGrey2
                simple-card(:roomIds="[1006]") {{ $t("timetable.smlt") }}
            v-flex.md2(v-for="(_, idx) in 5" :key="idx")
    row(time="17:40" :day="day")
        v-layout
            v-flex.xs12.sm12.md2.pa-2.blueGrey2
                simple-card(:roomIds="[1006]") {{ $t("timetable.photo2") }}
            v-flex.md2(v-for="(_, idx) in 5" :key="idx")
    row(time="17:50" :no-border="true" :day="day")
        v-layout
            v-flex.pa-2.text-md-center.text-xs-center.subheading {{ $t("timetable.closing") }}
    row(time="18:20" :day="day")

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
            day: this.$t('days.day2' ) + '09/17' + this.$t('weekday.tue' )
        }
    },
    created() {
    },
    computed: {
        keynoteSeseion() {
            return this.sessions.filter(s => s.id == 503)[0]
        },
        ltSeseion() {
            return this.sessions.filter(s => s.id == 505)[0]
        }
    },
    methods: {
        matchSession(roomId, no) {
            const matchs = this.sessions.filter(s => s.room_id == roomId && s.no == no)
            return matchs.length > 0 ? matchs[0] : null
        }
    }
})
</script>