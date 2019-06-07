<template lang="pug">
  section#BreakfastSponsor.sponsor-section
      h2 Breakfast Sponsor
      .card-block.uk-flex.uk-flex-wrap
        small-card(v-for="(sponsor, index) in sponsors" :index="index" :key="sponsor.id" :sponsor="sponsor")
</template>

<script>
  import SmallCard from '~/components/Sponsor/Card/SmallCard';
  export default {
    name: 'breakfast-sponsor',
    props: ["sponsors"],
    components: {
      SmallCard,
    }
  }
</script>

<style lang="sass" scoped>
</style>
