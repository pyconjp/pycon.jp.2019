<template lang="pug">
#sponsor.tertiary
    v-container
        v-layout.my-4
            v-flex.xs12.text-xs-center
                .display-3.white--text(style="text-decoration: underline;") Contact
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
export default {
    name: "Contact"
}
</script>

