<template lang="pug">
#overview.background.pb-4
    v-container
        v-layout.my-4
            v-flex.xs12.text-xs-center
                first-heading(name="Overview")

        v-card
            v-layout.wrap
                v-flex.md8.py-4
                    v-layout.wrap
                        v-flex.md12
                            secondary-heading(name="What is PyCon JP?" description="PyCon JPとは")
                    v-layout.wrap.px-5
                        v-flex.md12.py-4
                            .body-1  {{ $t("home.overview.about") }}
                        v-flex.xs12.sm12.md6.px-3.py-2
                            button-with-arrow(:outline="true" size="large" color="primary") {{  $t("home.overview.theme") }}
                        v-flex.xs12.sm12.md6.px-3.py-2
                            button-with-arrow(:outline="true" size="large" color="primary") {{ $t("basic.norm") }}
                v-flex.md4
                    v-img(src="https://via.placeholder.com/500" width="100%" height="350px")

</template>

<script>
import FirstHeading from "@/components/parts/FirstHeading"
import SecondaryHeading from "@/components/parts/SecondHeading"
import ButtonWithArrow from "@/components/parts/ButtonWithArrow"

const dummyText = "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。";

export default {
    name: "TheOverview",
    components: {
        "first-heading": FirstHeading,
        "secondary-heading": SecondaryHeading,
        "button-with-arrow": ButtonWithArrow
    },
    data() {
        return {
            dummyText: dummyText
        }
    }
}
</script>

