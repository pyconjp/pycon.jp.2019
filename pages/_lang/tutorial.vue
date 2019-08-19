<template lang="pug">
#tutorial
    page-header(ja="チュートリアル" en="Tutorial" color="themeColor2" enColor="white" jaColor="white" barColor="white" barOpacity="0.5")
    event-header(day15 day15Time="13:00 - 19:00" :image="require('@/assets/images/tutorial.png')" applyLink="#" place="大田区産業プラザPiO")
    section.abstract
        v-container.py-0
            p Python初心者～中級者向けのイベントです。講師の方がわかりやすく丁寧に教えて下さいます。
                br
                | また講師の他にチューターがつくのでしっかりと身につけられるようになっていますので、是非この機会にチャレンジしてみて下さい！
            p.text2--text ※チュートリアル参加にあたってPyCon JP 2019カンファレンスのチケットは必要ありません。
    event-page-index(:indexes="pageIndexes")
    section.summary
        v-container.py-0
            hs(color="themeColor2") チュートリアルの開催概要
            .summary__schedule
                h3 日程
                schedule-table(day15 day15Time="13:00 - 19:00")
                    template(#day15-detail) ※おやつの提供があります
            .summary__place
                h3 会場
                p.font-weight-bold 大田区産業プラザ PiO
                p 〒144-0035　東京都大田区南蒲田一丁目20番20号
            iframe.google-map(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.7950378596533!2d139.7219626156352!3d35.55876384428529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601860f87f5da4e3%3A0x8a0493a2f4accfb0!2z5aSn55Sw5Yy655Sj5qWt44OX44Op44K2UGlP!5e0!3m2!1sja!2sjp!4v1566138857137!5m2!1sja!2sjp" width="100%" height="320" frameborder="0" style="border:0" allowfullscreen)
    section.course1
        v-container.py-0
            hs(color="themeColor2")
                span.text1.white--text.px-3.mr-3 Course1
                | DjangoによるWebアプリケーション開発入門
            h3 概要と設定するゴール
            p Pythonでできることの1つにWebアプリケーション開発があります。
                br
                | 本チュートリアルではフルスタックのWebアプリケーションフレームワークであるDjangoを使用して、Webアプリケーション作成について学びます。
            p 具体的には、Webアプリケーションの基礎、データベース入門を学びます。 次に、Djangoを使用して商品ページ、ショッピングカート、商品検索フォームといった機能を持った簡易ECサイトを作成します。
                br
                | このチュートリアルで学んだことを応用すると、ECサイトだけでなく様々な入出力を持ったWebアプリケーションを作れるようになります。
            h3 募集人数
            p 20人
            h3 参加者の前提
            ul.list
                li Pythonでプログラムを書ける人
                li HTML、CSSについてもある程度知っている人
                li PythonでWebアプリケーションを作成してみたい人
            h3 各種環境
                span.tail.font-weight-light (各自ご用意ください)
            p 以下がインストールされた無線LANに対応したノートPC
            ul.list
                li Python 3.7以上（Anacondaではなく、www.python.orgからダウンロードした公式バイナリーをインストール）
                    br
                    | https://www.python.org/downloads/release/python-374/
                li Webブラウザー（Chrome、Firefox推奨）
                li テキストエディター（PyCharm、VSCode推奨）
            h3 当日の進め方
            ul.list
                li Webアプリケーション入門
                    ul.list
                        li WebアプリケーションとHTTP
                        li Webアプリケーションの動作
                li データベース入門
                    ul.list
                        li データベース利用イメージ
                        li Sqlite3を使ったSQL入門
                li Djangoアプリケーション開発
                    ul.list
                        li Djangoとは
                        li Djangoのインストール
                        li ※以下略
            h3 提供
            p ビープラウド
    section.course2
        v-container.py-0
            hs(color="themeColor2")
                span.text1.white--text.px-3.mr-3 Course2
                | Lambda(Python)を使用したサーバレスのハンズオン
            h3 概要と設定するゴール
            ul.list
                li サーバーレスの基本構成について知る
                li Lambdaの利用に十分な基本的な構成を知る
                li AWSの基本的なツールセットを使って、サーバーレスなAPIの構成と作成手順を知る
            h3 募集人数
            p 60人
            h3 参加者の前提
            p ※以下略
    section.course3
        v-container.py-0
            hs(color="themeColor2")
                span.text1.white--text.px-3.mr-3 Course3
                | TensorFlow/RAPIDSを使用した機械学習ハンズオン
            p こちらのチュートリアルは前半と後半があります。前半と後半の「参加者の前提」を確認したうえで申し込み下さい。
                br
                | また、「各種環境（各自ご用意下さい）」もご確認下さい。
            h3.themeColor3--text 前半（13:00～16:00） 「RAPIDSを用いた機械学習のハンズオン」
            .event-detail.mb-4
                h3 概要と設定するゴール
                p データ分析において、一回の分析サイクルにかかる時間を短くすることは、実用上重要なポイントとなります。
                    br
                    |このチュートリアルでは、GPUで高速化されたオープンソースライブラリ群であるRAPIDSのcuDFとcuMLを取り上げ、データ処理から機械学習アルゴリズムの適用までを一連の流れとして体験していただきます。
                    br
                    |cuDFとcuMLはそれぞれ、Pandasとscikit-learnライクなAPIを提供するGPUライブラリであり、このチュートリアルを受講することで、データ処理および機械学習のワークフローをGPUで高速化することができるようになります。
                h3 募集人数
                p n人
                h3 参加者の前提
                p ※以下略
            h3.themeColor3--text 後半（16:30～18:30） 「TensorFlowを使用した機械学習のハンズオン」
            .event-detail
                h3 概要と設定するゴール
                p 未定   ※決まり次第更新します
                h3 募集人数
                p 20人（増枠の可能性あり）
                h3 参加者の前提
                p ※以下略
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
        'チュートリアルの開催概要',
        { tag: 'Course1', title: 'DjangoによるWebアプリケーション開発入門' },
        {
          tag: 'Course2',
          title: 'Lambda（Python）を使用したサーバレスのハンズオン'
        },
        {
          tag: 'Course3',
          title: 'TensorFlow/RAPIDSを使用した機械学習ハンズオン'
        },
        'サポート：食事、託児所、遠方支援'
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
