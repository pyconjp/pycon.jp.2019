<template lang="pug">
#code-of-conduct
  page-header(ja="行動規範" en="Code Of Conduct")
  section.main.my-5.mx-auto
    corner-decorated-card
      v-card-title
        p PyConは、Pythonユーザが集まり、PythonやPythonを使ったソフトウェアについて情報交換、交流をするためのカンファレンスです。 PyConJPの開催を通じて、Pythonの使い手が一堂に集まり、Pythonにまつわる様々な分野の知識や情報を交換し、新たな友達やコミュニティとのつながり、仕事やビジネスチャンスを増やせる場所とすることが目標です。
        p ハラスメント行為には、言葉による性別、性的指向、障碍の有無、外見、身体の大きさ、人種、宗教に関する攻撃的なコメント、公的空間での性的な映像表現、意図的な威力行為、ストーキング、つきまとい、写真撮影や録音によるいやがらせ、トークやその他の会議イベントに対して繰り返して中断しようとする行為、不適切な身体接触、そして望まれない性的な注意を引きつける行為を含みます。
        p 参加者は、これらのハラスメント行為を止めるように求められた場合、すぐに従わなければなりません。
        p スポンサーもまた反ハラスメント行為ポリシーに従わなければなりません。特に、スポンサーは性的な関心を引き起こす映像表現、活動、あるいはその他の物品を使うべきではありません。ボランティアを含め、ブースのスタッフは、性的な関心を引き起こすような服装/制服/コスチュームを使うべきではありませんし、その他の手段で性的な関心を引き起こすような環境を作ることもすべきではありません。
        p もしあなたがハラスメントに遭った場合、他の人がハラスメントに遭っている場合、あるいは他に気になることがあった時は、すぐに会議スタッフの誰かに連絡していただくようお願いします。会議スタッフは会議のブランドを付けたTシャツを着ています。
        p 会議スタッフは、ハラスメントを経験した人が、会議期間中安全かつ安心と感じられるように、参加者がホテル/会場の警備や近隣の警察に連絡すること、付き添い者の提供、およびその他の支援を行います。私達にとってあなたが参加しているのは大事なことなのです。
        p 私達は参加者が会議場とワークショップ会場、また会議に関連したソーシャルイベントにて、このルールに従うことを望みます。
    .mt-3.mx-auto.button
        button-with-arrow(color="themeColor1" outline href="/") 開催概要
</template>

<script>
import PageHeader from '@/components/partials/PageHeader'
import CornerDecoratedCard from '@/components/parts/CornerDecoratedCard'
import ButtonWithArrow from '@/components/parts/ButtonWithArrow'

export default {
  components: {
    PageHeader,
    CornerDecoratedCard,
    ButtonWithArrow
  }
}
</script>

<style lang="scss" scoped>
.main {
  max-width: 798px;
  margin: auto;
}
.button {
  width: 200px;
}
</style>