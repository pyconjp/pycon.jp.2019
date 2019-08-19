<template lang="pug">
#conference
    page-header(ja="カンファレンス" en="Conference" color="themeColor3" enColor="white" jaColor="white" barColor="white" barOpacity="0.5")
    event-header(day16 day17 :image="require('@/assets/images/photo_image2.png')" applyLink="#" place="大田区産業プラザPiO")
    section.abstract
        v-container.py-0
            p 私たちは、Pythonユーザーが一堂に会し、互いに交流を深め、知識を分けあい、新たな可能性を見つけられる場所として、PyCon JPの企画と運営に取り組んできました。とりわけ、PyCon JPを広く世界のPythonユーザにも開かれた場と位置づけ、国内外のユーザにとって魅力的なカンファレンスとなるよう努力をつづけています。
            p PyCon JPを素晴らしいカンファレンスとして維持していくには、ただ自分たちの会を毎年同じ時期に同じ場所で開催するだけでは足りないと、私たちは考えます。国内外で行われるカンファレンスとの連携や、ユーザー間の交流の促進、Pythonや関連するソフトウェアの普及・啓蒙をお手伝いしていくことで、Pythonにもっと多くの関心が集まり、沢山のユーザやソフトウェアが生まれていくことが、私たちの原動力となると信じています。
            p PyCon JP 2019今年のテーマはPython New Eraです。日本で元号が新しくなった事。Pythonも2から3へ新しい時代へ移っていく事をコンセプトとしています。
                br
                | PyCon JP 2019は参加する皆さんが新しい繋がりや知識を得て楽しめるカンファレンスを目標に開催します。
            .text-xs-center.text-sm-left
                button-with-arrow(color="themeColor1" outline :dark="true" :block="false"  href="#") セッション一覧
                button-with-arrow(color="themeColor1" outline :dark="true" :block="false"  href="#") タイムテーブル
    event-page-index(:indexes="pageIndexes")
    section.summary
        v-container.py-0
            hs カンファレンスの開催概要
            .summary__schedule
                h3 日程
                schedule-table(day16 day17 day16Time="09:30 - 20:30" day17Time="09:30 - 19:00")
                    template(#day16-detail) ※昼食はお弁当が出ます。またおやつの提供と、18:00よりアフターパーティがあります。
                    template(#day17-detail) ※昼食はお弁当が出ます。またおやつの提供があります。
            .summary__place
                h3 会場
                p.font-weight-bold 大田区産業プラザ PiO
                p 〒144-0035　東京都大田区南蒲田一丁目20番20号
            iframe.google-map(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.7950378596533!2d139.7219626156352!3d35.55876384428529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601860f87f5da4e3%3A0x8a0493a2f4accfb0!2z5aSn55Sw5Yy655Sj5qWt44OX44Op44K2UGlP!5e0!3m2!1sja!2sjp!4v1566138857137!5m2!1sja!2sjp" width="100%" height="320" frameborder="0" style="border:0" allowfullscreen)
    section.keynote
        v-container.py-0
            hs(sub="基調講演") Keynote
            two-columns-layout
                template(#left)
                    schedule-table(day16 day16Time="00:00 - 00:00")
                    p 開催場所（ホール名など）テキストテキスト
                    talk-card(
                        profileImg="cory_althoff.png"
                        speakerName="Cory Althoff"
                        sessionTheme="TBD"
                        :profile="$t('home.conference.cory_profile')"
                    )
                template(#right)
                    schedule-table(day17 day17Time="00:00 - 00:00")
                    p 開催場所（ホール名など）テキストテキスト
                    talk-card(
                        profileImg="koike.png"
                        speakerName="小池 誠"
                        sessionTheme="TBD"
                        :profile="$t('home.conference.koike_profile')"
                    )
    section.invited-lecture
        v-container.py-0
            hs(sub="招待講演") Invited Lecture
            two-columns-layout(only-left)
                template(#left)
                    schedule-table(day17 day17Time="00:00 - 00:00")
                    p 開催場所(ホールなど) テキストテキスト
            two-columns-layout
                template(#left)
                    talk-card(
                    profileImg="lyu.png"
                    speakerName="Renyuan Lyu"
                    sessionTheme="TBD"
                    :profile="$t('home.conference.lyu_profile')"
                    )
                template(#right)
                    v-card(flat color="blueGrey2")
                        .pa-3
                            v-img(max-height="20vh" :src="require('@/assets/images/pycontaiwan2019.svg')")
                        v-card-title
                            a(href="https://tw.pycon.org/2019/en-us/" target="_blank")
                            h3.themeColor1--text
                                | PyCon Taiwan
                                v-icon.pl-2(color="themeColor1") open_in_new
                            p.mt-2 招待講演の講師Renyuan LyuさんもスタッフをつとめるPyCon TW 2019がPyCon JP 2019の1週間後に、台湾台北市の中央研究院（Academia Sinica）、Humanities and Social Science Building（HSSB）にて開催されます。
    section.talk-session
        v-container.py-0
            hs(sub="トークセッション") Talk Session
            two-columns-layout
                template(#left)
                    v-img(max-height="20vh" :src="require('@/assets/images/Photo5.png')")
                template(#right)
                    p 説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
                    p 説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
                    button-with-arrow(color="themeColor1" outline :dark="true" :block="false"  href="#") トークセッション一覧
    section.lightning-talk
        v-container.py-0
            hs(sub="ライトニングトーク") Lightning Talk
            two-columns-layout(sm-reverse)
                template(#left)
                    p
                        | 5分間で行う発表（プレゼンテーション）のことです。「Lightning Talk（稲妻トーク）」を略して「LT」とも呼びます。
                        br
                        | 楽しくても5分、つまらなくても5分。より多くの人に発表する機会をもってもらうための企画です。Pythonに関係あっても無くてもOKです！
                    p クロージングLTは、カンファレンス最後に参加者全員が、メイン会場に集まって行っています。発表者は全員の前で発表ができ、聞く人も含めた全ての参加者が一緒に、イベントを盛り上げます。今年は、どんなLTが発表されるのか楽しみですね。みんなで盛り上げましょう！
                    button-with-arrow(color="themeColor1" outline :dark="true" :block="false"  href="#") ライトニングトーク一覧
                template(#right)
                    v-img(max-height="20vh" :src="require('@/assets/images/lightning-talk.png')")
            .event-detail.mt-5.pa-5
                h3 日時・場所
                schedule-table(day16 day17 day16Time="00:00 - 00:00 （n分間）　枠数：n枠" day17Time="00:00 - 00:00 （n分間）　枠数：n枠")
                p 開催場所（ホール名など）テキストテキスト
                h3 LT発表希望者の方へ
                p 当日朝に写真のような形でホワイトボードに名前を書いてもらう方式で募集します。早い者勝ちで行うので、LTやるぞ！という方は早目に会場入りをしてください。LTの時間は5分で、枠数は1日目8枠、2日目7枠を予定してます。
                p.text2--text ※日本語がわからない人もある程度楽しめるように、スライドは英語で作ってください。
    section.beginners-session
        v-container.py-0
            hs(sub="ビギナーセッション") Beginner's Session
            two-columns-layout
                template(#left)
                    v-img(max-height="20vh" :src="require('@/assets/images/beginners-session.png')")
                template(#right)
                    p 説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
                    p 説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
            .event-detail.pa-5
                h3 日時・場所
                schedule-table(day16 day16Time="00:00 - 00:00 （n分間）")
                p 開催場所（ホール名など）テキストテキスト
                h3 参加対象
                p 説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
    section.poster-indivisual
        v-container.py-0
            hs(sub="ポスターセッション(個人)" tail="Indivisual") Poster Session
            two-columns-layout(sm-reverse)
                template(#left)
                    p 説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
                    p 説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
                    button-with-arrow(color="themeColor1" outline :dark="true" :block="false"  href="#") ポスターセッション一覧
                template(#right)
                    v-img(max-height="20vh" :src="require('@/assets/images/poster-indivisual.png')")
    section.poster-community
        v-container.py-0
            hs(sub="ポスターセッション(コミュニティ)" tail="Community") Poster Session
            two-columns-layout
                template(#left)
                    v-img(max-height="20vh" :src="require('@/assets/images/poster-community.png')")
                template(#right)
                    p 説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
                    p 説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
                    button-with-arrow(color="themeColor1" outline :dark="true" :block="false"  href="#") ポスターセッション一覧
    supports
    section.after-party
        v-container.py-0
            hs(sub="アフターパーティ") After Party
            two-columns-layout(sm-reverse)
                template(#left)
                    p カンファレンスの終わりにアフターパーティが～…参加情報や注意点など説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
                    h3 日時・場所
                    schedule-table(day16 day16Time="00:00 - 00:00")
                    p 開催場所（ホール名など）テキストテキスト
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
        'カンファレンスの開催概要',
        '基調講演',
        '招待講演',
        'トークセッション',
        'ビギナーズセッション',
        'ポスターセッション(個人)',
        'ポスターセッション(コミュニティ)',
        'サポート：食事、託児所、遠方支援',
        'アフターパーティー'
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
