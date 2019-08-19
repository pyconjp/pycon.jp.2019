<template lang="pug">
#conference
    page-header(ja="子供向けワークショップ" en="Youth Coder Workshop" color="themeColor4" enColor="white" jaColor="white" barColor="white" barOpacity="0.5")
    event-header(day16 day16Time="10:00 - 15:00" :image="require('@/assets/images/youth.png')" applyLink="#" place="大田区産業プラザPiO")
    section.abstract
        v-container.py-0
            p 小・中学生を対象に想定した～リード文テキストリード文テキストリード文テキストリード文テキストリード文テキストリード文テキストリード文テキストリード文テキストリード文テキストリード文テキストリード文テキストリード文テキストリード文テキストリード文テキスト。
            p 当ワークショップは、PyCon JP 2019の1日目に開催されます。ワークショップの参加者および同伴者は、カンファレンス1日目に限り本会場に入場可能です。また、カンファレンス1日目はパーティを除くイベントに参加できます。この機会にPyCon JPをお楽しみください。
    event-page-index(:indexes="pageIndexes")
    section.summary
        v-container.py-0
            hs(color="themeColor4") 子供向けワークショップの開催概要
            .summary__schedule
                h3 日程
                schedule-table(day16 day16Time="10:00 - 15:00 カンファレンス内" )
                    template(#day16-detail) ※昼食はお弁当が出ます。またおやつの提供と、18:00よりアフターパーティがあります。
            .summary__place
                h3 会場
                p.font-weight-bold 大田区産業プラザ PiO ◯◯ホール
                p 〒144-0035　東京都大田区南蒲田一丁目20番20号
            iframe.google-map(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.7950378596533!2d139.7219626156352!3d35.55876384428529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601860f87f5da4e3%3A0x8a0493a2f4accfb0!2z5aSn55Sw5Yy655Sj5qWt44OX44Op44K2UGlP!5e0!3m2!1sja!2sjp!4v1566138857137!5m2!1sja!2sjp" width="100%" height="320" frameborder="0" style="border:0" allowfullscreen)
    section.workshop-content
        v-container.py-0
            hs(color="themeColor4") ワークショップの学習内容
            two-columns-layout(sm-reverse)
                template(#left)
                    p Circuit Playground Expressと呼ばれる小さなコンピュータを使ってPythonを学びます。
                        br
                        | PythonとCircuit Playground Expressを使ってNeo Pixel LEDを光らせたり、音を鳴らしたり、IR（赤外線）通信をしたりしてみましょう！！
                    h3 教材について
                    p Circuit Playground Expressの概要
                        v-icon(size="small" color="themeColor2").px-2 far fa-window-restore
                    p.text2--text ※Circuit Playground Expressはお持ち帰りできます。
                template(#right)
                    v-img(:src="require('@/assets/images/workshop.png')")
    section.target-member
        v-container.py-0
            hs(color="themeColor4") 参加対象・人数
            p 本ワークショップの対象は小学生から中学生くらいまでを想定しています。
                br
                | また、アルファベットの大文字小文字の違いがわかることが望ましいです。
            h3 募集人数
            p 20人（同伴の保護者を除く）
    section.about-pc
        v-container.py-0
            hs(color="themeColor4") パソコンについて
            p 当日のパソコンについてはお貸し出し致します。
            p OSはWindows 10の予定です。
    section.about-ticket
        v-container.py-0
            hs(color="themeColor4") チケットについて
            p 参加チケット（同伴あり）と参加チケット（同伴なし）の2種類があります。
            p 参加チケット（同伴なし）は、お子様1名が入場可能です。
                br
                | 参加チケット（同伴あり）は、お子様1名と保護者様1名が入場可能です。保護者様がPyCon JP 2019の本会議への参加チケットを持っている際は参加チケット（同伴なし）をご購入ください。
            p それぞれ人数分のお弁当を用意しております。
                br
                | なお、ワークショップ参加者の定員が20名ですので、募集チケット数は売れ行きによって随時調整します。
    section.supporters
        v-container.py-0
            hs(color="themeColor4") ワークショップ協力
            p 本ワークショップは以下の方々の協力にて実施します。（敬称略）
            ul.supporters__list
                li 田中 真輔（所属 CoderDojo 大船）
                li とがぞの（所属 CoderDojo 小平）
                li 増澤 智将（所属 CoderDojo 船橋）
                li 坂田 健一（所属 CoderDojo 南柏）
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
  data() {
    return {
      pageIndexes: [
        '子供向けワークショップの開催概要',
        'ワークショップの学習内容・教材について',
        '参加対象・人数',
        'パソコンについて',
        'チケットについて',
        'ワークショップ協力',
        'サポート：食事、託児所、遠方支援'
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
