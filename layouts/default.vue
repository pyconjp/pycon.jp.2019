<template lang="pug">
v-app(
  class="hide-overflow"
  style="position: relative;"
)
  pyconjp-header
  v-content
    nuxt
  contact
  pyconjp-footer
</template>

<style lang="sass">
.application--wrap
  background-color: white
</style>


<script>
import Header from "@/components/partials/Header"
import Contact from "@/components/partials/Contact"
import Footer from "@/components/partials/Footer"

export default {
  components: {
    "pyconjp-header": Header,
    "contact": Contact,
    "pyconjp-footer": Footer,
  },
  data() {
    return {}
  }
}
</script>
