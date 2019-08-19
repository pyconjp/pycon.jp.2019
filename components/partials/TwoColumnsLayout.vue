<template lang="pug">
v-layout.justify-space-between.my-3(:class="{'wrap': $vuetify.breakpoint.smAndDown}")
    v-flex.xs12.sm12.md6.pa-0.ma-0(v-if="onlyRight")
    v-flex.xs12.sm12.md6(v-else :class="{'pt-4': $vuetify.breakpoint.smAndDown, 'pt-0': $vuetify.breakpoint.mdAndUp, 'mx-0': $vuetify.breakpoint.smAndDown, 'mr-4': $vuetify.breakpoint.mdAndUp }")
        slot(v-if="reverse" name="right")
        slot(v-else name="left")
    v-flex.xs12.sm12.md6.pa-0.ma-0(v-if="onlyLeft")
    v-flex.xs12.sm12.md6(v-else :class="{'pt-4': $vuetify.breakpoint.smAndDown, 'pt-0': $vuetify.breakpoint.mdAndUp, 'mx-0': $vuetify.breakpoint.smAndDown, 'ml-4': $vuetify.breakpoint.mdAndUp }")
        slot(v-if="reverse" name="left")
        slot(v-else name="right")
</template>

<script>
export default {
  props: {
    onlyLeft: {
      type: Boolean,
      default: false
    },
    onlyRight: {
      type: Boolean,
      default: false
    },
    smReverse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    reverse() {
      return this.smReverse && this.$vuetify.breakpoint.smAndDown
    }
  }
}
</script>
