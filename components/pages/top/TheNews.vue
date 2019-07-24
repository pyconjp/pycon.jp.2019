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

export default {
    // TODO: #sudame NewsのCORS問題が解決し次第URL変更の上コメントアウト解除
    // async mounted() {
    //     const url = "https://script.googleusercontent.com/macros/echo?user_content_key=ZuppFUvp3G9UxR6aKZgBgrPE8vTQf7A4sOk7z8ph6UhBwb2PlKVjstNi6-DZzJbuHWvbCKqjK6wu0_qLhFwJLL_zwJge3Cckm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJ9mZKgggRSOURRQ0WvbGHmV5NYIYqOUFVR_DbOCwbvdNONDik88y9c0VZXY9HZEGr0uJ9YYKCWC&lib=MnV3PmCdam9EutRvBBsyupNVJGv4Fseyb"
    //     const resp = await this.$axios.get(url)
    //     console.log(resp.data.item)
    //     this.items = resp.data.item.map((theItem) => {
    //         return {
    //             title: theItem.title,
    //             date: moment(new Date(theItem.pubDate)).format("YYYY.MM.DD") ,
    //             link: theItem.link,
    //         }
    //     })
        
    // },
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

