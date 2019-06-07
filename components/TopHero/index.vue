<template lang="pug">
  section#TopHero.uk-section.uk-section-default
    .image-layer_1
    .image-layer_2
    .image-layer_3
    .image-layer_4

    h2
      img(src='~/static/top/firstview-logo.png', alt='PyConJP 2018 ひろがるPython' width='506' height='100')
    dl#event-summary.uk-list.uk-flex.uk-flex-wrap
        span.sprint
            dt
                |{{ $t('top.hero.sprint.eventname') }}
            dd
                |{{ $t('top.hero.sprint.date.ymd') }}
                span.week.sat {{ $t('top.hero.sprint.date.week') }}
        span.tutorial
            dt
                |{{ $t('top.hero.tutorial.eventname') }}
            dd
                |{{ $t('top.hero.tutorial.date.ymd') }}
                span.week.sun {{ $t('top.hero.tutorial.date.week') }}
        span.conference
            dt
                |{{ $t('top.hero.conference.eventname') }}
            dd
                |{{ $t('top.hero.conference.date-day1.ymd') }}
                span.week.mon {{ $t('top.hero.conference.date-day1.week') }}
                | , {{ $t('top.hero.conference.date-day2.ymd') }}
                span.week {{ $t('top.hero.conference.date-day2.week') }}

    div#ticket-link.uk-button.uk-button-default.uk-button-larg.uk-inline
        a(href='https://pyconjp.connpass.com/event/89163/' target='_blank') {{ $t('top.hero.application.ticket') }}
        div.button-bg
        div.button-shadow

    //ul.other-application-link.uk-flex.uk-flex-left
        li
            a(href='https://docs.google.com/forms/d/e/1FAIpQLSdtYlETMPrz_LK-kSDsnJjMPcIkl1OKpRqfnse6d2mPr3MPaw/viewform' target='_blank')
              | {{ $t('top.hero.application.staff') }}

    span.twitter(uk-icon='twitter')
    a(href='https://twitter.com/search?f=tweets&q=%23pyconjp' target='_blank')
        |#pyconjp

</template>


<script>
  export default {
    name: 'top-hero'
  }
</script>

<style lang="sass">
section#TopHero
  position: relative
  min-height: 780px
  padding-left: 40px
  z-index: 1
  margin-bottom: 2rem
  @media (max-width: $breakpoint-xsmall-max)
    min-height: 700px
    padding-left: 30px
    padding-top: 0

  h2
      margin-top: 9rem
      margin-bottom: 2rem
      @media (max-width: $breakpoint-xsmall-max)
          display: none

  dl#event-summary
      margin-bottom: 6.5rem
      @media (max-width: $breakpoint-xsmall-max)
          margin-bottom: 3rem
          margin-top: 1rem
      span
          margin-left: 2rem
          @media (max-width: $breakpoint-xsmall-max)
              margin-left: 0
          dt,dd
              color: #9b9b9b
          dt
              font-size: 16px
              font-weight: normal
          dd
              font-size: 24px
              font-weight: 300
              span.week
                  margin: 0 .5rem 0 .2rem
                  font-size: 14px
                  font-weight: normal
              span.sat
                  color: #0041c2
              span.sun,span.mon
                  color: #a40014
      span.conference
          @media (max-width: $breakpoint-xsmall-max)
              width: 100%
      span.sprint
          @media (max-width: $breakpoint-xsmall-max)
              margin-bottom: 1rem
      span
        &:nth-child(2)
          @media (max-width: $breakpoint-xsmall-max)
              margin-left: 1rem

  div#ticket-link
      position: relative
      color: #fff
      font-size: 16px
      font-weight: 300
      padding-top: .2rem
      padding-bottom: .2rem
      z-index: 999
      border: none
      a
        color: white
      .button-bg
          background-image: linear-gradient(135deg, #28aae2, #00dfd8)
          position: absolute
          left: 0
          top: 0
          height: 100%
          width: 100%
          z-index: -1
      .button-shadow
          position: absolute
          background-image: linear-gradient(45deg, #fff43f, #e8d600)
          left: 2px
          top: 2px
          height: 100%
          width: 100%
          z-index: -2

  div#ticket-link.disable
      .button-bg
          background-image: linear-gradient(52deg, rgba(180, 180, 180, 0.3), rgba(200, 200, 200, 0.3))
      .button-shadow
          background-image: linear-gradient(52deg,  rgba(100, 100, 100, 0.2), rgba(120, 120, 120, 0.2))

  p#ticket-notice
    display: none

  p#ticket-notice.coming-soon
    display: block
    color: #a40014
    font-size: 12px
    margin-top: .2rem
    margin-bottom: .5rem

  ul
      list-style-type: none
      padding-left: 0
      margin-top: .8rem
      li
          margin-right: .5rem
          font-size: 14px

  span.twitter
    margin-top: 1.5rem
    display: block


  .image-layer_1
      position: absolute
      z-index: 10
      right: 0
      bottom: 0
      width: 100px
      height: 100px
      mix-blend-mode: multiply
      background-image: linear-gradient(52deg, rgba(40, 170, 226, 0.5), rgba(0, 223, 216, 0.5))
      transform: translate(-30em , -17em) scale(1.9) rotate(7deg)
      @media (max-width: $breakpoint-xsmall-max)
          transform: translate(-14.5em , -9em) scale(.8) rotate(7deg)

  .image-layer_2
      position: absolute
      right: 0
      bottom: 0
      float: right
      z-index: 11
      width: 100px
      height: 100px
      mix-blend-mode: multiply
      background-image: linear-gradient(52deg,  rgba(255, 244, 63, 0.5), rgba(232, 214, 0, 0.5))
      transform: translate(-19em , -22em) scale(2.5) rotate(7deg)
      @media (max-width: $breakpoint-xsmall-max)
          transform: translate(-9.8em , -11.2em) scale(1.1) rotate(7deg)


  .image-layer_3
      position: absolute
      z-index: 13
      right: 0
      bottom: 0
      width: 100px
      height: 100px
      mix-blend-mode: multiply
      background-image: linear-gradient(52deg, rgba(40, 170, 226, 0.5), rgba(0, 223, 216, 0.5))
      transform: translate(-8.2em , -13em) scale(2.5) rotate(7deg)
      @media (max-width: $breakpoint-xsmall-max)
          transform: translate(-5.2em , -7em) scale(1.12) rotate(7deg)


  .image-layer_4
      position: absolute
      right: 0
      bottom: 0
      float: right
      z-index: 14
      width: 100px
      height: 100px
      mix-blend-mode: multiply
      background-image: linear-gradient(52deg,  rgba(255, 244, 63, 0.5), rgba(232, 214, 0, 0.5))
      transform: translate(9.9em , -28em) scale(4.2) rotate(7deg)
      @media (max-width: $breakpoint-xsmall-max)
          transform: translate(2.3em , -14.4em) scale(1.7) rotate(7deg)

</style>
