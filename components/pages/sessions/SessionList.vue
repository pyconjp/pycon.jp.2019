<template lang="pug">
ul.pl-0.mt-4.mb-5
  li.py-4(v-for="session in sessions")
    SessionCard(:session="session")
</template>

<script>
  import SessionCard from '@/components/pages/sessions/SessionCard'

  export default {
    props: {
      sessions: {
        type: Array,
        required: true
      },
    },
    components: {
      SessionCard,
    }
  }
</script>

<style lang="scss">
@import '@/assets/style/variables.scss';

ul {
  list-style: none;
  li {
    border-bottom: 1px solid $themeColor3Transparent;
  }
}
</style>
