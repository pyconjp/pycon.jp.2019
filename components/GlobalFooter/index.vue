<template lang="pug">
    footer#global-footer.uk-section.uk-section-default.uk-container.uk-flex(class="uk-flex-center@s uk-flex-left@l")
        div#pyconjp-blog-link
            a.uk-thumbnail.uk-thumbnail-mini(href='http://www.pycon.jp/')
                img(src='~/static/footer/pyconjp-logo.png',alt='PyCon JP Committee' target='_blank')

        address
            p {{ $t('footer.host') }}
            p#contact-mail-address PyCon JP 2018 in Tokyo is a production of the
                a(href='http://www.pycon.jp/', target='blank') PyCon JP Committee
                |. Contact :
                a(href='mailto:pyconjp@pycon.jp') pyconjp@pycon.jp

            div#footer-creative-commons.uk-flex.uk-flex-middle
                p
                    a(href='https://creativecommons.org/licenses/by/4.0/' target='_blank')
                        img(src='~/static/footer/88x31.png', alt='クリエイティブ・コモンズ・ライセンス' width='88')
                p
                    |{{ $t('footer.creativeCommons.text') }}
                    a(href='https://creativecommons.org/licenses/by/4.0/' target='_blank') {{ $t('footer.creativeCommons.license') }}
                    |{{ $t('footer.creativeCommons.text-end') }}

        ul#sns-link.uk-flex
            li
                a(href='https://twitter.com/pyconj' target='_blank')
                img(src='~/static/footer/icon-twitter.png', alt='twitter' width='32' height='32')
            li
                a(href='https://www.facebook.com/PyConJP')
                    img(src='~/static/footer/icon-facebook.png', alt='facebook' width='32' height='32')
            li
                a(href='http://pyconjp-fellow.herokuapp.com/', title='Join PyCon JP Fellow on Slack!' target='_blank')
                    img(src='~/static/footer/icon-slack.png' alt='slack' width='32' height='32')
</template>


<script>
    export default {
        name: 'global-footer'
    }
</script>

<style lang="sass">
footer#global-footer
  background-color: #f6f6f6
  font-size: 14px
  padding-top: 5rem
  padding-bottom: 6rem
  @media (max-width: $breakpoint-xsmall-max)
    flex-wrap: wrap
    padding: 10% 30px
    font-size: 12px

  #pyconjp-blog-link
    display: block
    width: 200px
    min-width: 200px
    margin-left: 1rem
    margin-right: 6.5%
    @media (max-width: $breakpoint-xsmall-max)
      margin-bottom: 1rem

  address
    width: 65%
    margin-top: 0
    margin-left: 0
    margin-right: .5rem
    line-height: 1rem
    color: #9b9b9b
    @media (max-width: $breakpoint-xsmall-max)
      width: 100%
    p
      margin-top: 0
      margin-bottom: .8rem

    #footer-creative-commons
      margin-top: 2rem
      @media (max-width: $breakpoint-xsmall-max)
        flex-wrap: wrap
      p
        margin-right: 1rem
        width: calc(100% - 88px)
        @media (max-width: $breakpoint-xsmall-max)
          width: 100%
        &:first-child
          width: 88px

  ul#sns-link
    margin: 0
    margin-top: 2rem
    padding: 0
    width: 126px
    list-style-type: none
    @media (max-width: $breakpoint-xsmall-max)
      width: 100%
    li
      margin-right: 10px
      width: 32px
      &:last-child
        margin: 0

</style>

