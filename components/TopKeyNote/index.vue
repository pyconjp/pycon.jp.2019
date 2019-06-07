<template lang="pug">
  section#TopKeynote.uk-section.uk-section-default
    h2 {{ $t('top.keynote.text.head') }}
      span {{ $t('top.keynote.text.subcaption') }}
    article.keynote-speakers.uk-flex
      section#keynote-info-0917.uk-flex
        img.profile(src='~/assets/img/profiles/manuel-kaufmann.png' :alt="$t('top.keynote.foreigner.name')")
        div.detail
          h3 {{ $t('top.keynote.foreigner.name') }}
          p.date {{ $t('top.keynote.foreigner.date') }}
          p {{ $t('top.keynote.foreigner.about') }}
          h4 Session Theme
          p.theme {{ $t('top.keynote.foreigner.theme') }}

      section#keynote-info-0918.uk-flex
        img.profile(src='~/assets/img/profiles/ransui-iso.png' :alt="$t('top.keynote.japanese.name')")
        div.detail
          h3 {{ $t('top.keynote.japanese.name') }}
          p.date {{ $t('top.keynote.japanese.date') }}
          p {{ $t('top.keynote.japanese.about') }}
          h4 Session Theme
          p.theme {{ $t('top.keynote.japanese.theme') }}

    h2#invited-lecture {{ $t('top.invited-lecture.text.head') }}
      span {{ $t('top.invited-lecture.text.subcaption') }}
    p.coution {{ $t('top.invited-lecture.text.coution') }}
    article.invited-speakers.uk-flex
      section#invited-info-0917-2.uk-flex
        img.profile(src='~/assets/img/profiles/kotaro-nakayama.png' :alt="$t('top.invited-lecture.second.name')")
        div.detail
          h3 {{ $t('top.invited-lecture.second.name') }}
          p.date {{ $t('top.invited-lecture.second.date') }}
          p {{ $t('top.invited-lecture.second.about') }}
          h4 Session Theme
          p.theme {{ $t('top.invited-lecture.second.theme') }}
  

</template>


<script>
  export default {
    name: 'top-keynote'
  }
</script>

<style lang="sass">
section#TopKeynote
    h2
        margin-bottom: 4rem
        span
            @media (max-width: $breakpoint-xsmall-max)
                margin-top: .4rem
    h2#invited-lecture
      margin-top: 140px
      margin-bottom: .3rem
    p.coution
      font-size: 13px
      color: $pycon-global-color-red
      margin-top: 0
      margin-bottom: 4rem
      margin-left: .2rem
      @media (max-width: $breakpoint-xsmall-max)
        margin: 0 calc(20px + .2rem) 4rem

    article.keynote-speakers,article.invited-speakers
        @media (max-width: 900px)
            flex-wrap: wrap
            margin-bottom: 140px
        section[id^="keynote-info"],
        section[id^="invited-info"]
            position: relative
            z-index: 1
            min-width: calc(200px - 60px)
            width: 600px
            min-height: 280px
            background-color: #EEE
            padding: 4rem
            @media (max-width: 1200px)
              flex-wrap: wrap
              margin-bottom: 3rem
              flex-direction: column
            @media (max-width: $breakpoint-xsmall-max)
              width: 100%
              padding: 2rem
              margin: 3rem
              flex-wrap: wrap
              flex-direction: column
              justify-content: center

            &:before
                content: " "
                position: absolute
                background-color: #FFF
                width: 100%
                height: 100%
                left: 0
                top: 0
                z-index: -1
                display: block
                border-radius: 4px
                box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2)
            &:after
                content: " "
                position: absolute
                border-radius: 4px
                background-image: linear-gradient(135deg, rgba(40, 170, 226, 0.5), rgba(0, 223, 216, 0.5))
                transform: rotate(5deg)
                width: 100%
                height: 100%
                left: 0
                top: 0
                z-index: -2
                display: block

            &:first-child
                margin-right: 4rem
                margin-left: 20px
                @media (max-width: 900px)
                    margin: auto
                    margin-bottom: 4rem
                @media (max-width: $breakpoint-xsmall-max)
                    margin: 1rem
            &:last-child
                margin-right: 20px
                @media (max-width: 900px)
                    margin: auto
                @media (max-width: $breakpoint-xsmall-max)
                    margin: 1rem

            img.profile
                width: 160px
                height: 160px
                display: block
                z-index: 200
                margin-right: 2rem
                box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1)
                @media (max-width: 1200px)
                    margin-right: auto
                    margin-left: auto

            div.detail
                width: 270px
                z-index: 300
                color: #666666
                @media (max-width: 1200px)
                  width: 100%
                @media (max-width: $breakpoint-xsmall-max)
                    width: 100%
                h3
                    font-size: 36px
                    font-weight: 300
                    line-height: 2.4rem
                    margin-bottom: .2rem
                    @media (max-width: 1200px)
                      margin-top: 2.3rem
                    @media (max-width: $breakpoint-xsmall-max)
                      font-size: 24px
                      margin-bottom: 0
                p.date
                    color: #9B9B9B
                    margin: 0 0 0 .2rem
                p
                    font-size: 14px
                    line-height: 1.5rem
                    font-style: normal
                    font-stretch: normal
                    letter-spacing: normal
                    white-space: pre-line
                    word-wrap: normal
                    word-break: normal
                h4
                   margin: 0
                   font-size: 16px
                p.theme
                  margin: 0

        section#keynote-info-0918,
        section#invited-info-0917-2
            &:after
                border-radius: 4px
                background-image: linear-gradient(135deg,  rgba(255, 244, 63, 0.5), rgba(232, 214, 0, 0.5))

</style>

