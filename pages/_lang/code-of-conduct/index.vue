<template lang="pug">
div#CodeOfConduct.uk-container
  section#code-of-conduct.uk-section.uk-section-default
      h2 {{ $t('code_of_conduct.title') }}
      p(v-for="word in $t('code_of_conduct.body')") {{ word }}
</template>


<script>
  export default {
    name: 'code-of-conduct',
    head () {
      return {
        title: this.$t('code_of_conduct.title'),
      }
    },
  }
</script>

<style lang="sass">
section#code-of-conduct
  margin: 0 20px
  h2
    @media (max-width: $breakpoint-small)
      margin-bottom: 2rem
      font-size: 36px
</style>

