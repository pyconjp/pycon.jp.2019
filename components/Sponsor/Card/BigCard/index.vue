<template lang="pug">
.card
  a.img-link(:href="this.siteUrl" target="_blank")
    .img-block
      img.img(:src="this.imgSrc")
  .body.uk-flex.uk-flex-column
    .text-block
      h3
        a.name(:href="this.siteUrl" target="_blank") {{this.name}}
      p.desc.uk-animation-slide-right-medium(:class="'text-' + sponsor.idName") {{this.desc}}
      .recruit(v-if="this.recruitText" :class="'text-' + sponsor.idName + ' uk-animation-slide-left-medium'" hidden)
        h4
          a(:href="this.recruitUrl" target="_blank") {{$t('sponsor.recruitTitle')}}
        p.recruitText {{this.recruitText}}
    nav.card-nav(v-if="this.recruitText")
      a.company(@click="showRecruit=!showRecruit" :uk-toggle="'target: .text-' + sponsor.idName + ';'" v-if="showRecruit")
        | {{$t('sponsor.companyInfoTitle')}}
      a(@click="showRecruit=!showRecruit" :uk-toggle="'target: .text-' + sponsor.idName + ';'" v-else="!showRecruit")
        | {{$t('sponsor.recruitTitle')}}
</template>

<script>
import cardMixin from '~/components/Sponsor/Card/mixins/cardMixin'
export default {
  name: 'card',
  mixins: [cardMixin]
}
</script>

<style lang="sass" scoped>
.card
  @include card(470px, $sponsor-1-3-width)
  &:after
    background-image: linear-gradient(62deg, rgba(40, 170, 226, 0.5), rgba(0, 223, 216, 0.5))
  &:nth-child(3n)
    margin-right: 0
  @media (max-width: $breakpoint-small)
    &:last-child
      margin-right: 1rem


a.img-link
  display: block
  height: calc(222px + 1rem + 25px)
  @media (max-width: $breakpoint-small)
    width: 100%
    height: 56vw

.img-block
  height: calc(222px + 1rem + 25px)
  padding: 1rem 1rem 25px
  @media (max-width: $breakpoint-small)
    width: 100%
    height: 56vw

  img
    width: auto
    height: auto
    max-width: 100%
    max-height: 100%

.body
  padding: 0 1rem
  height: calc(100% - 222px - 1rem - 25px)
  justify-content: space-between
  overflow: hidden
  @media (max-width: $breakpoint-small)
    height: calc(100% - 56vw)

.name
  display: inline-block
  line-height: 28px
  font-size: 24px
  font-weight: 300
  color: #666666

.text-block
  min-height: 180px
  h4
    margin: .5rem 0 -.5rem
    font-size: 16px

p.desc, p.recruitText
  font-size: 14px
  line-height: 1.5rem
  margin-top: .6rem

nav.card-nav
  position: relative
  display: flex
  flex-direction: row
  justify-content: center
  margin-bottom: 1rem
  padding: .3rem 0 0
  width: 100%
  text-align: center
  border-top: 1px solid #EEE
  font-size: 14px
  a
    display: block
    justify-content: stretch
    color: #9b9b9b
    &::before
      content: ""
      display: block
      position: absolute
      transform: rotate(45deg)
      width: .5rem
      height: .5rem
      top: .6rem
      right: 1rem
      background: #9b9b9b
    &:after
      content: ""
      display: block
      position: absolute
      transform: rotate(45deg)
      width: .5rem
      height: .5rem
      top: .6rem
      right: 1.1rem
      background: #FFF
  a.company
    &::before
      left: 1rem
    &:after
      left: 1.1rem

</style>
