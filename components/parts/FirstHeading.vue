<template lang="pug">
.display-3.heading-font(
    style="text-decoration: underline;"
    :class="`${color}--text`"
) {{ name }}
</template>

<script>
export default {
    name: "first-heading",
    props: {
        "name": {type: String},
        "color": {type: String, default: "themeColor3"}
    }
}
</script>

