<template lang="pug">
  section#SprintSponsor.sponsor-section
      h2 Sprint Sponsor
      .card-block.uk-flex.uk-flex-wrap.uk-flex-space-between
        small-card(v-for="(sponsor, index) in sponsors" :index="index" :key="sponsor.id" :sponsor="sponsor")
</template>

<script>
  import SmallCard from '~/components/Sponsor/Card/SmallCard';
  export default {
    name: 'platinum-sponsor',
    props: ["sponsors"],
    components: {
      SmallCard,
    }
  }
</script>

<style lang="sass" scoped>
</style>
