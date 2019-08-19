<template lang="pug">
v-btn(
     :block="block" :color="color" :[size]="true" :outline="outline" round :style="customStyle" :href="href" :target="target"
     :disabled="disabled" :dark="dark" :flat="flat" @click="$emit('click')"
).parent
    span.font-weight-bold(:class="{'is-not-block': !block}")
        slot
    v-icon(v-if="right" :[size]="true").child-right keyboard_arrow_right
    v-icon(v-else :[size]="true").child-left keyboard_arrow_left
</template>

<style lang="sass" scoped>
@import '@/assets/style/variables.scss'

.parent
    position: relative
.child-right
    position: absolute
    right: -10px
.is-not-block
    padding: 0 2em
@media #{$display-breakpoint-lg-and-up}
    .child
        right: -.5em
    .is-not-block
        padding: 0 3em

.v-btn.v-btn--outline
    border-width: 2px
</style>


<script>
export default {
  name: 'button-with-arrow',
  props: {
    color: { tyep: String },
    size: { type: String, default: 'large' },
    customStyle: { type: String },
    href: { type: String },
    block: { type: Boolean, default: true },
    outline: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    dark: { type: Boolean, default: false },
    target: { type: String, default: '_self' },
    flat: { type: Boolean, default: false },
    right: { type: Boolean, default: true }
  }
}
</script>

