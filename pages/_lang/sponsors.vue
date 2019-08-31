<template lang="pug">
#sponsors-page
  page-header(en="Sponsors" ja="スポンサー")
  .container.pt-4
    //- .text-xs-center
    //-   v-btn.white--text.font-weight-bold.pl-4.my-3(round color="purple") スポンサー募集中
    //-     .pr-3
    //-     v-icon navigate_next
    //-   p.grey--text ※Diamond/Gold/Platinum/Sprint/Waterの募集は締め切りました
    section(v-for="section in sections" :key="section.id")
      second-heading(:name="section.name" :description="section.description")
      v-layout.wrap.py-3.sponsors(:class="{'px-5': $vuetify.breakpoint.mdAndUp }")
        v-flex.pa-2(
          v-for="sponsor in filteredSponsors(section.filter)" :key="sponsor.id"
          :class="section.class"
        )
          sponsor(
            :sponsor="sponsor" :image-aspect-ratio="section.ratio" :title-size="section.size" :showRec="section.showRec"
          )
    //- section
    //-   second-heading(name="Diamond Sponsor" description="ダイヤモンド")
    //-   v-layout.wrap.px-5.py-3.sponsors
    //-     v-flex.pa-2.md12.sm12.xs12(v-for="sponsor in filteredSponsors('Diamond')" :key="sponsor.id" )
    //-       sponsor(:sponsor="sponsor" :image-aspect-ratio="48/9" title-size="headline" :showRec="true")
    //- section
    //-   second-heading(name="Platinum Sponsor" description="プラチナ")
    //-   v-layout.wrap.px-5.py-3.sponsors
    //-     v-flex.pa-2.md6.sm12.xs12(v-for="sponsor in filteredSponsors('Platinum')" :key="sponsor.id")
    //-       sponsor(:sponsor="sponsor" :image-aspect-ratio="48/9" title-size="headline" :showRec="true")
    //- section
    //-   second-heading(name="Gold Sponsor" description="ゴールド")
    //-   v-layout.wrap.px-5.py-3.sponsors
    //-     v-flex.pa-2.md4.sm6.xs6(v-for="sponsor in filteredSponsors('Gold')" :key="sponsor.id")
    //-       sponsor(:sponsor="sponsor" :image-aspect-ratio="16/9" title-size="title" :showRec="true")
    //- section
    //-   second-heading(name="Silver Sponsor" description="シルバー")
    //-   v-layout.wrap.px-5.py-3.sponsors
    //-     v-flex.pa-2.md3.sm3.xs4(v-for="sponsor in filteredSponsors('Silver')" :key="sponsor.id")
    //-       sponsor(:sponsor="sponsor" :image-aspect-ratio="16/9" title-size="title")
    //- section
    //-   second-heading(name="Network Sponsor" description="ネットワーク")
    //-   v-layout.wrap.px-5.py-3.sponsors
    //-     v-flex.pa-2.md3.sm3.xs4(v-for="sponsor in filteredSponsors('Network')" :key="sponsor.id")
    //-       sponsor(:sponsor="sponsor" :image-aspect-ratio="16/9" title-size="title")
    //- section
    //-   second-heading(name="Sprint Sponsor" description="開発スプリントスポンサー")
    //-   v-layout.wrap.px-5.py-3.sponsors
    //-     v-flex.pa-2.md4.sm4.xs6(v-for="sponsor in filteredSponsors('Sprint Sponsorship')" :key="sponsor.id")
    //-       sponsor(:sponsor="sponsor" :image-aspect-ratio="16/9" title-size="title")
</template>

<style lang="scss" scoped>
.sponsors {
  margin: 0 -8px;
}
</style>


<script>
import sponsors from '@/assets/sponsors.json'

import PageHeader from '@/components/partials/PageHeader'
import SecondHeading from '@/components/parts/SecondHeading'
import Sponsor from '@/components/pages/sponsors/Sponsor'

export default {
  components: { PageHeader, SecondHeading, Sponsor },
  data() {
    return {
      sponsors: sponsors,
      sections: [
        {
          id: 0, name: "Diamond Sponsor", description: "ダイヤモンド", filter: "Diamond",
          ratio: 48/9, size: "headline", showRec: true, class: "md12 sm12 xs12"
        },
        {
          id: 1, name: "Platinum Sponsor", description: "プラチナ", filter: "Platinum",
          ratio: 48/9, size: "headline", showRec: true, class: "md6 sm12 xs12"
        },
        {
          id: 2, name: "Gold Sponsor", description: "ゴールド", filter: "Gold",
          ratio: 16/9, size: "title", showRec: true, class: "md4 sm12 xs12"
        },
        {
          id: 3, name: "Silver Sponsor", description: "シルバー", filter: "Silver",
          ratio: 16/9, size: "title", showRec: false, class: "md3 sm4 xs6"
        },
        {
          id: 4, name: "Lunch Sponsor", description: "ランチ スポンサー", filter: "Lunch",
          ratio: 16/9, size: "title", showRec: false, class: "md3 sm4 xs6"
        },
        {
          id: 5, name: "Breakfast Sponsor", description: "朝食スポンサー", filter: "Breakfast",
          ratio: 16/9, size: "title", showRec: false, class: "md3 sm4 xs6"
        },
        {
          id: 6, name: "Water Sponsor", description: "Waterスポンサー", filter: "Water",
          ratio: 16/9, size: "title", showRec: false, class: "md3 sm4 xs6"
        },
        {
          id: 7, name: "Network Sponsor", description: "ネットワーク スポンサー", filter: "Network",
          ratio: 16/9, size: "title", showRec: false, class: "md3 sm4 xs6"
        },
        {
          id: 8, name: "Media Sponsor", description: "メディア スポンサー", filter: "Media",
          ratio: 16/9, size: "title", showRec: false, class: "md3 sm4 xs6"
        },
        {
          id: 9, name: "Sprint Sponsor", description: "開発スプリントスポンサー", filter: "Sprint",
          ratio: 16/9, size: "title", showRec: false, class: "md4 sm4 xs6"
        },
        {
          id: 10, name: "Tutorial Lecturer Cooperation", description: "チュートリアル特別協力", filter: "Tutrial",
          ratio: 16/9, size: "title", showRec: false, class: "md4 sm4 xs6"
        }
      ]
    }
  },
  methods: {
    filteredSponsors(packageName) {
      return this.sponsors.filter(sponsor => {
        // console.log(
        //   sponsor.package,
        //   packageName,
        //   sponsor.package === packageName
        // )
        return sponsor.package === packageName
      })
    }
  },
  head () {
    return { title: this.$t('sponsor.title') }
  },
}
</script>
