<template lang="pug">
.secondary-heading
    .display-1.font-weight-bold.name
        span {{ name }}
        .bar.primary--text.display-1 ─
    .caption.grey--text.grey--lighten-3.font-weight-bold.mt-2 {{ description }}
</template>

<style lang="sass" scoped>
.name
    position: relative
.bar
    position: absolute
    right: 101.5%
    top: 2px
    font-size: 44px !important
</style>


<script>
export default {
    name: "second-haeding",
    props: ["name", "description"]
}
</script>

