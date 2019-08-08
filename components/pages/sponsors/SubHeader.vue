<template lang="pug">
  div
    h2.heading-font
      .bar.darkPurple
      | {{ en }}
    p.grey--text {{ ja }}
</template>

<script>
export default {
  props: ['ja', 'en']
}
</script>


<style lang="scss" scoped>
h2 {
  .bar {
    vertical-align: middle;
    content: '';
    display: inline-block;
    height: 0.25rem;
    width: 2rem;
    margin-right: 1rem;
  }

  & + p {
    margin-left: 3rem;
  }
}
</style>
