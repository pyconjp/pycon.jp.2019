<template lang="pug">
#conference
    page-header(:ja="$t('header.menu.events.child-workshop')" en="Youth Coder Workshop" color="themeColor4" enColor="white" jaColor="white" barColor="white" barOpacity="0.5")
    //- :image="require('@/assets/images/youth.png')" の画像がないためsprintの画像を使う
    event-header(day16 day16Time="10:00 - 15:00" :image="require('@/assets/images/sprint.png')" applyLink="https://pyconjp.connpass.com/event/139133/" :place="$t('basic.pio')")
    .py-3
    section.abstract
        v-container.py-0
            p {{ $t('youth.abstract') }}
    event-page-index(:indexes="pageIndexes")
    section.summary
        v-container.py-0
            hs(color="themeColor4") {{ $t('youth.section.summary') }}
            .summary__schedule
                h3 {{ $t('basic.schedule') }}
                schedule-table(day16 :day16Time="`10:00 - 15:00 ${$t('youth.in_conference')}`" )
                    template(#day16-detail) {{ $t('events.lunch_oyatsu_party') }}
            .summary__place
                h3 {{ $t('basic.access') }}
                p.font-weight-bold {{ $t('basic.pio') }} {{ $t('rooms.e') }}
                p {{ $t('basic.address.pio') }}
            iframe.google-map(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.7950378596533!2d139.7219626156352!3d35.55876384428529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601860f87f5da4e3%3A0x8a0493a2f4accfb0!2z5aSn55Sw5Yy655Sj5qWt44OX44Op44K2UGlP!5e0!3m2!1sja!2sjp!4v1566138857137!5m2!1sja!2sjp" width="100%" height="320" frameborder="0" style="border:0" allowfullscreen)
    section.workshop-content
        v-container.py-0
            hs(color="themeColor4") {{ $t('youth.section.workshop_content') }}
            two-columns-layout(sm-reverse)
                template(#left)
                    p {{ $t('youth.workshop_content') }}
                    h3 {{ $t('youth.about_workbook') }}
                    p {{ $t('youth.summary_of_CPE') }}
                        v-icon(size="small" color="themeColor2").px-2 far fa-window-restore
                    p.text2--text {{ $t('youth.can_take_home_CPE') }}
                template(#right)
                    v-img(:src="require('@/assets/images/workshop.png')")
    section.target-member
        v-container.py-0
            hs(color="themeColor4") {{ $t('youth.section.target_member') }}
            p {{ $t('youth.target') }}
            h3 {{ $t('youth.capacity') }}
            p {{ $t('youth.capacity_volume') }}
    section.about-pc
        v-container.py-0
            hs(color="themeColor4") {{ $t('youth.section.about_pc') }}
            p {{ $t('youth.about_pc') }}
    section.about-ticket
        v-container.py-0
            hs(color="themeColor4") {{ $t('youth.section.about_ticket') }}
            p {{ $t('youth.about_ticket') }}
    section.supporters
        v-container.py-0
            hs(color="themeColor4") {{ $t('youth.section.supporters') }}
            p {{ $t('youth.supporters') }}
            ul.supporters__list
                li {{ $t('youth.tanaka') }}
                li {{ $t('youth.togazono') }}
                li {{ $t('youth.masuzawa') }}
                li {{ $t('youth.sakata') }}
    supports
</template>

<script>
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
  head() {
    return {
      title: this.$t("youth.title")
    }
  },
  data() {
    return {
      pageIndexes: [
        this.$t('youth.section.summary'),
        this.$t('youth.section.workshop_content'),
        this.$t('youth.section.target_member'),
        this.$t('youth.section.about_pc'),
        this.$t('youth.section.about_ticket'),
        this.$t('youth.section.supporters'),
        this.$t('events.section.support')
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';

.supporters {
  &__list {
    list-style: none;
    padding: 0;

    li {
      vertical-align: middle;
      line-height: 2em;

      &::before {
        content: '';
        height: 8px;
        width: 8px;
        border-radius: 50%;
        display: inline-block;
        background-color: $themeColor3;
        margin-right: 1em;
      }
    }
  }
}
</style>
