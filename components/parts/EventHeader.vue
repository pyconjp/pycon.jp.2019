<template lang="pug">
.content-page-header__wrapper
    v-container.content-page-header
        .content-page-header__left
            .schedule
                template(v-if="day14")
                    span.date.display-2.heading-font 09.14
                    span.day.themeBlue--text {{ $t('weekday.sat') }}
                template(v-if="day14 && day14Time")
                    span.time.heading-font {{ day14Time }}
                template(v-if="day15")
                    span.date.display-2.heading-font 09.15
                    span.day.themeRed--text {{ $t('weekday.sun') }}
                template(v-if="day15 && day15Time")
                    span.time.heading-font {{ day15Time }}
                template(v-if="day16")
                    span.date.display-2.heading-font 09.16
                    span.day.themeRed--text {{ $t('weekday.mon') }}
                template(v-if="day16 && day16Time")
                    span.time.heading-font {{ day16Time }}
                span.d2d.display-2(v-if="day16 && day17") -
                template(v-if="day17")
                    span.date.display-2.heading-font 09.17
                    span.day {{ $t('weekday.tue') }}
                template(v-if="day17 && day17Time")
                    span.time.heading-font {{ day17Time }}
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
    day14: {
      type: Boolean,
      default: false
    },
    day15: {
      type: Boolean,
      default: false
    },
    day16: {
      type: Boolean,
      default: false
    },
    day17: {
      type: Boolean,
      default: false
    },
    day14Time: {
      type: String
    },
    day16Time: {
      type: String
    },
    day17Time: {
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
    margin-right: 24px;

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
