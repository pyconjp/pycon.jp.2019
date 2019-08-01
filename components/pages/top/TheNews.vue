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
                template(v-for="item in items")
                    a(:href="item.link" target="_blank" rel="noreferrer noopener")
                        v-layout.align-center.subheading.my-4(
                            :class="{'ml-0': $vuetify.breakpoint.smAndDown, 'ml-3': $vuetify.breakpoint.mdAndUp}"
                        )
                            v-flex.md2.xs4.sm3.text-xs-center
                                v-card(depressed flat).primary.white--text.pa-1 {{item.date}}
                            v-flex.md10.xs8.sm9.ml-3 {{item.title}}

</template>

<script>
import SecondaryHeading from "@/components/parts/SecondHeading"
import moment from "moment"

import { apiBase } from "@/plugins/env"


export default {
    async created() {
        const url = apiBase + "/news"
        const resp = await this.$axios.get(url)
        this.items = resp.data[0].item.map((theItem) => {
            return {
                title: theItem.title[0],
                date: moment(new Date(theItem.pubDate)).format("YYYY.MM.DD"),
                link: theItem.link,
            }
        })
    },
    name: "TheNews",
    components: {
        "secondary-heading": SecondaryHeading,
    },
    data() {
        return {
            items: [],
        }
    }
}
</script>

