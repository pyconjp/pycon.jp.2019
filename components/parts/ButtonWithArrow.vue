<template lang="pug">
v-btn(
     :block="block" :color="color" :[size]="true" :outline="outline" round :style="customStyle" :href="href" :target="target"
     :disabled="disabled" :dark="dark" :flat="flat" @click="$emit('click')"
).parent
    span.font-weight-bold.px-5
        slot
    v-icon(v-if="right" :[size]="true").child-right keyboard_arrow_right
    v-icon(v-else :[size]="true").child-left keyboard_arrow_left
</template>

<style lang="sass" scoped>
.parent
    position: relative
.child-right
    position: absolute
    right: -10px
@media only screen and (min-width: 1264px)
    .child-right
        right: 0px
.child-left
    position: absolute
    left: -10px
@media only screen and (min-width: 1264px)
    .child-left
        left: 0px
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
        flat: {type: Boolean, default: false},
        right: {type: Boolean, default: true}
    }
}
</script>

