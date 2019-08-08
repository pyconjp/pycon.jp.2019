<template lang="pug">
v-flex
  div.sponsor
    div.sponsor__left-top
    div.sponsor__right-bottom
    .sponsor__img.pa-5
      v-img(v-if="sponsor.logoIImage" :src="require(`~/assets/images/logos/${sponsor.logoIImage}`)" contain :aspect-ratio="imageAspectRatio")
      v-img(v-else :src="require('~/assets/images/horizontal_logo.png')" contain :aspect-ratio="imageAspectRatio")
    div.sponsor__content
      p.sponsor__name(:style="{fontSize: titleSize}") {{ sponsor.name }}
      p.sponsor__description(v-if="sponsor.description") {{ sponsor.description }}
      .sponsor__recruit.text-xs-center
        v-btn.font-weight-bold(v-if="sponsor.recruitUrl" outline round color="purple" :href="sponsor.recruitUrl") 採用について
</template>

<script>
export default {
  props: ['sponsor', 'image-aspect-ratio', 'title-size']
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/app.styl';
.sponsor {
  border: 1px solid lightgrey;
  position: relative;

  &__img {
    border-bottom: 1px solid lightgrey;
  }

  &__content {
    padding: 2rem 1rem;
  }

  &__name {
    font-size: 1.5rem;
    font-weight: bolder;
  }

  &__description {
    margin-top: 2rem;
  }

  &__left-top {
    position: absolute;
    content: '';
    height: 2rem;
    width: 2rem;
    left: -1px;
    top: -1px;
    border-top: 2px solid #d66194;
    border-left: 2px solid #d66194;
  }

  &__right-bottom {
    position: absolute;
    content: '';
    height: 2rem;
    width: 2rem;
    right: -1px;
    bottom: -1px;
    border-bottom: 2px solid #d66194;
    border-right: 2px solid #d66194;
  }
}
</style>
