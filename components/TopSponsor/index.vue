<template lang="pug">
  section#TopSponsor.uk-section.uk-section-default.uk-container
    h2 {{ $t('top.sponsor.head') }}
        span {{ $t('top.sponsor.subcaption') }}

    ul(uk-margin class="uk-flex uk-flex-wrap uk-flex-center uk-flex-left@s")
        li(v-for="sponsor in top_sponsor_array").uk-flex.uk-flex-center.uk-flex-middle.uk-flex-column
            a(v-if="sponsor.siteUrl_ja" :href="sponsor.siteUrl_ja" target='_blank')
                img.sponsor-logo(:src="getImagePath(sponsor.imgPath)" :alt="sponsor.name_ja" uk-img)
                p(v-if='!showSponsorName(sponsor.imgPath)') {{ sponsor.name_ja }}
            img(v-else class="sponsor-logo" :src="getImagePath(sponsor.imgPath)" :alt="sponsor.name_ja" uk-img)
            p(v-if='!sponsor.siteUrl_ja && !showSponsorName(sponsor.imgPath)') {{ sponsor.name_ja }}

</template>


<script>
  import { mapGetters, mapActions } from 'vuex'
  import sponsors from '~/static/sponsor/data.json'
  export default {
    name: 'top-sponsor',
    computed: {
      top_sponsor_array(){
        // 重複の削除
        const data = sponsors.data
        let _data = [], names = []
        data.forEach( function ( item ) {
          if ( names.indexOf( item.distinctName ) === -1 && item.package) {
            _data.push(item)
          }
          names.push( item.distinctName )
        })
      return _data
      }
    },
    methods: {
      getImagePath(path){
        let _path
          if( path != undefined && path != "" ){
              _path = require('~/assets/img/sponsor/' + path)
          }else{
              _path = require('~/assets/img/noImage.png')
          }
        return _path
      },
      showSponsorName(path){
        let _show = false
          if( path != undefined && path != "" ){
              _show = true
          }
        return _show
      }
    }
  }
</script>

<style lang="sass">
section#TopSponsor
  background-color: $pycon-global-footer-bg-color
  padding-bottom: 0

  h2
      margin-bottom: 5rem

  .loading
    font-size: 14px
    font-weight: 300
    color: #979797
    text-align: center

  .disable
    display: none

  ul
      margin-left: auto
      margin-right: auto
      padding-bottom: 8rem
      border-bottom: solid 1px #d0d0d0
      list-style: none

      li
        width: 180px
        height: 130px
        border: solid 1px #d0d0d0
        padding: 15px
        margin-right: 1.7rem
        margin-bottom: 1rem
        background-color: #ffffff
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2)
        border-radius: 4px
        text-align: center
        vertical-align: middle

        p
          margin: 0
          font-size: 12px

  img.sponsor-logo
      max-height: 90px
      width: auto

</style>

