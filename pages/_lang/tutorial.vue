<template lang="pug">
#tutorial
    page-header(:ja="$t('header.menu.events.tutorial')" en="Tutorial" color="themeColor2" enColor="white" jaColor="white" barColor="white" barOpacity="0.5")
    event-header(day15 day15Time="13:00 - 19:00" :image="require('@/assets/images/tutorial.png')" applyLink="https://pyconjp.connpass.com/event/136606/" place="大田区産業プラザPiO")
    section.abstract
        v-container.py-0
            p {{ $t('tutorial.abstract') }}
            p.text2--text {{ $t('tutorial.unneed_ticket') }}
    event-page-index(:indexes="pageIndexes")
    section.summary
        v-container.py-0
            hs(color="themeColor2") {{ $t('tutorial.section.course1') }}
            .summary__schedule
                h3 {{ $t('basic.schedule') }}
                schedule-table(day15 day15Time="13:00 - 19:00")
                    template(#day15-detail) {{ $t('events.oyatsu') }}
            .summary__place
                h3 {{ $t('basic.access') }}
                p.font-weight-bold {{ $t('basic.pio') }}
                p {{ $t('basic.address.pio') }}
            iframe.google-map(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.7950378596533!2d139.7219626156352!3d35.55876384428529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601860f87f5da4e3%3A0x8a0493a2f4accfb0!2z5aSn55Sw5Yy655Sj5qWt44OX44Op44K2UGlP!5e0!3m2!1sja!2sjp!4v1566138857137!5m2!1sja!2sjp" width="100%" height="320" frameborder="0" style="border:0" allowfullscreen)
    section.course1
        v-container.py-0
            hs(color="themeColor2")
                span.text1.white--text.px-3.mr-3 Course1
                | {{ $t('tutorial.section.course1') }}
            h3 {{ $t('tutorial.course.goal') }}
            p(v-html="$t('tutorial.course1.goal')")
            h3 {{ $t('tutorial.course.capacity') }}
            p {{ $t('tutorial.course1.capacity') }}
            h3 {{ $t('tutorial.course.detail') }}
            p
                a(:href="$t('links.tutorial')" target="_blank") {{ $t('tutorial.course.detail_text') }}
            //- ul.list
            //-     li {{ $t('tutorial.course1.target.1') }}
            //-     li {{ $t('tutorial.course1.target.2') }}
            //-     li {{ $t('tutorial.course1.target.3') }}
            //- h3 {{ $t('tutorial.course.environment') }}
            //-     span.tail.font-weight-light {{ $t('tutorial.course.do_your_self') }}
            //- p {{ $t('tutorial.course1.environment.note_pc') }}
            //- ul.list
            //-     li {{ $t('tutorial.course1.environment.1') }}
            //-         br
            //-         a(href="https://www.python.org/downloads/release/python-374/") https://www.python.org/downloads/release/python-374/
            //-     li {{ $t('tutorial.course1.environment.2') }}
            //-     li {{ $t('tutorial.course1.environment.3') }}
            //- h3 {{ $t('tutorial.course.contents') }}
            //- ul.list
            //-     li {{ $t('tutorial.course1.contents.1') }}
            //-         ul.list
            //-             li {{ $t('tutorial.course1.contents.1_1') }}
            //-             li {{ $t('tutorial.course1.contents.1_2') }}
            //-     li {{ $t('tutorial.course1.contents.2') }}
            //-         ul.list
            //-             li {{ $t('tutorial.course1.contents.2_1') }}
            //-             li {{ $t('tutorial.course1.contents.2_2') }}
            //-     li {{ $t('tutorial.course1.contents.3') }}
            //-         ul.list
            //-             li {{ $t('tutorial.course1.contents.3_1') }}
            //-             li {{ $t('tutorial.course1.contents.3_2') }}

            //- h3 {{ $t('tutorial.course.produced_by') }}
            //- p {{ $t('tutorial.course1.produced_by') }}
    section.course2
        v-container.py-0
            hs(color="themeColor2")
                span.text1.white--text.px-3.mr-3 Course2
                | {{ $t('tutorial.section.course2') }}
            h3 {{ $t('tutorial.course.goal') }}
            ul.list
                li {{ $t('tutorial.course2.goal.1') }}
                li {{ $t('tutorial.course2.goal.2') }}
                li {{ $t('tutorial.course2.goal.3') }}
            h3 {{ $t('tutorial.course.capacity') }}
            p {{ $t('tutorial.course2.capacity') }}
            h3 {{ $t('tutorial.course.detail') }}
            p
                a(:href="$t('links.tutorial')" target="_blank") {{ $t('tutorial.course.detail_text') }}

    section.course3
        v-container.py-0
            hs(color="themeColor2")
                span.text1.white--text.px-3.mr-3 Course3
                | {{ $t('tutorial.section.course3') }}
            p {{ $t('tutorial.course3.notice') }}
            h3.themeColor3--text {{ $t('tutorial.course3_1.title') }}
            .event-detail.mb-4
                h3 {{ $t('tutorial.course.goal') }}
                p {{ $t('tutorial.course3_1.goal') }}
                h3 {{ $t('tutorial.course.capacity') }}
                p {{ $t('tutorial.course3_1.capacity') }}
                h3 {{ $t('tutorial.course.detail') }}
                p
                    a(:href="$t('links.tutorial')" target="_blank") {{ $t('tutorial.course.detail_text') }}
            h3.themeColor3--text {{ $t('tutorial.course3_2.title') }}
            .event-detail
                h3 {{ $t('tutorial.course.goal') }}
                p {{ $t('tutorial.course3_1.goal') }}
                h3 {{ $t('tutorial.course.capacity') }}
                p {{ $t('tutorial.course3_1.capacity') }}
                h3 {{ $t('tutorial.course.detail') }}
                p
                    a(:href="$t('links.tutorial')" target="_blank") {{ $t('tutorial.course.detail_text') }}
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
    return  {
        title: this.$t('tutorial.title')
    }
  },
  data() {
    return {
      pageIndexes: [
        this.$t('tutorial.section.summary'),
        { tag: 'Course1', title: this.$t('tutorial.section.course1') },
        {
          tag: 'Course2',
          title: this.$t('tutorial.section.course2')
        },
        {
          tag: 'Course3',
          title: this.$t('tutorial.section.course3')
        },
        this.$t('tutorial.section.supports')
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';
@import '@/assets/style/custom.sass';
@import '@/assets/style/event-pages.scss';

iframe.google-map {
  margin-top: 24px;
}

h3 > .tail {
  font-size: 14px;
  margin-left: 6px;
}
</style>
