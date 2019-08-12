<template lang="pug">
v-btn(
     :block="block" :color="color" :[size]="true" :outline="outline" round :style="customStyle" :href="href" :target="target"
     :disabled="disabled" :dark="dark" :flat="flat"
).parent
    span.font-weight-bold
        slot
    v-icon(:[size]="true").child keyboard_arrow_right
</template>

<style lang="sass" scoped>
.parent
    position: relative
.child
    position: absolute
    right: -10px
@media only screen and (min-width: 1264px)
    .child
        right: 0px
</style>


<script>
export default {
    name: "button-with-arrow",
    props: {
        color: {tyep: String},
        size: {type: String, default: "large"},
        customStyle: {type: String},
        href: {type: String},
        block: {type: Boolean, default: true},
        outline: {type: Boolean, default: false},
        disabled: {type: Boolean, default: false},
        dark: {type: Boolean, default: false},
        target: {type: String, default: "_self"},
        flat: {type: Boolean, default: false}
    }
}
</script>

