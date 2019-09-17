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
                    v-layout.column.pa-4
                        v-flex.xs12
                            .title.font-weight-bold {{ item.title }}
                        v-flex.xs12.pt-4
                            .subheading {{ item.description }}
                    //- v-layout(v-show="item.canApply").py-2
                    //-     v-flex.xs12.text-xs-center.px-5
                    //-         button-with-arrow(:dark="true" :outline="true" :href="item.url" target="_blank" color="themeColor3" size="normal") {{ $t("basic.apply") }}
</template>

<script>
import FirstHeading from "@/components/parts/FirstHeading"
import ButtonWithArrow from "@/components/parts/ButtonWithArrow"

export default {
    name: "TheSupport",
    components: {
        "first-heading": FirstHeading,
        "button-with-arrow": ButtonWithArrow
    },
    data() {
        return {
        }
    },
    computed: {
        items() {
            return [
                {
                    id: 1, title: this.$t("home.support.food.title"), 
                    description: this.$t("home.support.food.desc"),
                    canApply: false,
                    img: require("~/assets/images/top/food.png")
                },
                {
                    id: 2, title: this.$t("home.support.nursery.title"), 
                    description: this.$t("home.support.nursery.desc"),
                    canApply: true,
                    img: require("~/assets/images/top/nursery.png"),
                    url: "https://pyconjp.connpass.com/event/137599/"
                },
                {
                    id: 3, title: this.$t("home.support.distant-support.title"), 
                    description: this.$t("home.support.distant-support.desc"),
                    canApply: false,
                    img: require("~/assets/images/top/distant_support.png")
                }
            ]
        }
    }
}
</script>

