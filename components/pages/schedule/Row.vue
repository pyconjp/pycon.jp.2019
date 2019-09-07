<template lang="pug">
.parent(:class="noBorder ? '' : 'bottom-border'" sticky-container)
    .time-caption.subheading.text-xs-center(
        v-sticky="$vuetify.breakpoint.smAndDown"
        v-if="time"
        :class="{'font-weight-bold': $vuetify.breakpoint.smAndDown}"
    ) 
        span.caption.grey--text.day.pr-2 {{ day }}
        span {{ time }}
    slot
</template>

<style lang="sass" scoped>
@import '@/assets/style/variables.scss';
.day 
    display: none
.top-sticky
    .day 
        display: inline

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
        "no-border": { default: false },
        "day": { type: String }
    }
}
</script>