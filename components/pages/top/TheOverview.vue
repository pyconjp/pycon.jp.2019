<template lang="pug">
#overview.background.pb-4
    v-container
        v-layout.my-4
            v-flex.xs12.text-xs-center
                first-heading(name="Overview")
        // Spacer
        v-layout.py-3

        v-card
            v-layout.wrap
                v-flex.md8.py-5
                    v-layout.wrap
                        v-flex.md12
                            secondary-heading(name="What is PyCon JP?" description="PyCon JPとは")
                    v-layout.wrap(
                        :class="{'px-2': $vuetify.breakpoint.smAndDown, 'px-5': $vuetify.breakpoint.mdAndUp}"
                    )
                        v-flex.md12.py-4
                            .body-1  {{ $t("home.overview.about") }}
                        v-flex.xs12.sm12.md6.px-3.py-2
                            button-with-arrow(:outline="true" size="large" color="themeColor3") {{  $t("home.overview.theme") }}
                        v-flex.xs12.sm12.md6.px-3.py-2
                            button-with-arrow(:outline="true" size="large" color="themeColor3") {{ $t("basic.norm") }}
                v-flex.md4
                    v-img(:src="require('~/assets/images/top/whatispyconjp.png')" width="100%" min-height="100%")

</template>

<script>
import FirstHeading from "@/components/parts/FirstHeading"
import SecondaryHeading from "@/components/parts/SecondHeading"
import ButtonWithArrow from "@/components/parts/ButtonWithArrow"

export default {
    name: "TheOverview",
    components: {
        "first-heading": FirstHeading,
        "secondary-heading": SecondaryHeading,
        "button-with-arrow": ButtonWithArrow
    },
    data() {
        return {
        }
    }
}
</script>

