<template lang="pug">
.parent(:class="noBorder ? '' : 'bottom-border'")
    .time-caption.subheading.text-xs-center(
        v-if="time"
        :class="{'font-weight-bold': $vuetify.breakpoint.mdAndDown}"
    ) {{ time }}
    slot
</template>

<style lang="sass" scoped>
@import '@/assets/style/variables.scss';
@media only screen and (min-width: 1200px)
    .bottom-border
        border-bottom: 1px $blueGrey1 solid
    .parent
        position: relative
    .time-caption
        position: absolute
        left: -46px
        top: -14px
@media only screen and (max-width: 1200px)
    .time-caption
        position: sticky
        padding: 12px 0
        background-color: $blueGrey2
</style>


<script>
export default {
    name: "timetable-row",
    props: {
        "time": { default: null },
        "no-border": { default: false }
    }
}
</script>