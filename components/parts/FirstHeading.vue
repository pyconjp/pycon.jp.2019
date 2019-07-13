<template lang="pug">
.display-3.primary--text.heading-font(style="text-decoration: underline;") {{ name }}
</template>

<script>
export default {
    name: "first-heading",
    props: {
        "name": {type: String}
    }
}
</script>

