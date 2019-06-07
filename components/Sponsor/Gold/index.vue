<template lang="pug">
  section#MediumSponsor.sponsor-section
      h2 Gold Sponsor
      .card-block.uk-flex.uk-flex-wrap
        medium-card(v-for="(sponsor, index) in sponsors" :index="index" :key="sponsor.id" :sponsor="sponsor" :showDesc="true")
</template>

<script>
  import MediumCard from '~/components/Sponsor/Card/MediumCard';
  export default {
    name: 'platinum-sponsor',
    props: ["sponsors"],
    components: {
      MediumCard,
    }
  }
</script>

<style lang="sass" scoped>
  section#MediumSponsor
    margin-bottom: 7rem
</style>
