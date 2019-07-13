<template lang="pug">
#sponsor.tertiary
    v-container
        v-layout.mb-4
            v-flex.xs12.text-xs-center
                first-heading(name="Contact")
        v-layout
            v-flex.xs12.text-xs-center.white--text
                .subheading
                    span 事前に
                    nuxt-link(to="/" style="color: white;") FAQ
                    span をご確認いただけますようにお願いします。
                .subheading
                    span ボランティアによる運営ですので、回答には1週間程度を要します。
                    span 何卒お待ちいただけますようにお願いします。
        v-layout.mt-4
            v-flex.xs12.text-xs-center
                v-btn(round color="white")
                    v-icon(color='primary') mail
                    span.primary--text.ml-2 pyconjp@pycon.jp
</template>

<script>
import FirstHeading from "@/components/parts/FirstHeading"
export default {
    name: "Contact",
    components: {
        "first-heading": FirstHeading,
    }
}
</script>

