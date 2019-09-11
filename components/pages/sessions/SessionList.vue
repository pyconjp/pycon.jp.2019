<template lang="pug">
.session-list
  v-layout.column
    v-flex.session(
      v-for="(session, idx) in sessions"
      :key="idx"
    ).py-1
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
  data() {
    return {

    }
  },
  components: {
    SessionCard 
  },
  created() {
    // console.log(this.sessions)
  },

}
</script>

<style lang="scss">
@import '@/assets/style/variables.scss';

.session {
  border-bottom: 1px solid $blueGrey2;
}

</style>
