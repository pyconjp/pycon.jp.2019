<template lang="pug">
#sponsor.themeColor3
    v-container
        v-layout.mb-4
            v-flex.xs12.text-xs-center
                first-heading(name="Contact" color="white")
        v-layout
            v-flex.xs12.text-xs-center.white--text
                .subheading
                    span(v-html="$t('contact.desc1')")
                .subheading
                    span(v-html="$t('contact.desc2')")
        v-layout.mt-4
            v-flex.xs12.text-xs-center
                v-btn(round color="white" href="mailto:pyconjp@pycon.jp")
                    v-icon(color='themeColor3') mail
                    span.themeColor3--text.ml-2.text-lowercase pyconjp@pycon.jp
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

