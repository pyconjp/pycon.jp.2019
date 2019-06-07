
<template lang="pug">
  section#TopNews.uk-section.uk-section-default.uk-flex.uk-flex-left
    h2 {{ $t('top.news.head') }}
      span {{ $t('top.news.subcaption') }}
    div.news-list.uk-flex.uk-flex-right.uk-flex-wrap
        ul.uk-list.uk-list-large
            li(v-for="item in blog_data")
                .uk-text-lead.uk-flex.uk-flex-middle
                  p {{item.title}}
                  p.news-link
                      a(:href='item.link' target="_blank")  {{ $t('top.news.detail') }}
        a.uk-button.uk-button-default(href="http://pyconjp.blogspot.jp/" target="_blank") {{ $t('top.news.more') }}

</template>

<script>
  import moment from "moment"

  export default {
    name: 'top-news',
    props: ['blog_data'],
    methods: {
      getDate(pubDate){
        return moment(pubDate, "dddd, DD MMM YYYY").format("YYYY/MM/DD(ddd)")
      }
    }
  }
</script>

<style lang="sass">
#TopNews
    flex-wrap: wrap
    h2
        width: 30%
    .news-list
        width: 70%
        @media (max-width: $breakpoint-xsmall-max)
            width: 100%
            padding: 0 30px

        a.uk-button
            color: #9b9b9b
            @media (max-width: $breakpoint-xsmall-max)
                width: 100%

        ul
            width: 100%
            li
                border-bottom: solid 1px #dddddd
                margin: 0
                &:first-child
                    div
                        @media (max-width: $breakpoint-xsmall-max)
                            margin-top: 0
                div
                    margin: 2rem auto
                    flex-wrap: wrap
                    @media (max-width: $breakpoint-xsmall-max)
                        margin-bottom: 0
                    p
                      margin: 0
                      color: #9b9b9b
                      width: 90%
                      font-size: 18px
                      @media (max-width: $breakpoint-xsmall-max)
                          width: 100%
                          font-size: 14px
                          margin-bottom: .5rem
                    p.news-link
                        width: 10%
                        text-align: right
                        padding-right: .4rem
                        @media (max-width: $breakpoint-xsmall-max)
                            width: 100%
                        a
                            font-size: 14px

</style>

