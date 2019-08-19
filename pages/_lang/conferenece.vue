<template lang="pug">
#conference
    page-header(ja="カンファレンス" en="Conference" color="themeColor3" enColor="white" jaColor="white" barColor="white" barOpacity="0.5")
    event-header(day16 day17 :image="require('@/assets/images/photo_image2.png')" applyLink="#" place="大田区産業プラザPiO")
    section.abstract
        v-container.py-0
            p {{ $t("home.conference.main") }}
            .text-xs-center.text-sm-left
                button-with-arrow(color="themeColor1" outline :dark="true" :block="false"  href="#") {{ $t("home.conference.sessions") }}
                button-with-arrow(color="themeColor1" outline :dark="true" :block="false"  href="#") {{ $t("home.conference.timetables") }}
    event-page-index(:indexes="pageIndexes")
    section.summary
        v-container.py-0
            hs {{ $t("conference.sections.summary") }}
            .summary__schedule
                h3 {{ $t("basic.schedule") }}
                schedule-table(day16 day17 day16Time="09:30 - 20:30" day17Time="09:30 - 19:00")
                    template(#day16-detail) {{ $t('events.lunch_oyatsu_party') }}
                    template(#day17-detail) {{ $t('events.lunch_oyatsu') }}
            .summary__place
                h3 {{ $t('basic.access') }}
                p.font-weight-bold {{ $t('basic.pio') }}
                p {{ $t('basic.address.pio') }}
            iframe.google-map(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.7950378596533!2d139.7219626156352!3d35.55876384428529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601860f87f5da4e3%3A0x8a0493a2f4accfb0!2z5aSn55Sw5Yy655Sj5qWt44OX44Op44K2UGlP!5e0!3m2!1sja!2sjp!4v1566138857137!5m2!1sja!2sjp" width="100%" height="320" frameborder="0" style="border:0" allowfullscreen)
    section.keynote
        v-container.py-0
            hs(:sub="$t('conference.sections.keynote')") Keynote
            two-columns-layout
                template(#left)
                    schedule-table(day16 day16Time="00:00 - 00:00")
                    p {{ $t('events.place') }} {{ $t('conference.place.keynote_day16') }}
                    talk-card(
                        profileImg="cory_althoff.png"
                        speakerName="Cory Althoff"
                        sessionTheme="TBD"
                        :profile="$t('home.conference.cory_profile')"
                    )
                template(#right)
                    schedule-table(day17 day17Time="00:00 - 00:00")
                    p {{ $t('events.place') }} {{ $t('conference.place.keynote_day17') }}
                    talk-card(
                        profileImg="koike.png"
                        speakerName="小池 誠"
                        sessionTheme="TBD"
                        :profile="$t('home.conference.koike_profile')"
                    )
    section.invited-lecture
        v-container.py-0
            hs(:sub="$t('conference.sections.invited_lecture')") Invited Lecture
            schedule-table(day17 day17Time="00:00 - 00:00")
            p {{ $t('events.place') }} {{ $t('conference.place.invited_lecture') }}
            talk-card(
            profileImg="lyu.png"
            speakerName="Renyuan Lyu"
            sessionTheme="TBD"
            :profile="$t('home.conference.lyu_profile')"
            )
    section.talk-session
        v-container.py-0
            hs(:sub="$t('conference.sections.talk_session')") Talk Session
            two-columns-layout
                template(#left)
                    v-img(max-height="20vh" :src="require('@/assets/images/Photo5.png')")
                template(#right)
                    p {{ $t('conference.talk_session') }}
                    button-with-arrow(color="themeColor1" outline :dark="true" :block="false"  href="#") {{ $t('conference.talk_session_list') }}
    section.lightning-talk
        v-container.py-0
            hs(:sub="$t('conference.sections.lightning_talk')") Lightning Talk
            two-columns-layout(sm-reverse)
                template(#left)
                    p {{ $t('conference.lightning_talk') }}
                    button-with-arrow(color="themeColor1" outline :dark="true" :block="false"  href="#") {{ $t('conference.lightning_talk_list') }}
                template(#right)
                    v-img(max-height="20vh" :src="require('@/assets/images/lightning-talk.png')")
            .event-detail.mt-5.pa-5
                h3 {{ $t('basic.access_schedule') }}
                schedule-table(day16 day17 day16Time="00:00 - 00:00 （n分間）　枠数：n枠" day17Time="00:00 - 00:00 （n分間）　枠数：n枠")
                p {{ $t('events.place') }} {{ $t('conference.place.lightning_talk') }}
                h3 {{ $t('conference.for_LTer') }}
                p {{ $t('conference.for_LTer_main') }}
                p.text2--text {{ $t('conference.for_LTer_sub') }}
    section.beginners-session
        v-container.py-0
            hs(:sub="$t('conference.sections.beginners_session')") Beginner's Session
            two-columns-layout
                template(#left)
                    v-img(max-height="20vh" :src="require('@/assets/images/beginners-session.png')")
                template(#right)
                    p {{ $t('conference.begginer_session') }}
            .event-detail.pa-5
                h3 {{ $t('basic.access_schedule') }}
                schedule-table(day16 day16Time="00:00 - 00:00 （n分間）")
                p {{ $t('events.place') }} {{ $t('conference.place.begginers_session') }}
                h3 {{ $t('events.target') }}
                p {{ $t('conference.begginer_session_target') }}
    section.poster-indivisual
        v-container.py-0
            hs(:sub="$t('conference.sections.poster_indivisual')" tail="Indivisual") Poster Session
            two-columns-layout(sm-reverse)
                template(#left)
                    p {{ $t('conference.poster_indivisual') }}
                    button-with-arrow(color="themeColor1" outline :dark="true" :block="false"  href="#") {{ $t('conference.posters') }}
                template(#right)
                    v-img(max-height="20vh" :src="require('@/assets/images/poster-indivisual.png')")
    section.poster-community
        v-container.py-0
            hs(:sub="$t('conference.sections.poster_community')" tail="Community") Poster Session
            two-columns-layout
                template(#left)
                    v-img(max-height="20vh" :src="require('@/assets/images/poster-community.png')")
                template(#right)
                    p {{ $t('conference.poster_community') }}
                    button-with-arrow(color="themeColor1" outline :dark="true" :block="false"  href="#") {{ $t('conference.posters') }}
    supports
    section.after-party
        v-container.py-0
            hs(:sub="$t('conference.sections.after_party')") After Party
            two-columns-layout(sm-reverse)
                template(#left)
                    p {{ $t('conference.after_party') }}
                    h3 {{ $t('basic.access_schedule') }}
                    schedule-table(day16 day16Time="00:00 - 00:00")
                    p {{ $t('events.place') }} {{ $t('conference.place.after_party') }}
                template(#right)
                    v-img(:src="require('@/assets/images/after-party.png')")

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
  data() {
    return {
      pageIndexes: [
        this.$t('conference.sections.summary'),
        this.$t('conference.sections.keynote'),
        this.$t('conference.sections.invited_lecture'),
        this.$t('conference.sections.talk_session'),
        this.$t('conference.sections.lightning_talk'),
        this.$t('conference.sections.beginners_session'),
        this.$t('conference.sections.poster_indivisual'),
        this.$t('conference.sections.poster_community'),
        this.$t('conference.sections.after_party')
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
</style>
