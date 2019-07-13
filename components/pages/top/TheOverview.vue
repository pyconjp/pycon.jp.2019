<template lang="pug">
#overview.background.pb-4
    v-container
        v-layout.my-4
            v-flex.xs12.text-xs-center
                first-heading(name="Overview")

        v-card
            v-layout.wrap
                v-flex.md8.pa-4
                    v-layout.column
                        v-flex.md12
                            secondary-heading(name=" What is PyCon JP?" description="PyCon JPとは")
                        v-flex.md12.my-4
                            .body-1 {{ dummyText }}
                    v-layout.justify-start
                        v-flex.xs12.sm12.md6
                            v-btn(large block outline round color="primary")
                                span.font-weight-bold 行動規範
                                v-icon.ml-3 keyboard_arrow_right
                v-flex.md4
                    v-img(src="https://via.placeholder.com/500" width="100%" height="350px")

</template>

<script>
import FirstHeading from "@/components/parts/FirstHeading"
import SecondaryHeading from "@/components/parts/SecondHeading"

const dummyText = "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。";

export default {
    name: "TheOverview",
    components: {
        "secondary-heading": SecondaryHeading,
        "first-heading": FirstHeading,
    },
    data() {
        return {
            dummyText: dummyText
        }
    }
}
</script>

