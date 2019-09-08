<template lang="pug">
.link
  template(v-if="path")
    nuxt-link(v-if="!isExternalLink" :to="path")
      slot
    a(v-if="isExternalLink" :href="path" :target="target" :rel="rel")
      slot
  template(v-else)
    slot
</template>

<script>
export default {
  props: {
    path: {
      type: String
    },
    target: {
      type: String,
      default: '_self'
    },
    rel: {
      type: String
    }
  },
  computed: {
    isExternalLink() {
      if(this.path) {
        // matchすればtrue, しなければfalse
        return this.path.match(/^http/) ? true : false;
      }
      return false;
    }
  }
}
</script>