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
import cardMixin from '~/components/Sponsor/Card/mixins/cardMixin';
export default {
  name: 'medium-card',
  mixins: [cardMixin]
}
</script>

<style lang="sass" scoped>
.card
  @include card(270px, $sponsor-1-4-width)
  margin-right: 3.7rem
  margin-bottom: 5rem
  &:nth-child(4n)
    margin-right: 0
  @media (max-width: 1300px)
    &:nth-child(4n)
      margin-right: 3.7rem
    &:nth-child(3n)
      margin-right: 0
  @media (max-width: 985px)
    &:nth-child(3n)
      margin-right: 3.7rem
    &:nth-child(2n)
      margin-right: 0
  @media (max-width: $breakpoint-small)
    margin: 0 1rem 4rem
    &:nth-child(2n),
    &:nth-child(3n)
      margin: 0 1rem 4rem

a.img-link
  display: block
  height: 150px
  @media (max-width: $breakpoint-small)
    width: 100%
    height: 56vw

.img-block
  height: 150px
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
  height: calc(100% - 150px)
  justify-content: space-between
  @media (max-width: $breakpoint-small)
    height: calc(100% - 56vw)

.name
  display: inline-block
  padding: 10px 0
  line-height: 28px
  font-size: 24px
  font-weight: 300
  color: #666666

.text-block
  min-height: 180px
  overflow: hidden
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
      top: .65rem
      right: 1rem
      background: #9b9b9b
    &:after
      content: ""
      display: block
      position: absolute
      transform: rotate(45deg)
      width: .5rem
      height: .5rem
      top: .65rem
      right: 1.1rem
      background: #FFF
  a.company
    &::before
      left: 1rem
    &:after
      left: 1.1rem
</style>
