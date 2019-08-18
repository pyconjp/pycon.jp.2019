<template>
    <div class="inline-block" v-html='require("@/assets/svgs/" + icon + ".svg")'></div>
</template>

<style module>
.svg {
    fill: currentColor;
    height: 1em;
    margin-top: -4px;
    vertical-align: middle;
    width: 1em;
}
</style>

<script>
export default {
    props: ['icon'],
    mounted() {
        console.log(this.$el.firstChild)
        // this.$el.firstChild.classList.add(this.$style.svg)
        // this.$el.firstChild.removeAttribute('height')
        // this.$el.firstChild.removeAttribute('width')
    }
}
</script>