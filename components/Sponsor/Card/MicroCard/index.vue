<template lang="pug">
.card.uk-flex.uk-flex-row
  a.img-link(:href="this.siteUrl" target="_blank")
    .img-block
      img.img(:src="this.imgSrc")
  .text-block
    .name {{this.name}}
  //- a.text-block(:href="this.siteUrl" target="_blank")
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
  @include card(90px, $sponsor-1-4-width)
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
    flex-direction: row
    justify-content: flex-start
    flex-wrap: nowrap
    margin: 0 1rem 4rem
    &:nth-child(2n),
    &:nth-child(3n)
      margin: 0 1rem 4rem

a.img-block
  display: block
  height: 60px
  width: 60px

.img-block
  height: 60px
  width: 60px
  padding: 0
  margin: 1rem

.text-block
  display: flex
  justify-content: center
  align-items: center
  padding: 0 20px
  margin-right: 1rem

.name
  font-size: 16px
  font-weight: 300
  color: #666666
</style>
