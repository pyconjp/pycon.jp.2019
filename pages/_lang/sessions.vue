<template lang="pug">
#timetable
    page-header(ja="セッションリスト" en="Sessions")
    v-container
      v-layout.my-4
        v-flex.text-md-left.font-weight-bold {{ $t("timetable.note") }}
      v-layout.tabs.timetable
        v-flex.text-md-center.tab(:class="activeTab === 0 ? 'active' : ''")
          v-btn(block flat @click="activeTab = 0")
            .headline 1日目 09.16 （月・祝）
        v-flex.text-md-center.tab(:class="activeTab === 1 ? 'active' : ''")
          v-btn(block flat @click="activeTab = 1")
            .headline 2日目 09.17 （火）
      v-layout.tab-item(v-if="activeTab === 0")
        v-flex 16 text
      v-layout.tab-item(v-if="activeTab === 1")
        v-flex 17 text
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
    Supports
  },
  data() {
    return {
        sessions: sessions
    }
  },
  created() {
      console.log(this.sessions)
  }
}
</script>
