<template lang="pug">
.sponsor
  .left-top
  .right-bottom
  .img.mx-4.py-5
    v-img(v-if="sponsor.logoIImage" :src="require(`~/assets/images/logos/${sponsor.logoIImage}`)" contain :aspect-ratio="imageAspectRatio")
    v-img(v-else :src="require('~/assets/images/horizontal_logo.png')" contain :aspect-ratio="imageAspectRatio")
  v-divider.mx-4
  .content.pa-4
    p.font-weight-bold(:class="titleSize") {{ name }}
    p.mt-4(v-if="pr") {{ pr }}
    .text-md-center(v-if="showRec")
      //- v-btn.font-weight-bold(v-if="sponsor.recruitUrl" outline round color="themeColor3" :href="sponsor.recruitUrl") {{ $t("basic.recruit") }}
      v-btn.font-weight-bold.px-5.py-2(outline round color="themeColor3" :href="url" target="_blank") 
        v-layout.align-center.subheading
          v-flex
            span.mr-2 {{ $t("basic.recruit") }}
          v-flex
            v-icon keyboard_arrow_right
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  props: {'sponsor': {}, 'image-aspect-ratio': {}, 'title-size': {}, 'showRec': { type: Boolean, default: false }},
  created() {
    console.log(this.sponsor)
  },
  computed: {
      ...mapState(['locale']),
      name() { return this.locale === "ja" ? this.sponsor.nameJa : this.sponsor.nameEn},
      pr() { return this.locale === "ja" ? this.sponsor.prJa : this.sponsor.prEn},
      url() { return this.locale === "ja" ? this.sponsor.urlJa : this.sponsor.urlEn},
      recruit() { return this.locale === "ja" ? this.sponsor.recruitJa : this.sponsor.recruitEn}
  }
}
</script>

<style lang="scss" scoped>
.sponsor {
  border: 1px solid lightgrey;
  position: relative;
  height: 100%;

  .left-top, .right-bottom {
    position: absolute;
    content: '';
    height: 2rem;
    width: 2rem;
  }

  .left-top {
    left: -2px;
    top: -2px;
    border-top: 3px solid #EBA4C3;
    border-left: 3px solid #EBA4C3;
  }

  .right-bottom {
    right: -2px;
    bottom: -2px;
    border-bottom: 3px solid #EBA4C3;
    border-right: 3px solid #EBA4C3;
  }
}
</style>
