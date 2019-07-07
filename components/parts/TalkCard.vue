<template lang="pug">
.talk-card
    v-card.pa-3
        v-layout
            v-flex.xs12.xs-text-left
                span.title {{ date }}
                span.caption.grey--text.grey--lighten-2.ml-2 {{ weekday }}
</template>

<script>
export default {
    name: "talk-card",
    props: ["date", "weekday", "profileImg", "speakerName", "sessionTheme", "profile"]
}
</script>

