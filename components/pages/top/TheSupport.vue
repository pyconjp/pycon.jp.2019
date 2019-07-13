<template lang="pug">
#support.background
    v-container
        v-layout.my-4
            v-flex.xs12.text-xs-center
                first-heading(name="Support")
        v-layout.fill-height.wrap
            v-flex(v-for="item in items" :key="item.id").xs12.sm12.md4.pa-2
                v-card(height="100%")
                    v-img(:src="item.img" height="200")
                    v-layout.column.py-2.px-3
                        v-flex.xs12
                            .headline {{ item.title }}
                        v-flex.xs12.mt-2
                            .subheading {{ item.description }}
                    v-layout(v-show="item.canApply").pb-2
                        v-flex.xs12.text-xs-center
                            v-btn(color="primary" large round)
                                span 申し込み
                                v-icon keyboard_arrow_right
</template>

<script>
import FirstHeading from "@/components/parts/FirstHeading"
export default {
    name: "TheSupport",
    components: {
        "first-heading": FirstHeading,
    },
    data() {
        return {
            items: [
                {
                    id: 1, title: "食事", description: "各日程で食事が付きます。", canApply: false,
                    img: "https://via.placeholder.com/500"
                },
                {
                    id: 2, title: "託児所", description: "各日程で託児所が開設されます。", canApply: true,
                    img: "https://via.placeholder.com/500"
                },
                {
                    id: 3, title: "遠方支援", description: "遠方支援についてのテキスト", canApply: true,
                    img: "https://via.placeholder.com/500"
                },
            ]
        }
    }
}
</script>

