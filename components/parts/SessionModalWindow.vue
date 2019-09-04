<template lang="pug">
  v-card.session-card.pa-4
    .corner-left-top
    .corner-right-bottom
    v-btn(small absolute icon style="top: 5px; right: 5px;" @click="$emit('close')")
      v-icon.text1--text clear
    .session-card__head.pa-0
      v-layout.wrap.justify-start.align-center
        template(v-if="!isPoster")
          v-flex.shrink.mr-3
            span.day.font-weight-black {{ $t(`days.day${session.day}`) }}
          v-flex.shrink.mr-3
            span(v-if="session.day === '1'") 09.16({{ $t('weekday.mon') }})
            span(v-if="session.day === '2'") 09.17({{ $t('weekday.tue') }})
          //- v-flex.shrink.mr-3
          //-   span {{ time }}
        v-flex.shrink.mr-3
          span.talk-format {{ $t('sessions.' + session.talk_format) }}

      v-layout.align-center.wrap.justify-start.session-card__head--property(:class="{'justify-center': $vuetify.breakpoint.smAndDown}")
        v-flex.pt-2.shrink.mr-3.my-1
          span.room-tag.px-3 {{ $t(`rooms.${roomTag}`) }}
        template(v-if="!isPoster")
          v-flex.pt-2.shrink.mr-3.my-1
            span.mr-2 {{ $t('sessions.level') }}:
            span.level-tag.px-3(:class="session.audience_level") {{ session.audience_level }}
        v-flex.pt-2.shrink.mr-3
          span.mr-2 {{ $t('sessions.lang_of_talk') }}:
          span.lang-tag.px-3.font-weight-bold.text-uppercase(
            :class="session.lang_of_talk === 'en' ? 'themeBlue' : 'themeRed'"
          ) {{ session.lang_of_talk  }}
        v-flex.pt-2.shrink.mr-3
          span.mr-2 {{ $t('sessions.lang_of_slide') }}:
          span.lang-tag.mr-1.px-3.font-weight-bold.text-uppercase(
            v-for="lang_of_slide in langOfSlideArray"
            :class="lang_of_slide === 'en' ? 'themeBlue' : 'themeRed'"
          ) {{ lang_of_slide }}

      v-layout.my-3.session-card__head--title
        h1.title.font-weight-bold {{ session.title }}
      v-layout.mb-4.session-card__head--abstract
        h2.body-2 {{ session.abstract }}
    .pb-3.session-card__content
      v-layout.my-3
        v-flex
          h3.subheading.font-weight-bold.session-card__content--head {{ $t('sessions.speaker') }}
      v-layout.my-2
        v-flex
          h4.body-2.font-weight-bold {{ session.name }}
      v-layout
        v-flex
          p {{ session.profile }}
      template(v-if="session.description !== ''")
        v-layout.my-3
          v-flex
            h3.subheading.font-weight-bold.session-card__content--head {{ $t('sessions.detail_of_session') }}
        v-layout.my-1
          v-flex
            p {{ session.description }}
    .session-card__foot(v-if="session.tags !== ''")
      v-layout.mt-3
        v-flex.shrink.mr-3
          p.font-weight-black keywords:
        v-flex.shrink.mr-3
          span.px-2.keyword-tag {{ session.tags }}
</template>

<script>
import { roomsMaster } from '@/plugins/constants'

export default {
  data() {
    return {
      time: '00:00 - 00:00',
      roomsMaster: roomsMaster
    }
  },
  props: {
    session: {
      type: Object,
      required: true
    },
  },
  computed: {
    roomTag() {
      return roomsMaster[this.session.room_id]
    },
    langOfSlideArray() {
      return this.session.lang_of_slide === 'jpen' ? ['jp', 'en'] : [this.session.lang_of_slide]
    },
    isPoster() {
      return this.session.talk_format_origin && this.session.talk_format_origin.match(/^Poster/)
    }
  },
  filters: {
    langTag: (lang) => {
      const languages = { 'en': 'EN', 'ja': 'JP' }
      return languages[lang]
    },
  },
}
</script>

<style lang="sass">
// .v-dialog__container
//   display: none !important
</style>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';
$yellow: #f4b66e;
$green: hsl(143, 100%, 59%);

@mixin level-tag($color) {
  color: $color;
  border: 1px solid $color;
}

.corner-left-top,
.corner-right-bottom {
  position: absolute;
  width: 30px;
  height: 30px;
}

.corner-left-top {
  top: -2px;
  left: -2px;
  border-left: solid 3px $themeColor2;
  border-top: solid 3px $themeColor2;
}

.corner-right-bottom {
  right: -2px;
  bottom: -2px;
  border-right: solid 3px $themeColor2;
  border-bottom: solid 3px $themeColor2;
}

.session-card {
  border: solid 1px $blueGrey2;
  position: relative;
  &__head {
    display: block;
    border-bottom: 1px solid $themeColor3Transparent;
    .day {
      color: $themeColor3;
    }
    .talk-format {
      color: $text2;
    }
    &--property {
      color: $text2;
    }
    .level-tag {
      &.All {
        @include level-tag(#76b3f2);
      }
      &.Beginner {
        @include level-tag(#6ab26a);
      }
      &.Intermediate {
        @include level-tag(#f0980c);
      }
      &.Advanced {
        @include level-tag(#ea4d6b);
      }
    }
    .room-tag {
      color: $themeBlack;
      background-color: $blueGrey1Lighten;
    }
    .lang-tag {
      color: #fff;
      &.ja {
        background-color: $themeRed;
      }
      &.en {
        background-color: $themeBlue;
      }
    }
    &--abstract {
      color: $text2;
    }
  }
  &__content {
    &--head {
      color: $themeColor3;
    }
  }
  &__foot {
    border-top: 1px solid $themeColor3Transparent;
    color: $text2;
    .keyword-tag {
      color: $themeColor3;
      background-color: $blueGrey2;
      border-radius: 2px;
    }
  }
}
</style>