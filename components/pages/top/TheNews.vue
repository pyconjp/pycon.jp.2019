<template lang="pug">
#news.py-4
    v-container
        v-layout.column
            v-flex.xs12
                v-layout.align-center
                    v-flex(shirnk)
                        secondary-heading(name="News" description="お知らせ" :right="true")
                            template(#additional)
                                v-flex.md11
                                    configurable-link(:path="'https://pyconjp.blogspot.com/search/label/pyconjp2019'" target="'_blank'")
                                        v-layout.align-top.justify-start
                                            v-flex.shrink
                                                span.subheading.pl-4 {{ $t("home.news.list") }}
                                            v-flex.ml-2
                                                v-icon(medium).linkBlue--text keyboard_arrow_right
            // ニュース一覧
            v-flex.xs12(
                :class="{'px-0': $vuetify.breakpoint.smAndDown, 'px-5': $vuetify.breakpoint.mdAndUp}"
            )
                template(v-for="item in items")
                    configurable-link(:path="item.link" target="'_blank'" :rel="'noreferrer noopener'")
                        v-layout.align-center.subheading.my-4
                            v-flex.md2.xs4.sm3.text-xs-center
                                v-card(depressed flat).themeColor3.white--text.pa-1 {{item.date}}
                            v-flex.md10.xs8.sm9.ml-3 {{item.title}}
            // スタッフ募集
            configurable-link(:path="'https://pyconjp.blogspot.com/2019/08/2019-conf-day-staff.html'" :target="'_blank'")
                v-layout.staff(:class="{'mx-0': $vuetify.breakpoint.smAndDown, 'mx-5': $vuetify.breakpoint.mdAndUp}").my-3.py-3.align-center.wrap
                    v-flex.xs12.md4.text-md-center.pa-3.right-border
                        v-layout.justify-center
                            v-flex.text-xs-right.text-md-right.pr-1
                                v-icon(medium).px-2 supervised_user_circle
                            v-flex
                                span.themeColor3--text.headline.font-weight-bold {{ $t("home.news.staff") }} 
                    v-flex.xs10.md7.text-md-left.py-3.pl-4
                        .body-1.themeColor3--text {{ $t("home.news.staff_desc") }}
                    v-flex.xs1.md1.text-xs-right.text-md-right(
                        :class="{'px-0': $vuetify.breakpoint.smAndDown, 'px-4': $vuetify.breakpoint.mdAndUp}"
                    )
                        v-icon(large) keyboard_arrow_right
            v-layout(
                :class="{'mx-0': $vuetify.breakpoint.smAndDown, 'mx-5': $vuetify.breakpoint.mdAndUp}"
            ).py-1.text-md-center
                v-flex
                    .body-2(v-html='$t("home.news.staff_note")') 
</template>

<style lang="sass" scoped>
.staff
    border: solid 3px #5970A5
.right-border
    border-right: solid 1px #E9EBF0
</style>


<script>
import SecondaryHeading from "@/components/parts/SecondHeading"
import ConfigurableLink from "@/components/parts/ConfigurableLink"
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
                link: theItem.link[0],
            }
        })
        // slice
        this.items = this.items.slice(0, 3)

    },
    name: "TheNews",
    components: {
        "secondary-heading": SecondaryHeading,
        "configurable-link": ConfigurableLink
    },
    data() {
        return {
            items: [],
        }
    }
}
</script>

