<template lang="pug">
v-flex(v-html="compiledText" class="description")
</div>

</template>

<script>
import marked from 'marked'

export default {
  props: {
    markdown: {
      type: String,
      required: true
    },
  },
  computed: {
    compiledText() {
      return marked(this.markdown)
    }
  }
}
</script>

<style lang="scss">
.description {
  h1 {
    font-size: 16px;
    margin: 6px 0;
  }
  h2 {
    font-size: 16px;
    margin: 6px 0;
  }
  p {
    margin-bottom: 4px;
  }
  ul {
    margin: 4px 0;
  }
  code {
    margin: 4px 0;
    padding: 4px;
  }
}
</style>