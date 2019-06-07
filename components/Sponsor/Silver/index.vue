<template lang="pug">
  section#SilverSponsor.sponsor-section
      h2 Silver Sponsor
      .card-block.uk-flex.uk-flex-wrap
        small-card(v-for="(sponsor, index) in sponsors" :index="index" :key="sponsor.id" :sponsor="sponsor")
</template>

<script>
  import SmallCard from '~/components/Sponsor/Card/SmallCard';
  export default {
    name: 'Silver-sponsor',
    props: ["sponsors"],
    components: {
      SmallCard,
    }
  }
</script>

<style lang="sass" scoped>
</style>
