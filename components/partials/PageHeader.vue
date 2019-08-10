<template lang="pug">
#page-header.pt-5.pb-3.text-md-center
  h1.display-2.themeColor3--text.heading-font {{ en }}
  p.subheading.py-2.themeColor3Transparent--text {{ ja }}
</template>

<script>
export default {
  name: 'PageHeader',
  props: ['ja', 'en']
}
</script>

<style lang="scss" scoped>
#page-header {
  background-color: #e9ebf0;
  position: relative;

  &::after {
    content: '';
    display: block;
    height: 0.5rem;
    width: 10rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #5970a5;
  }
}
</style>
