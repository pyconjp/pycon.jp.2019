<template lang="pug">
#conference
    v-container
        v-layout.my-4
            v-flex.xs12.text-xs-center
                first-heading(name="Conference")
        v-layout.pa-4
            v-flex.xs12.text-xs-left
                .body-2(v-html="$t('home.conference.main')")
        v-layout.wrap.pa-4.justify-center
            v-flex.xs12.sm12.md4.text-xs-right.px-3
                button-with-arrow(:outline="true" color="themeColor3" size="large") {{ $t("home.conference.sessions") }}
            v-flex.xs12.sm12.md4.text-xs-left.px-3
                button-with-arrow(:outline="true" color="themeColor3" size="large") {{ $t("home.conference.timetables") }}

        .spacer.py-2

        // 基調講演
        v-layout.my-4
            v-flex.md12
                secondary-heading(name="Keynote" description="基調講演")
        v-layout.justify-space-between(
            :class="{'wrap': $vuetify.breakpoint.smAndDown, 'px-5': $vuetify.breakpoint.mdAndUp}"
        )
            v-flex.xs12.sm12.md6
                talk-card(
                    date="09.16"
                    :weekday="$t('weekday.mon')"
                    profileImg="cory_althoff.png"
                    speakerName="Cory Althoff"
                    sessionTheme="TBD"
                    :profile="$t('home.conference.cory_profile')"
                )
            v-flex.xs12.sm12.md6.pt-1(
                :class="{'ml-0': $vuetify.breakpoint.smAndDown, 'ml-4': $vuetify.breakpoint.mdAndUp, 'pt-4': $vuetify.breakpoint.smAndDown, 'pt-0': $vuetify.breakpoint.mdAndUp }"
            )
                talk-card(
                    date="09.17"
                    :weekday="$t('weekday.tue')"
                    profileImg="koike.png"
                    speakerName="小池 誠"
                    sessionTheme="TBD"
                    :profile="$t('home.conference.koike_profile')"
                )
        .spacer.py-4

        // 招待講演
        v-layout.my-4
            v-flex.xs12
                secondary-heading(name="Invited Lecture" description="招待講演")
        v-layout.justify-space-between(
            :class="{'wrap': $vuetify.breakpoint.smAndDown, 'px-5': $vuetify.breakpoint.mdAndUp}"
        )
            v-flex.xs12.sm12.md6(
                :class="{'pt-4': $vuetify.breakpoint.smAndDown, 'pt-0': $vuetify.breakpoint.mdAndUp, 'mx-0': $vuetify.breakpoint.smAndDown, 'mr-3': $vuetify.breakpoint.mdAndUp }"
            )
                talk-card(
                    date="09.17"
                    :weekday="$t('weekday.tue')"
                    profileImg="lyu.png"
                    speakerName="Renyuan Lyu"
                    sessionTheme="TBD"
                    :profile="$t('home.conference.lyu_profile')"
                )
            v-flex.xs12.sm12.md6(
                :class="{'pt-4': $vuetify.breakpoint.smAndDown, 'pt-0': $vuetify.breakpoint.mdAndUp, 'mx-0': $vuetify.breakpoint.smAndDown, 'ml-3': $vuetify.breakpoint.mdAndUp }"
            )
                v-card(flat color="blueGrey2")
                    .pa-3
                        v-img(:src="require('@/assets/images/pycontaiwan2019.svg')")
                    v-card-title
                        a(href="https://tw.pycon.org/2019/en-us/" target="_blank")
                            h3.themeColor1--text
                                | PyCon Taiwan
                                v-icon.pl-2(color="themeColor1") open_in_new
                        p.mt-2 招待講演の講師Renyuan LyuさんもスタッフをつとめるPyCon TW 2019がPyCon JP 2019の1週間後に、台湾台北市の中央研究院（Academia Sinica）、Humanities and Social Science Building（HSSB）にて開催されます。
        .spacer.py-4
        v-layout.mt-4.mb-2
            v-flex.xs12
                secondary-heading(name="Sessions" description="その他カンファレンス内容")

        v-layout.row.wrap(
            :class="{'wrap': $vuetify.breakpoint.smAndDown, 'px-5': $vuetify.breakpoint.mdAndUp}"
        ).sessions
            v-flex.md4.pa-2(v-for="session in sessions" :key="session.id")
                v-card(style="height: 100%")
                    v-img(:src="session.img" height="150px")
                    v-layout.pa-4.column
                        v-flex.xs12
                            .title.font-weight-bold {{ session.title }}
                            .caption.grey--text.grey--lighten-2.mt-1 {{ session.caption }}
                            .body-1.my-2 {{ session.description }}
                        v-flex.xs12.px-4
                            button-with-arrow(color="themeColor3" :outline="true" size="normal") {{ $t("basic.detail") }}
</template>

<style lang="sass" scoped>
.sessions
    margin: 0 -8px
</style>


<script>
import FirstHeading from "@/components/parts/FirstHeading"
import SecondaryHeading from "@/components/parts/SecondHeading"
import TalkCard from "@/components/parts/TalkCard"
import ButtonWithArrow from "@/components/parts/ButtonWithArrow"

export default {
    name: "TheConference",
    components: {
        "first-heading": FirstHeading,
        "secondary-heading": SecondaryHeading,
        "talk-card": TalkCard,
        "button-with-arrow": ButtonWithArrow
    },
    data() {
        return {
            sessions: [
                {
                    id: 1, img: require("~/assets/images/top/talk.png"), title: "Talk Session", caption: "トークセッション", 
                    description: this.$t("home.conference.talk_session"),
                },
                {
                    id: 2, img: require("~/assets/images/top/begginer_session.png"), title: "Begginer's Session", caption: "ビギナーセッション", 
                    description: this.$t("home.conference.begginer_session"),
                },
                {
                    id: 3, img: require("~/assets/images/top/lt.png"), title: "lightning talk", caption: "ライトニングトーク", 
                    description: this.$t("home.conference.lightning_talk"),
                },
                {
                    id: 4, img: require("~/assets/images/top/poster.png"), title: "Poster(Indivisual)", caption: "ポスターセッション(個人)", 
                    description: this.$t("home.conference.poster_indivisual"),
                },
                {
                    id: 5, img: require("~/assets/images/top/poster_com.png"), title: "Poster(Community)", caption: "ポスターセッション(コミュニティ)", 
                    description: this.$t("home.conference.poster_community"),
                },
                // {
                //     id: 6, img: require("~/assets/images/top/poster_com.png"), title: "Job Fair", caption: "ジョブフェア", 
                //     description: this.$t("home.conference.talk_session"),
                // }
            ]
        }
    }
}
</script>

