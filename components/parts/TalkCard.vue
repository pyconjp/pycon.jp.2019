<template lang="pug">
.talk-card
    v-card(flat).pa-4.card
        .corner-left-top
        .corner-right-bottom
        v-layout
            v-flex.xs12.text-xs-left
                span.title.heading-font {{ date }}
                span.caption.grey--text.grey--lighten-2.ml-2 {{ weekday }}
        v-layout
            v-flex.xs12.text-xs-center
                img(:src="profileImg" width=150 height=150).profile-img
        v-layout.mt-4
            v-flex.xs12.text-xs-left
                .title.font-weight-bold.quaternary--text.my-4.heading-font Session Theme
                .title.font-weight-bold.my-4 {{ sessionTheme }}
        v-divider
        v-layout.mt-2
            v-flex.xs12.text-xs-left
                .title.quaternary--text.my-4.heading-font Profile
                .body-2 {{ profile }}

</template>

<style lang="sass" scoped>
.card
    border: solid 1px #E9EBF0
    position: relative
.profile-img
    object-fit: cover
    border-radius: 75px
.corner-left-top, .corner-right-bottom
    position: absolute
    width: 30px
    height: 30px
.corner-left-top
    top: -2px
    left: -2px
    border-left: solid 4px #EBA4C3
    border-top: solid 4px #EBA4C3
.corner-right-bottom
    right: -2px
    bottom: -2px
    border-right: solid 4px #E1A7C2
    border-bottom: solid 4px #E1A7C2
</style>


<script>
export default {
    name: "talk-card",
    props: ["date", "weekday", "profileImg", "speakerName", "sessionTheme", "profile"]
}
</script>

