<template lang="pug">
#conference
    v-container
        v-layout.my-4
            v-flex.xs12.text-xs-center
                .display-3.primary--text(style="text-decoration: underline;") Conference
        v-layout.pa-4
            v-flex.xs12.text-xs-left
                .body-2 {{ dummyText }}
        v-layout.pa-4.justify-center
            v-flex.xs4.text-xs-right
                v-btn(outline round color="primary" large)
                    span.font-weight-bold セッション一覧
                    v-icon.ml-3 keyboard_arrow_right
            v-flex.xs4.text-xs-left
                v-btn(outline round color="primary" large)
                    span.font-weight-bold タイムテーブル一覧
                    v-icon.ml-3 keyboard_arrow_right
        v-layout.my-4
            v-flex.xs12.text-xs-center
                .display-3.primary--text(style="text-decoration: underline;") Overview
        .spacer.py-2
        v-layout.my-4
            v-flex.xs12
                secondary-heading(name="Keynote" description="基調講演")
        v-layout.justify-space-between.px-4
            v-flex.md6
                talk-card(
                    date="09.16"
                    weekday="月・祝"
                    profileImg="https://via.placeholder.com/500"
                    speakerName="Cory Althoff"
                    sessionTheme="TBD"
                    :profile="dummyText"
                )
            v-flex.md6.ml-4
                talk-card(
                    date="09.16"
                    weekday="月・祝"
                    profileImg="https://via.placeholder.com/500"
                    speakerName="Cory Althoff"
                    sessionTheme="TBD"
                    :profile="dummyText"
                )
        .spacer.py-4
        v-layout.my-4
            v-flex.xs12
                secondary-heading(name="Invited Lecture" description="招待講演")
        v-layout.justify-space-between.px-4
            v-flex.md6
                talk-card(
                    date="09.16"
                    weekday="月・祝"
                    profileImg="https://via.placeholder.com/500"
                    speakerName="Cory Althoff"
                    sessionTheme="TBD"
                    :profile="dummyText"
                )
            v-flex.md6.ml-4
                talk-card(
                    date="09.16"
                    weekday="月・祝"
                    profileImg="https://via.placeholder.com/500"
                    speakerName="Cory Althoff"
                    sessionTheme="TBD"
                    :profile="dummyText"
                )
        .spacer.py-4
        v-layout.mt-4.mb-2
            v-flex.xs12
                secondary-heading(name="Sessions" description="その他カンファレンス内容")
        v-layout.row.wrap
            v-flex.md4.pa-2(v-for="session in sessions" :key="session.id")
                v-card
                    v-img(:src="session.img" height="150px")
                    v-layout.pa-3.column
                        v-flex.xs12
                            .title.font-weight-bold {{ session.title }}
                            .caption.grey--text.grey--lighten-2.mt-1 {{ session.caption }}
                            .body-1.my-2 {{ session.description }}
                        v-flex.xs12.px-4
                            v-btn(round color="primary" block outline)
                                span 詳細情報
                                v-icon keyboard_arrow_right
</template>

<script>
import SecondaryHeading from "@/components/parts/SecondHeading"
import TalkCard from "@/components/parts/TalkCard"

const dummyText = "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。";

export default {
    name: "TheConference",
    components: {
        "secondary-heading": SecondaryHeading,
        "talk-card": TalkCard
    },
    data() {
        return {
            dummyText: dummyText,
            sessions: [
                {
                    id: 1, img: "https://via.placeholder.com/500", title: "Talk Session", caption: "トークセッション", description: dummyText,
                },
                {
                    id: 2, img: "https://via.placeholder.com/500", title: "Begginer's Session", caption: "ビギナーセッション", description: dummyText,
                },
                {
                    id: 3, img: "https://via.placeholder.com/500", title: "lightning talk", caption: "ライトニングトーク", description: dummyText,
                },
                {
                    id: 4, img: "https://via.placeholder.com/500", title: "Poster", caption: "ポスターセッション", description: dummyText,
                },
                {
                    id: 5, img: "https://via.placeholder.com/500", title: "Job Fair", caption: "ジョブフェア", description: dummyText,
                }
            ]
        }
    }
}
</script>

