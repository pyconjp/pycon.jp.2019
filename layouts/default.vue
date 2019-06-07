<template lang="pug">
    div.outer-container
        no-ssr
          global-header
        nuxt
        div#global-footer-wrapper.uk-container-expand
          global-footer

</template>

<script>
import GlobalHeader from '../components/GlobalHeader'
import GlobalFooter from '../components/GlobalFooter'

export default {
  name: 'default',
  components: {
    GlobalHeader,
    GlobalFooter
  }
}
</script>

<style src="./default.sass" lang="sass" />
