<template lang="pug">
section.my-5.support.blueGrey2
    v-container
        hs Support
        v-layout(justify-space-between fill-height :wrap="$vuetify.breakpoint.smAndDown")
            v-flex(xs12 md4 :class="{'mr-3': $vuetify.breakpoint.mdAndUp, 'mb-2': $vuetify.breakpoint.smAndDown}")
                v-card.flex-card(height="100%")
                    v-img(max-height="20vh" :src="require('@/assets/images/eating.png')")
                    .card-content
                        h3 食事
                        p.themeColor3--text.font-weight-bold 1日目
                        p 朝食（限定数）、ランチ、おやつ、夕食（アフターパーティー）
                        p.themeColor3--text.font-weight-bold 2日目
                        p 朝食（限定数）、ランチ、おやつ
            v-flex(xs12 md4 :class="{'mx-3': $vuetify.breakpoint.mdAndUp, 'my-2': $vuetify.breakpoint.smAndDown}")
                v-card.flex-card(height="100%")
                    v-img(max-height="20vh" :src="require('@/assets/images/nursery.png')")
                    .card-content
                        h3 託児所
                        p 各日程とも会場内に託児所を開設します。ご利用には事前に申し込みが必要です。
                        v-spacer
                        button-with-arrow(color="themeColor1" outline :dark="true" :block="false"  href="#") 申し込みへ
            v-flex(xs12 md4 :class="{'ml-3': $vuetify.breakpoint.mdAndUp, 'mt-2': $vuetify.breakpoint.smAndDown}")
                v-card.flex-card(height="100%")
                    v-img(max-height="20vh" :src="require('@/assets/images/support-local.png')")
                    .card-content
                        h3 遠方支援
                        p 主に遠方者を対象に、交通費の全額または一部をPyCon JPが負担する制度です。
                        v-spacer
                        button-with-arrow(color="themeColor1" outline :dark="true" :block="false"  href="#") 申し込みへ
</template>

<script>
import SectionHeader from '@/components/parts/SectionHeader'
import ButtonWithArrow from '@/components/parts/ButtonWithArrow'

export default {
  components: {
    ButtonWithArrow,
    hs: SectionHeader
  }
}
</script>

<style lang="scss" scoped>
.flex-card {
  display: flex;
  flex-direction: column;

  .v-image.v-responsive {
    flex: initial;
  }

  .card-content {
    flex: 1;
    padding: 16px;
    display: flex;
    flex-direction: column;

    .spacer {
      flex: 1;
    }
  }
}
</style>
