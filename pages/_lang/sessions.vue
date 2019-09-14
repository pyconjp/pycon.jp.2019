<template lang="pug">
#sessions
    page-header(ja="セッションリスト" en="Sessions")
    v-container
      v-layout.py-3.justify-center.wrap
        v-flex.xs12.sm12.md4.px-1
          v-text-field(:value="selectedText" @change="val => selectedText = val" :placeholder="$t('sessions.search.text')" solo hide-details)
        v-flex.xs12.sm12.md4.px-1(v-if="$vuetify.breakpoint.mdAndUp")
          session-select(@change="val => selectedRooms = val" :items="rooms" :placeholder="$t('sessions.search.room')")
        v-flex.xs12.sm12.md4.px-1(v-if="$vuetify.breakpoint.mdAndUp")
          session-select(@change="val => selectedLevels = val" :items="levels" :placeholder="$t('sessions.search.level')")
      v-layout(v-if="$vuetify.breakpoint.smAndUp").mt-4.mb-1.tabs.sessions
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
          v-select(outline single-line :items="items" item-text="text" item-value="value" v-model="activeTab" :value="0")
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
import SessionSelect from '@/components/pages/sessions/SessionSelect'

import { roomsMaster } from "@/plugins/constants"

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
    SessionList,
    SessionSelect
  },
  data() {
    return {
      sessions: sessions,
      activeTab: 0,
      items: [
        { text: this.$t('sessions.session_category.talk_session'), value: 0 },
        { text: this.$t('sessions.session_category.lightning_talk'), value: 1 },
        { text: this.$t('sessions.session_category.poster_session'), value: 2 }
      ],
      selectedText: null,
      selectedRooms: [],
      selectedLevels: [],
    }
  },
  computed: {
    filterSessions() {
      let filtered = this.sessions
      if(this.selectedText) filtered = filtered.filter(session =>  {
        return session.title.toLowerCase().indexOf(this.selectedText.toLowerCase()) > -1 || session.name.toLowerCase().indexOf(this.selectedText.toLowerCase()) > -1
      })
      if(this.selectedRooms.length > 0) filtered = filtered.filter(session =>  this.selectedRooms.includes(session.room_id))
      if(this.selectedLevels.length > 0) filtered = filtered.filter(session => this.selectedLevels.includes(session.audience_level))
      return filtered
    },
    talkSessions() {
      return this.filterSessions.filter(session => session.talk_format_origin.match(/^Talk/))
    },
    lightningTalks() {
      return this.filterSessions.filter(session => session.talk_format_origin.match(/^Lightning/))
    },
    posterSessions() {
      return this.filterSessions.filter(session => session.talk_format_origin.match(/^Poster/))
    },
    rooms() {
      return Array.from(
        new Set(
          this.sessions.map(
            session =>  { return { value: session.room_id, text: this.$t("rooms." + roomsMaster[session.room_id]) } }
          )
        )
      )
    },
    levels() {
      return Array.from(
        new Set(
          this.sessions.map(session => { return { value: session.audience_level, text: session.audience_level} })
        )
      ).filter(e => !!e.text)
    }
  },
  created() {
    if(this.$route.query.category) {
      switch (this.$route.query.category) {
        case "lt":
          this.activeTab = 1
          break
        case "poster": 
          this.activeTab = 2
          break
      }
    }
  },
  methods: {
    debug(val) {
      // console.log(val)
    }
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
