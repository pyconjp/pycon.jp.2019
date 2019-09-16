<template lang="pug">
#timetable
  page-header(ja="タイムテーブル" en="Timetable")
  v-container
    v-layout.my-4
      v-flex.text-md-left.font-weight-bold {{ $t("timetable.note") }}

    v-layout.tabs.timetable.wrap
      v-flex.xs6.text-md-center.tab(:class="activeDay === 1 ? 'active' : ''")
        v-btn(block flat @click="activeDay = 1" :class="activeDay === 1 ? 'themeColor3--text' : ''")
          tab-button(:day="$t('days.day1' )" date="09/16" :weekday="$t('weekday.mon' )" :isMobile="$vuetify.breakpoint.smAndDown")
      v-flex.xs6.text-md-center.tab(:class="activeDay === 2 ? 'active' : ''")
        v-btn(block flat @click="activeDay = 2" :class="activeDay === 2 ? 'themeColor3--text' : ''")
          tab-button(:day="$t('days.day2' )" date="09/17" :weekday="$t('weekday.tue' )" :isMobile="$vuetify.breakpoint.smAndDown")

    v-layout.tab-item
      v-flex.mt-2(v-if="activeDay === 1" :class="{'mt-5': $vuetify.breakpoint.mdAndUp}")
        time-table-day-1(:sessions="day1Sessions")
      v-flex.mt-2(v-if="activeDay === 2" :class="{'mt-5': $vuetify.breakpoint.mdAndUp}")
        time-table-day-2(:sessions="day2Sessions")
  v-dialog(v-model="dialog")
    SessionModalWindow(:session="session" @close="dialog = false")
  v-dialog(v-model="missingDialog" max-width=600)
    v-card
      v-card-text.title.font-weight-bold.text-md-center.text-xs-center {{ $t("timetable.noSession") }}
</template>

<script>
import sessions from '@/assets/sessions.json'

import TimeTableDay1 from "@/components/pages/schedule/TimeTableDay1"
import TimeTableDay2 from "@/components/pages/schedule/TimeTableDay2"
import TabButton from "@/components/pages/schedule/TabButton"

import PageHeader from '@/components/partials/PageHeader'
import TwoColumnsLayout from '@/components/partials/TwoColumnsLayout'
import ButtonWithArrow from '@/components/parts/ButtonWithArrow'
import TalkCard from '@/components/parts/TalkCard'
import SectionHeader from '@/components/parts/SectionHeader'
import ScheduleTable from '@/components/parts/ScheduleTable'
import EventHeader from '@/components/parts/EventHeader'
import EventPageIndex from '@/components/parts/EventPageIndex'
import Supports from '@/components/parts/Supports'
import SessionModalWindow from '@/components/parts/SessionModalWindow'

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
    TimeTableDay1,
    TimeTableDay2,
    TabButton,
    SessionModalWindow,
  },
  head(){
    return {
      title: this.$t("timetable.title")
    }
  },
  data() {
    return {
      activeDay: new Date() < new Date(2019, 8, 16, 18, 0, 0) ? 1 : 2, // 1日目の18時に2日目に切り替わる
      sessions: sessions,
      dialog: false,
      missingDialog: false,
      session: sessions[0]
    }
  },
  created() {
    if(this.$route.query.sessionId) {
      const currentSession = sessions.filter(s => s.id == this.$route.query.sessionId)[0]
      if(currentSession) {
        this.session = currentSession
        this.dialog = true
        try{ 
          this.activeDay = parseInt(currentSession.day)
        } catch (e) {}
      } else {
        this.missingDialog = true
      }
    }
  },
  watch: {
    dialog(new_, old) {
      if(!new_) {
        window.history.pushState({}, null, this.$route.path)
      }
    }
  },
  computed: {
    day1Sessions() {
      return sessions.filter(s => s.day == 1)
    },
    day2Sessions() {
      return sessions.filter(s => s.day == 2)
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
  border-bottom: solid $blueGrey2 2px

.tab.active
  border-right: solid $blueGrey2 2px
  border-left: solid $blueGrey2 2px
  border-top: solid $blueGrey2 2px
  border-bottom: none

.v-btn:before
  display: none

@media only screen and (max-width: 959px)
  .container
      padding: 16px 8px
</style>
