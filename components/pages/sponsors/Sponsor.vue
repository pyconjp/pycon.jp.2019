<template lang="pug">
.sponsor
  .left-top
  .right-bottom
  .img.mx-4.py-5
    v-img(v-if="sponsor.logoImage" :src="require(`~/assets/images/logos/${sponsor.logoImage}`)" contain :aspect-ratio="imageAspectRatio")
    v-img(v-else :src="require('~/assets/images/noImage.png')" contain :aspect-ratio="imageAspectRatio")
  v-divider.mx-4
  .content.pa-4
    a.sponsor-name(v-if="sponsorUrl" :href="sponsorUrl" target="_blank")
      span.font-weight-bold(:class="titleSize") {{ name }}
      v-icon.ml-2(:small="titleSize == 'title'" :style="titleSize == 'title' ? 'line-height: 20px;' : ''") far fa-window-restore
      //- TODO: ikedaosushi カスタムiconを使う
      //- svg-icon(icon='symbol_blankWindow')
    p.font-weight-bold(v-else :class="titleSize") {{ name }}
    p.mt-4(v-if="pr") {{ text }}
    .text-md-center(v-if="showButton")
      button-with-arrow(@click="isPr = !isPr" :right="isPr" :block="false" :outline="true" color="themeColor3" size="normal") {{ buttonText }}
</template>

<style lang="sass">
a.sponsor-name, a.sponsor-name i
  color: #444444 !important
  transition-duration: 0s !important
  &:hover, &:hover i
    color: #5970A5 !important
</style>


<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import ButtonWithArrow from "@/components/parts/ButtonWithArrow"
import SvgIcon from "@/components/icons/SvgIcon"

export default {
  props: {'sponsor': {}, 'image-aspect-ratio': {}, 'title-size': {}, 'showRec': { type: Boolean, default: false }},
  components: {
    "button-with-arrow": ButtonWithArrow,
    "svg-icon": SvgIcon
  },
  data() {
    return {
      isPr: true
    }
  },
  computed: {
      ...mapState(['locale']),
      name() { return this.locale === "ja" ? this.sponsor.nameJa : this.sponsor.nameEn},
      pr() { return this.locale === "ja" ? this.sponsor.prJa : this.sponsor.prEn},
      sponsorUrl() { return this.locale === "ja" ? this.sponsor.urlJa : this.sponsor.urlEn},
      recruit() { return this.locale === "ja" ? this.sponsor.recruitJa : this.sponsor.recruitEn},
      text() {
        return this.isPr ? this.pr : this.recruit
      },
      buttonText() {
        return this.isPr ? this.$t("basic.recruit") : this.$t("basic.company-desc")
      },
      showButton() {
        return this.showRec && this.pr && this.recruit 
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
