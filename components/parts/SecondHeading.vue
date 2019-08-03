<template lang="pug">
.secondary-heading.pl-5
    .bar.primary--text.display-1 ─
    .display-1.font-weight-bold.name.heading-font
        v-layout.align-center
            v-flex.shirnk
                span {{ name }}
            slot(name="additional")
    .caption.grey--text.grey--lighten-3.font-weight-bold.mt-2 {{ description }}
</template>

<style lang="sass" scoped>
.secondary-heading
    position: relative
.bar
    position: absolute
    left: 1px
    top: 0px
    font-size: 34px !important
</style>


<script>

export default {
    name: "second-haeding",
    props: ["name", "description", "right"]
}
</script>

