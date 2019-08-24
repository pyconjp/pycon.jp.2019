<template lang="pug">
.section-header
    h2.section-header__main
        .section-header__bar(:class="color")
        slot
        .section-header__tail(v-if="tail") - {{ tail }}
    p.section-header__sub.blueGrey1--text.font-weight-bold {{ sub }}
</template>

<script>
export default {
  props: {
    sub: {
      type: String
    },
    tail: {
      type: String
    },
    color: {
      type: String,
      default: 'themeColor3'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';
@import '@/assets/style/custom.sass';

.section-header {
  &__main {
    @extend .heading-font;

    font-size: 28px;
    vertical-align: middle;
    margin: 24px 0 0;
    margin-left: -60px;
  }

  &__bar {
    vertical-align: middle;
    content: '';
    display: inline-block;
    height: 4px;
    width: 40px;
    margin-right: 20px;
  }

  &__tail {
    display: inline-block;
    font-weight: lighter;
    font-size: 28px;
    padding-left: 0.5em;
  }
}
</style>
