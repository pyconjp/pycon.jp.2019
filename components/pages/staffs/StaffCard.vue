<template lang="pug">
v-card(flat tile).staff-card.my-2.mx-3.px-4.pt-3.pb-5
  v-layout.justify-space-between
    v-flex.subheading.font-weight-bold {{ name }}
    v-flex.shrink
      v-layout
        v-flex(v-if="staff.twitter")
          a(:href="'https://twitter.com/' + staff.twitter" target="_blank")
            v-icon(color="twitter").subheading fab fa-twitter
        v-flex.ml-2(v-if="staff.facebook")
          a(:href="'https://facebook.com/' + staff.facebook" target="_blank")
            v-icon(color="facebook").subheading fab fa-facebook
  v-layout.mt-2
    v-flex
      span.staff-card--title {{ title }}
</template>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';

.staff-card {
  border: 1px solid #e9ebf0;
  &--title {
    color: $text2;
  }
}
</style>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    staff: {
      type: Object,
      require: true
    },
  },
  computed: {
    ...mapState(['locale']),
    isJapanese() {
      return this.locale === 'ja';
    },
    name() {
      if (!this.isJapanese && this.staff.name_en) {
        return this.staff.name_en;
      }
      return this.staff.name;
    },
    title() {
      if (!this.isJapanese && this.staff.title_en) {
        return this.staff.title_en;
      }
      return this.staff.title;
    },
  }
}
</script>