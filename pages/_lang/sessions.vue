<template lang="pug">
#sessions
    page-header(ja="セッションリスト" en="Sessions")
    v-container
      v-layout(v-if="$vuetify.breakpoint.smAndUp").mt-4.mb-3.tabs.sessions
        v-flex.text-md-center.tab(:class="activeTab === 0 ? 'active' : ''")
          v-btn(block flat @click="activeTab = 0")
            .title {{ $t('sessions.session_category.talk_session') }}
        v-flex.text-md-center.tab(:class="activeTab === 1 ? 'active' : ''")
          v-btn(block flat @click="activeTab = 1")
            .title {{ $t('sessions.session_category.lightning_talk') }}
        v-flex.text-md-center.tab(:class="activeTab === 2 ? 'active' : ''")
          v-btn(block flat @click="activeTab = 2")
            .title {{ $t('sessions.session_category.poster_session') }}
      v-layout(v-else).mt-2
        v-flex
          v-select(
            outline
            single-line
            :items="items"
            item-text="text"
            item-value="value"
            v-model="activeTab"
            :value="0"
          )
        
      v-layout.tab-item(v-if="activeTab === 0")
        v-flex
          SessionList(:sessions="talkSessions")
      v-layout.tab-item(v-if="activeTab === 1")
        v-flex
          SessionList(:sessions="lightningTalks")
      v-layout.tab-item(v-if="activeTab === 2")
        v-flex
          SessionList(:sessions="posterSessions")
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

import SessionList from '@/components/pages/sessions/SessionList'

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
    SessionList
  },
  data() {
    return {
      sessions: sessions,
      activeTab: 0,
      items: [
        { text: this.$t('sessions.session_category.talk_session'), value: 0 },
        { text: this.$t('sessions.session_category.lightning_talk'), value: 1 },
        { text: this.$t('sessions.session_category.poster_session'), value: 2 }
      ]
    }
  },
  computed: {
    talkSessions() {
      return this.sessions.filter(session => session.talk_format_origin.match(/^Talk/))
    },
    lightningTalks() {
      return this.sessions.filter(session => session.talk_format_origin.match(/^Lightning/))
    },
    posterSessions() {
      return this.sessions.filter(session => session.talk_format_origin.match(/^Poster/))
    },
  },
  created() {
    console.log(sessions)
  }
}
</script>

<style lang="sass">
.sessions .v-ripple__container
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
  .title
    font-weight: bold
    color: $themeColor3
.v-btn:before
  display: none

</style>
