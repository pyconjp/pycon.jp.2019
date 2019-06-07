<template lang="pug">
  section#TopPlace.uk-section.uk-section-default
        h2 {{ $t('top.map.place') }}
          span {{ $t('top.map.subcaption') }}

        .place-info.uk-flex.uk-flex-center
            div.place-map
                iframe(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.795214585155!2d139.72196261525542!3d35.55875948022301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601860f87f5da4e3%3A0x8a0493a2f4accfb0!2z5aSn55Sw5Yy655Sj5qWt44OX44Op44K2UGlP!5e0!3m2!1sja!2sjp!4v1526709797296" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen)

            div(class="place-address uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-flex-first@s")
                div
                    h3.conference {{ $t('top.map.conference.text.head') }}
                    dl
                      dt {{ $t('top.map.conference.venue') }}
                      dd {{ $t('top.map.conference.address.post-code') }}
                          br
                          | {{ $t('top.map.conference.address.primary') }}
                          br
                          span {{ $t('top.map.conference.access') }}


        .place-info.uk-flex.uk-flex-center
            div(class="place-map uk-flex-first@s")
                iframe(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.897051278214!2d139.69265221513768!3d35.65490798020043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b544a40ff61%3A0x1428736268ae2d31!2z44ixSERF!5e0!3m2!1sja!2sjp!4v1526710639471" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen)

            div.place-address.uk-flex.uk-flex-column.uk-flex-center.uk-flex-middle
                 div.right
                     h3.sprint {{ $t('top.map.sprint.text.head') }}
                     dl
                       dt {{ $t('top.map.sprint.venue') }}
                       dd {{ $t('top.map.sprint.address.post-code') }}
                          br
                          | {{ $t('top.map.sprint.address.primary') }}
                          br
                          | {{ $t('top.map.sprint.address.sub') }}
                          br
                          span {{ $t('top.map.sprint.access') }}

</template>

<script>
  export default {
    name: 'top-place'
  }
</script>

<style lang="sass">
#TopPlace
    margin-bottom: 140px
    h2
        margin-bottom: 4rem

    h2 + .place-info
          margin-bottom: 4rem

    .place-info
        @media (max-width: $breakpoint-xsmall-max)
            flex-wrap: wrap

        .place-map
            width: 60%
            max-width: 820px
            min-height: 410px
            @media (max-width: $breakpoint-xsmall-max)
              width: 100%
              min-height: 180px
              margin-bottom: 2rem

        .place-address
            width: 40%
            @media (max-width: $breakpoint-xsmall-max)
              width: 100%
            div
                width: 80%
                @media (max-width: $breakpoint-xsmall-max)
                    width: calc(100% - 60px)
                h3
                  font-size: 18px
                  margin-bottom: 0
                  @media (max-width: $breakpoint-xsmall-max)
                      font-size: 14px
                h3.conference
                  color: #11bec2
                h3.sprint
                  color: #c8ba09

                dl
                    margin: 0
                    dt
                        margin-bottom: 2rem
                        color: #000000
                        font-size: 36px
                        font-weight: normal
                        @media (max-width: $breakpoint-xsmall-max)
                            font-size: 24px
                            margin-bottom: 1rem
                    dd
                        color: #9b9b9b
                        line-height: 1.6rem
                        span
                          display: block
                          margin-top: 2.5rem
                          @media (max-width: $breakpoint-xsmall-max)
                              margin-top: 1.5rem

</style>

