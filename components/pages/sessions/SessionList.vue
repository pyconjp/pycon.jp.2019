<template lang="pug">
v-layout(
  :class="{'my-4': $vuetify.breakpoint.smAndUp}"
).column
  v-flex.session(
    v-for="(session, idx) in sessions"
    :key="idx"
    :class="{' pt-3 pb-1': $vuetify.breakpoint.smAndUp}"
  )
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

.session {
  border-bottom: 1px solid $blueGrey2;
}

</style>
