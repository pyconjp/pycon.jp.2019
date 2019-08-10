<template lang="pug">
.sponsor
  .left-top
  .right-bottom
  .img.mx-4.py-5
    v-img(v-if="sponsor.logoIImage" :src="require(`~/assets/images/logos/${sponsor.logoIImage}`)" contain :aspect-ratio="imageAspectRatio")
    v-img(v-else :src="require('~/assets/images/horizontal_logo.png')" contain :aspect-ratio="imageAspectRatio")
  v-divider.mx-4
  .content.pa-4
    p.font-weight-bold(:class="titleSize") {{ sponsor.name }}
    //- p.mt-4(v-if="sponsor.description") {{ sponsor.description }}
    p.mt-4 {{ dummyText }}
    .text-md-center(v-if="showRec")
      //- v-btn.font-weight-bold(v-if="sponsor.recruitUrl" outline round color="themeColor3" :href="sponsor.recruitUrl") {{ $t("basic.recruit") }}
      v-btn.font-weight-bold.px-5.py-2(outline round color="themeColor3" href="https://example.com/" target="_blank") 
        v-layout.align-center.subheading
          v-flex
            span.mr-2 {{ $t("basic.recruit") }}
          v-flex
            v-icon keyboard_arrow_right
</template>

<script>
const dummyText = "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。";

export default {
  props: {'sponsor': {}, 'image-aspect-ratio': {}, 'title-size': {}, 'showRec': { type: Boolean, default: false }},
  data() {
    return {
      dummyText
    }
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
