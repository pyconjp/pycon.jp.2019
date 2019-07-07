<template lang="pug">
.secondary-heading.pl-4
    .bar.primary--text.display-1 ─
    .display-1.font-weight-bold.name
        span {{ name }}
    .caption.grey--text.grey--lighten-3.font-weight-bold.mt-2 {{ description }}
</template>

<style lang="sass" scoped>
.secondary-heading
    position: relative
.bar
    position: absolute
    left: -24px
    top: 0px
    font-size: 34px !important
</style>


<script>

export default {
    name: "second-haeding",
    props: ["name", "description"]
}
</script>

