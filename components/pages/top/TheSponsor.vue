<template lang="pug">
#sponsor
    v-container
        v-layout.my-4.wrap
            v-flex.md12.text-xs-center
                first-heading(name="Sponsors")
        v-layout.wrap.justify-start
            v-flex.xs12.sm12.md6(v-for="i in 3" :key="i").pa-2
                v-card
                    v-img(src="https://via.placeholder.com/500" height="100")
        v-layout.wrap.justify-start
            v-flex.xs12.sm12.md4(v-for="i in 10" :key="i").pa-2
                v-card
                    v-img(src="https://via.placeholder.com/500" height="100")
        v-layout.wrap.justify-start
            v-flex.xs12.sm12.md3(v-for="i in 10" :key="i").pa-2
                v-card
                    v-img(src="https://via.placeholder.com/500" height="100")
        v-layout.wrap.justify-start
            v-flex.xs12.sm12.md2(v-for="i in 20" :key="i").pa-2
                v-card
                    v-img(src="https://via.placeholder.com/500" height="100")
        v-layout.my-3.wrap.justify-center
            v-flex.xs12.sm12.md3.text-xs-right.px-2
                v-btn(outline block color="primary" round large)
                    span {{ $t("home.sponsor.list") }}
                    v-icon keyboard_arrow_right
            v-flex.xs12.sm12.md3.text-xs-left.px-2
                v-btn(block color="primary" round large)
                    span {{ $t("home.sponsor.hiring") }}
                    v-icon keyboard_arrow_right
</template>

<script>
import FirstHeading from "@/components/parts/FirstHeading"
export default {
    name: "TheSupport",
    components: {
        "first-heading": FirstHeading,
    }
}
</script>

