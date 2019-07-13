<template lang="pug">
#news.py-4
    v-container
        v-layout.column
            v-flex.xs12
                v-layout.align-center
                    v-flex(shirnk)
                        secondary-heading(name="News" description="お知らせ")
                    v-flex.md11.text-xs-left.ml-2
                        span.caption.mx-2 お知らせ一覧
            v-flex.xs12(
                :class="{'pl-0': $vuetify.breakpoint.smAndDown, 'pl-4': $vuetify.breakpoint.mdAndUp}"
            )
                template(v-for="i in 5")
                    v-layout.align-center.subheading.my-4(
                        :class="{'ml-0': $vuetify.breakpoint.smAndDown, 'ml-3': $vuetify.breakpoint.mdAndUp}"
                    )
                        v-flex.md1.text-xs-center
                            v-card(depressed flat).primary.white--text.pa-1 2019.06.28
                        v-flex.md10.ml-3 ダミーテキストダミーテキストダミーテキスト

</template>

<script>
import SecondaryHeading from "@/components/parts/SecondHeading"

export default {
    name: "TheNews",
    components: {
        "secondary-heading": SecondaryHeading,
    },
}
</script>

