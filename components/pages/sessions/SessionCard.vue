<template lang="pug">
SessionModalWindow(:session="session")
  v-layout.session-card
    v-flex.xs11.pr-1
      .session-card__head
        v-layout.my-1
          template(v-if="!isPoster")
            v-flex.shrink.mr-3
              span.day.font-weight-black {{ $t(`days.day${session.day}`) }}
            v-flex.shrink.mr-3
              span(v-if="session.day === '1'") 09.16({{ $t('weekday.mon') }})
              span(v-if="session.day === '2'") 09.17({{ $t('weekday.tue') }})
            v-flex.shrink.mr-3
              span {{ time }}
          v-flex.shrink.mr-3
            span.talk-format {{ session.talk_format_origin }}
        v-layout.my-1.session-card__head--property
          v-flex.shrink.mr-3
            span.room-tag.px-3 {{ $t(`rooms.${roomTag}`) }}
          template(v-if="!isPoster")
            v-flex.shrink.mr-3
              span.mr-2 {{ $t('sessions.level') }}:
              span.level-tag.px-3(:class="session.audience_level") {{ session.audience_level }}
          v-flex.shrink.mr-3
            span.mr-2 {{ $t('sessions.lang_of_talk') }}:
            span.lang-tag.px-3.font-weight-bold(:class="session.lang_of_talk") {{ session.lang_of_talk | langTag }}
          v-flex.shrink.mr-3
            span.mr-2 {{ $t('sessions.lang_of_slide') }}:
            span.lang-tag.mr-1.px-3.font-weight-bold(v-for="lang_of_slide in langOfSlideArray" :class="lang_of_slide") {{ lang_of_slide | langTag }}
      .session-card__content.my-2
        v-layout
          v-flex.my-1.title.font-weight-black.session-card__content--title {{ session.title }}
        v-layout
          v-flex.my-1.speaker {{ session.name }}
    v-flex.session-card__button
      v-btn.my-0(block flat) {{ $t('sessions.detail') }}
</template>

<script>
import SessionModalWindow from '@/components/parts/SessionModalWindow'
import { roomsMaster } from '@/plugins/constants'

export default {
  components: {
    SessionModalWindow
  },
  props: {
    session: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      time: '00:00 - 00:00',
      roomsMaster: roomsMaster
    }
  },
  computed: {
    roomTag() {
      return this.roomsMaster[this.session.room_id]
    },
    langOfSlideArray() {
      return this.session.lang_of_slide === 'jaen' ? ['ja', 'en'] : [this.session.lang_of_slide]
    },
    isPoster() {
      return this.session.talk_format_origin.match(/^Poster/)
    }
  },
  filters: {
    langTag: (lang) => {
      const languages = { 'en': 'EN', 'ja': 'JP' }
      return languages[lang]
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';
// level-tagの色は仮置き
$yellow: #f4b66e;
$green: hsl(143, 100%, 59%);

@mixin level-tag($color) {
  color: $color;
  border: 1px solid $color;
}

.session-card {
  &__head {
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
        @include level-tag($twitter);
      }
      &.Beginner {
        @include level-tag($green);
      }
      &.Intermediate {
        @include level-tag($yellow);
      }
      &.Advanced {
        @include level-tag($themeRed);
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
  }
  &__content {
    &--title {
      line-height: 1.3 !important;
    }
    .speaker {
      color: $text2;
    }
  }
  &__button {
    border-left: 1px solid $themeColor3Transparent;
    button {
      width: 100%;
      height: 100%;
      color: $themeColor3;
    }
  }
}
</style>
