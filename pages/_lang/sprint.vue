<template lang="pug">
#dev-sprints
    page-header(:ja="$t('header.menu.events.dev-spr')" en="Development Sprints" color="themeColor1" enColor="white" jaColor="white" barColor="white" barOpacity="0.5")
    event-header(day14 day14Time="10:00 - 18:00" :image="require('@/assets/images/sprint.png')" applyLink="https://pyconjp.connpass.com/event/136558/" place="HENNGE")
    section.abstract
        v-container.pb-0
            p {{ $t('sprints.abstract') }}
            .text-xs-center.text-sm-left
                button-with-arrow(color="themeColor1" outline :dark="true" :block="false"  :href="$t('links.sprint_themes')") {{ $t('sprints.theme_list') }}
    event-page-index(:indexes="pageIndexes")
    section.summary
        v-container.py-0
            hs {{ $t('sprints.section.summary') }}
            .summary__schedule
                h3 {{ $t('basic.schedlue') }}
                schedule-table(day14 day14Time="10:00 - 18:00")
                    template(#day14-detail) {{ $t('events.hennge_dinner') }}
            .summary__place
                h3 {{ $t('basic.access') }}
                p.font-weight-bold {{ $t('basic.hennge') }}
                p {{ $t('basic.address.hennge') }}
            iframe.google-map(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.9003448477!2d139.69285971563687!3d35.654826839026384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b544a110299%3A0xbb616fedef1dbf28!2z44CSMTUwLTAwMzYg5p2x5Lqs6YO95riL6LC35Yy65Y2X5bmz5Y-w55S677yR77yW4oiS77yS77yYIOOCsOODqeOCueOCt-ODhuOCpOa4i-iwtw!5e0!3m2!1sja!2sjp!4v1566201652103!5m2!1sja!2sjp" width="100%" height="320" frameborder="0" style="border:0" allowfullscreen)
    section.what-is-sprint
        v-container.py-0
            hs {{ $t('sprints.section.what_is_sprint') }}
            p {{ $t('sprints.what_is_sprint') }}
    section.sprint-leader
        v-container.py-0
            hs {{ $t('sprints.section.sprint_leader') }}
            p {{ $t('sprints.sprint_leader') }}
            h3 {{ $t('sprints.as_a_sprint_leader') }}
            p {{ $t('sprints.as_a_sprint_leader_content') }}
            p
                a(:href="$t('links.sprint_themes')") {{ $t('sprints.submitted_theme_list') }}
                v-icon(color="themeColor2" size="small").px-1 far fa-window-restore
                | {{ $t('sprints.be_public') }}
            p.text2--text {{ $t('sprints.every_Sat') }}
                br
                | {{ $t('sprints.is_based_on_answer') }}
    supports
</template>

<script>
import PageHeader from '@/components/partials/PageHeader'
import ButtonWithArrow from '@/components/parts/ButtonWithArrow'
import SectionHeader from '@/components/parts/SectionHeader'
import ScheduleTable from '@/components/parts/ScheduleTable'
import EventHeader from '@/components/parts/EventHeader'
import EventPageIndex from '@/components/parts/EventPageIndex'
import Supports from '@/components/parts/Supports'

export default {
  components: {
    PageHeader,
    ButtonWithArrow,
    hs: SectionHeader,
    ScheduleTable,
    EventHeader,
    EventPageIndex,
    Supports
  },
  data() {
    return {
      pageIndexes: [
        this.$t('sprints.section.summary'),
        this.$t('sprints.section.what_is_sprint'),
        this.$t('sprints.section.sprint_leader'),
        this.$t('sprints.section.supports')
      ]
    }
  }
}
</script>
