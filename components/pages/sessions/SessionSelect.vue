<template lang="pug">
v-select(v-model="selected" @change="$emit('change', selected)" :items="items" chips solo multiple hide-details :placeholder="placeholder")
    template(#selection="{ item, index }")
        v-chip(v-if="index === 0")
            span {{ item.text }}
        span(v-if="index === 1").grey--text.caption (+{{ selected.length - 1 }} ...) 
</template>

<script>
export default {
    props: ["items", "values", "placeholder"],
    data() {
        return {
            selected: []
        }
    }
}
</script>