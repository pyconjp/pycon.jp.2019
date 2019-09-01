<template lang="pug">
#timetable
    page-header(ja="タイムテーブル" en="Timetable")
    v-container
      v-layout.my-4
        v-flex.text-md-left.font-weight-bold {{ $t("timetable.note") }}
      v-layout.tabs.timetable
        v-flex.text-md-center.tab(:class="activeDay === 1 ? 'active' : ''")
          v-btn(block flat @click="activeDay = 1")
            .headline 1日目 09.16 （月・祝）
        v-flex.text-md-center.tab(:class="activeDay === 2 ? 'active' : ''")
          v-btn(block flat @click="activeDay = 2")
            .headline 2日目 09.17 （火）
      v-layout.tab-item
        v-flex.mt-5
          time-table(:sessions="activeSessions")
</template>

<script>
import sessions from '@/assets/sessions.json'

import PageHeader from '@/components/partials/PageHeader'
import TwoColumnsLayout from '@/components/partials/TwoColumnsLayout'
import ButtonWithArrow from '@/components/parts/ButtonWithArrow'
import TalkCard from '@/components/parts/TalkCard'
import SectionHeader from '@/components/parts/SectionHeader'
import ScheduleTable from '@/components/parts/ScheduleTable'
import EventHeader from '@/components/parts/EventHeader'
import EventPageIndex from '@/components/parts/EventPageIndex'
import Supports from '@/components/parts/Supports'
import TimeTable from "@/components/pages/schedule/TimeTable"

export default {
  components: {
    PageHeader,
    TwoColumnsLayout,
    ButtonWithArrow,
    TalkCard,
    hs: SectionHeader,
    ScheduleTable,
    EventHeader,
    EventPageIndex,
    Supports,
    TimeTable
  },
  data() {
    return {
      activeDay: 1,
      sessions: sessions
    }
  },
  created() {
    // console.log(sessions)
  },
  computed: {
    activeSessions() {
      return sessions.filter(s => s.day == this.activeDay)
    }
  }
}
</script>

<style lang="sass">
.timetable .v-ripple__container
  display: none

</style>

<style lang="sass" scoped>
@import '@/assets/style/variables.scss'

.tab
  border-bottom: solid $blueGrey2 1px
.tab.active
  border-right: solid $blueGrey2 1px
  border-left: solid $blueGrey2 1px
  border-top: solid $blueGrey2 1px
  border-bottom: none
.v-btn:before
  display: none
</style>
