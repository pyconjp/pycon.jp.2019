<template lang="pug">
#dev-sprints
    page-header(ja="開発スプリント" en="Development Sprints" color="themeColor1" enColor="white" jaColor="white" barColor="white" barOpacity="0.5")
    event-header(day14 day14Time="10:00 - 18:00" :image="require('@/assets/images/sprint.png')" applyLink="#" place="HENNGE")
    section.abstract
        v-container.pb-0
            p
                | 短期集中型のソフトウェア開発イベントです。開発テーマを提案する人と、そのテーマに興味を持った人が集まり交流する機会になります。
                br
                | どなたでも無料でご参加いただけます！ 開発スプリント参加にあたってPyCon JP 2019のチケットは必要ありません。
            .text-xs-center.text-sm-left
                button-with-arrow(color="themeColor1" outline :dark="true" :block="false"  href="#") テーマの一覧
    event-page-index(:indexes="pageIndexes")
    section.summary
        v-container.py-0
            hs 開発スプリントの開催概要
            .summary__schedule
                h3 日程
                schedule-table(day14 day14Time="10:00 - 18:00")
                    template(#day14-detail) ※夕食がつきます（HENNGE株式会社様よりご提供）
            .summary__place
                h3 会場
                p.font-weight-bold HENNGE株式会社
                p 〒150-0036　東京都渋谷区南平台町16番28号 グラスシティ渋谷5F
            iframe.google-map(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.9003448477!2d139.69285971563687!3d35.654826839026384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b544a110299%3A0xbb616fedef1dbf28!2z44CSMTUwLTAwMzYg5p2x5Lqs6YO95riL6LC35Yy65Y2X5bmz5Y-w55S677yR77yW4oiS77yS77yYIOOCsOODqeOCueOCt-ODhuOCpOa4i-iwtw!5e0!3m2!1sja!2sjp!4v1566201652103!5m2!1sja!2sjp" width="100%" height="320" frameborder="0" style="border:0" allowfullscreen)
    section.what-is-sprint
        v-container.py-0
            hs スプリントとは？
            p 多くのオープンソースソフトウェアの開発は、通常、ウェブ上でオンラインのコミュニケーションを通じて行われています。
                br
                | ほとんどの場合はこれで問題ないのですが、時には直接集まってオフラインで共同開発を行うことが、開発を大きく前に進めるために有効なことがあります。
            p この特定のプロジェクトに興味がある開発者同士がオフラインで集まって、短時間で素早く進捗を出す開発ミートアップを実現するために、スプリントやハッカソンと呼ばれる方法が生まれました（Pythonコミュニティ以外では、このようなミートアップはよくハッカソンと呼ばれています）。
            p そして、開発者が一同に集まるカンファレンスは、このスプリントを実現するのに最適な場であるため、カンファレンスの一部としてスプリントが開かれることがよくあります。
            p PyCon JP 2019では、スプリントを行うにあたって必要な環境（Wi-Fi, 電源、テーブル、椅子、そしてコーヒー）を用意いたします。
                br
                | スプリント参加者の皆さんには、ご自分のPC、スキル、そして開発への情熱を会場に持ってきていただければと思います！
    section.sprint-leader
        v-container.py-0
            hs スプリントリーダー
            p スプリントリーダーは、スプリントで扱うプロジェクトを決めて、スプリントの中で開発の案内や相談への対応をする人のことです。
            p リーダーは、開発を進めるプロジェクトのメンテナである必要はありません。
                br
                | リーダーは、自分が開発を進めたいと思う特定のプロジェクトを選んでいただき、スプリント内で達成したいゴールを設定いただくだけで構いません。
                br
                | 他のスプリント参加者が選んだプロジェクトに参加してみたい場合には、スプリントリーダーの皆さんには、まず参加者の皆さんへ選んだプロジェクトの紹介や開発の進め方の案内を行っていただき、開発中は適宜開発の手助けを行っていただければと思います。
            p このスプリントリーダーの仕組みは、完全に非公式なものなので、参加者の皆さんが実際に開発を行うプロジェクトはどのようなものでも構いません。
            h3 スプリントリーダーでの参加
            p スプリントリーダーとして参加したいという場合は、connpassページからの申込時にスプリントリーダーとして登録をお願いいたします。
                br
                | その際にフォームに回答してスプリントで取り組みたいテーマを提出してください。フォームへの回答は日本語または英語でお願いします。
                br
                | スプリント参加者が閲覧できるように、応募されたテーマを後ほど一覧にして公開します。
            p →応募されたテーマの一覧
                v-icon(color="themeColor2" size="small").px-1 far fa-window-restore
                | を公開しました。（8/10）
            p.text2--text ※今後、毎週土曜日に更新予定
                br
                | ※一覧の内容はリーダーの入力内容に基づきます
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
        '開発スプリントの開催概要',
        'スプリントとは？',
        'スプリントリーダー',
        'サポート：食事、託児所、遠方支援'
      ]
    }
  }
}
</script>
