<template>
  <div class="page-header">
    <h1 class="page-header__en heading-font">{{ en }}</h1>
    <p class="page-header__ja">{{ ja }}</p>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: ['ja', 'en']
}
</script>

<style lang="scss" scoped>
.page-header {
  background-color: #e9ebf0;
  text-align: center;
  padding: 2rem 0;
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

  &__en {
    color: #5970a5;
    font-size: 2.5rem;
  }

  &__ja {
    margin-top: 0.5frem;
    color: #a9b4ce;
    font-size: 1.25rem;
  }
}
</style>
