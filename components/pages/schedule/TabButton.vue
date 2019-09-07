<template lang="pug">
.tab-button
    template(v-if="!isMobile")
        span.subheading.font-weight-bold {{ day }}
        span.headline.ml-2.font-weight-bold {{ date }}
        span.subheading.ml-2.font-weight-bold ({{ weekday }})
    template(v-else)
        span.body-1.font-weight-bold {{ day }}
        span.body-2.ml-1.font-weight-bold {{ date }}
        span.body-1.ml-1.font-weight-bold ({{ weekday }})
</template>

<script>
export default {
    name: "tab-button",
    props: ["day", "date", "weekday", "isMobile", "holiday"]
}
</script>