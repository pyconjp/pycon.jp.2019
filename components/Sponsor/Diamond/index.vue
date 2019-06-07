<template lang="pug">
section#DiamondSponsor.sponsor-section
  h2 Diamond Sponsor
  .uk-flex.uk-flex-wrap.sponsor-block(v-if="this.sponsor")
    a.logo-link(:href="this.siteUrl" target="_blank")
      .logo
        img.img(:src="this.imgSrc")
    .text
      h3
        a.name(:href="this.siteUrl" target="_blank") {{ sponsor ? this.name : '' }}
      p.desc {{ sponsor ? this.desc : '' }}
      .recruit(v-if="this.recruitText" :class="'text-' + sponsor.idName")
        h4
          a(:href="this.recruitUrl" target="_blank") {{$t('sponsor.recruitTitle')}}
        p.recruitText {{this.recruitText}}
</template>

<script>
import cardMixin from '~/components/Sponsor/Card/mixins/cardMixin';
export default {
  name: 'diamond',
  mixins: [cardMixin]
}
</script>

<style lang="sass" scoped>
section#DiamondSponsor
  margin-bottom: 14rem
  @media (max-width: $breakpoint-small)
    margin-bottom: 8rem

.sponsor-block
  @media (max-width: $breakpoint-small)
    height: auto

a.logo-link
    width: 40%
    min-width: 490px
    height: 326px
    @media (max-width: $breakpoint-small)
      width: 100%
      height: 60vw
      min-width: 0
      min-height: 0
      margin: 10px 1rem

.logo
  position: relative
  display: flex
  justify-content: center
  flex-direction: column
  align-items: center
  width: 40%
  min-width: 490px
  height: 326px
  padding: 1rem
  &:before
      content: ""
      position: absolute
      display: block
      z-index: -1
      top: 0
      left: 0
      width: 100%
      height: 100%
      background-color: #FFF
      border-radius: 4px
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2)
  &:after
      content: ""
      position: absolute
      display: block
      z-index: -2
      top: 0
      left: 0
      width: 100%
      height: 100%
      border-radius: 4px
      background-image: linear-gradient(62deg, rgba(40, 170, 226, 0.5), rgba(0, 223, 216, 0.5))
      transform: rotate(5deg)
  @media (max-width: $breakpoint-small)
    width: 100%
    height: 60vw
    min-width: 0
    min-height: 0
    margin: 0
    padding: 1rem

.img
  width: 100%

.text
  padding: 15px 0 0 67px
  width: calc(100% - 530px)
  @media (max-width: 980px)
    width: 100%
    padding-left: 0
  @media (max-width: $breakpoint-small)
    margin: 10px 20px
    padding: 0
  h3
    @media (max-width: 980px)
      margin-top: 2.4rem

.name
  font-size: 50px
  font-weight: 300
  line-height: normal
  color: #4a4a4a
  @media (max-width: $breakpoint-small)
    font-size: 24px

p.desc
  margin-top: 20px
  line-height: 1.9rem
  @media (max-width: $breakpoint-small)
    padding-top: 0
    margin-top: .8rem

.recruit
  h4
    margin: 0
  p.recruitText
    margin-top: .5rem
    line-height: 1.9rem

</style>
