<template lang="pug">
.tab-button
    template(v-if="!isMobile")
        span.subheading.font-weight-bold(:class="holiday ? 'themeColor3--text' : ''") {{ day }}
        span.headline.ml-2.font-weight-bold(:class="holiday ? 'themeColor3--text' : ''") {{ date }}
        span.subheading.ml-2.font-weight-bold(:class="holiday ? 'themeColor3--text' : ''") ({{ weekday }})
    template(v-else)
        span.body-1.font-weight-bold(:class="holiday ? 'themeColor3--text' : ''") {{ day }}
        span.body-2.ml-1.font-weight-bold(:class="holiday ? 'themeColor3--text' : ''")  {{ date }}
        span.body-1.ml-1.font-weight-bold(:class="holiday ? 'themeColor3--text' : ''") ({{ weekday }})
</template>

<script>
export default {
    name: "tab-button",
    props: ["day", "date", "weekday", "isMobile", "holiday"]
}
</script>