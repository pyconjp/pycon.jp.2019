<template lang="pug">
  section#PlatinumSponsor.sponsor-section
      h2 Platinum Sponsor
      .card-block.uk-flex.uk-flex-wrap
        big-card(v-for="sponsor in sponsors" :key="sponsor.id" :sponsor="sponsor")
</template>

<script>
  import BigCard from '~/components/Sponsor/Card/BigCard';

  export default {
    name: 'platinum-sponsor',
    props: ['sponsors'],
    components: {
      BigCard,
    }
  }
</script>

<style lang="sass" scoped>
</style>
