<template lang="pug">
  section#Patron.sponsor-section(v-if="sponsors.length > 0")
      h2 Patron
      .card-block.uk-flex.uk-flex-wrap
        micro-Card(v-for="(sponsor, index) in sponsors" :index="index" :key="sponsor.id" :sponsor="sponsor")
</template>

<script>
  import MicroCard from '~/components/Sponsor/Card/MicroCard';
  export default {
    name: 'patron-sponsor',
    props: ["sponsors"],
    components: {
      MicroCard,
    }
  }
</script>

<style lang="sass" scoped>
</style>
