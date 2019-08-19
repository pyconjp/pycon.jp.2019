<template lang="pug">
.content-page-header__wrapper
    v-container.content-page-header
        .content-page-header__left
            .schedule
                template(v-if="day1")
                    span.date.display-2.heading-font 09.16
                    span.day.themeRed--text 月・祝
                template(v-if="day1 && day1Time")
                    span.time.heading-font {{ day1Time }}
                span.d2d.display-2(v-if="day1 && day2") -
                template(v-if="day2")
                    span.date.display-2.heading-font 09.17
                    span.day 火
                template(v-if="day2 && day2Time")
                    span.time.heading-font {{ day2Time }}
            .place
                v-icon place
                span {{ place }}
            .apply-button.text-xs-center.text-sm-left(v-if="applyLink")
                button-with-arrow(color="applyLighten" :dark="true" :block="false"  :href="applyLink") {{ $t("basic.apply") }}
        .content-page-header__right
            .content-page-header__image
                v-img.v-img(:src="image" height="100%")
</template>

<script>
import ButtonWithArrow from '@/components/parts/ButtonWithArrow'

export default {
  components: {
    ButtonWithArrow
  },
  props: {
    day1: {
      type: Boolean,
      default: false
    },
    day2: {
      type: Boolean,
      default: false
    },
    day1Time: {
      type: String
    },
    day2Time: {
      type: String
    },
    place: {
      type: String
    },
    applyLink: {
      type: String
    },
    image: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';
@import '@/assets/style/custom.sass';

.content-page-header {
  padding-top: 0;
  padding-bottom: 0;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media #{$display-breakpoint-xs-only} {
    flex-direction: column-reverse;
  }

  &__wrapper {
    border-bottom: 1px solid $blueGrey2;
  }

  &__left {
    flex: 1;
    margin-left: auto;

    @media #{$display-breakpoint-xs-only} {
      margin: auto;
      margin-bottom: 12px;
    }
  }

  &__right {
    flex: 2;
    position: relative;
    min-height: 250px;
    overflow: visible;
    align-self: stretch;

    @media #{$display-breakpoint-xs-only} {
      min-height: 100px;
    }
  }

  &__image {
    width: 70vw;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;

    @media #{$display-breakpoint-xs-only} {
      margin-bottom: 12px;
      width: 100vw;
      left: -16px;
    }
  }

  .schedule {
    margin: 12px auto;

    .date {
      margin-right: 0.125em;
    }

    .day {
      font-size: 16px;
    }

    .time {
      font-size: 20px;
      margin-left: 1em;
    }

    .d2d {
      margin: auto 16px;
    }
  }

  .place {
    margin: 12px auto;
  }
}
</style>
