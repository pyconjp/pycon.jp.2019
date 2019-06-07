<template lang="pug">
.card.uk-flex.uk-flex-column
  a.img-link(:href="this.siteUrl" target="_blank")
    .img-block
      img.img(:src="this.imgSrc")
  p.text-block
    a.name(:href="this.siteUrl" target="_blank") {{this.name}}
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
  justify-content: space-between
  @include card(180px, $sponsor-1-4-width)
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
      margin-bottom: 5rem
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

p.text-block
  display: flex
  justify-content: center
  align-items: center
  padding: 0 1rem 1rem
  margin: 0

.name
  display: inline-block
  font-size: 16px
  font-weight: 300
  color: #666666

</style>
