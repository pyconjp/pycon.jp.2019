<template lang="pug">
#code-of-conduct
  page-header(ja="行動規範" en="Code Of Conduct")
  section.main.my-5.mx-auto
    v-container
      corner-decorated-card
        v-card-title.body-2(v-html="$t('code-of-conduct.main')")
      //- .mt-3.mx-auto.button
      //-     button-with-arrow(color="themeColor1" outline href="/") 開催概要
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