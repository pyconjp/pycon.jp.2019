<template lang="pug">
#sponsors-page
  page-header(en="Sponsors" ja="スポンサー")
  .sponsors-page__container.pa-5
    .text-xs-center
      v-btn.white--text.font-weight-bold.pl-4.my-3(round color="purple") スポンサー募集中
        .pr-3
        v-icon navigate_next
      p.grey--text ※Diamond/Gold/Platinum/Sprint/Waterの募集は締め切りました
    section
      sub-header(en="Diamond Sponsor" ja="ダイヤモンド")
      v-layout(row wrap).sponsors
        v-flex.pa-2(xs12 v-for="sponsor in filteredSponsors('Diamond')" :key="sponsor.id" )
          sponsor(:sponsor="sponsor" :image-aspect-ratio="48/9")
    section
      sub-header(en="Platinum Sponsor" ja="プラチナ")
      v-layout(row wrap).sponsors
        v-flex.pa-2(xs6 v-for="sponsor in filteredSponsors('Platinum')" :key="sponsor.id")
          sponsor(:sponsor="sponsor" :image-aspect-ratio="48/9")
    section
      sub-header(en="Gold Sponsor" ja="ゴールド")
      v-layout(row wrap).sponsors
        v-flex.pa-2(xs4 v-for="sponsor in filteredSponsors('Gold')" :key="sponsor.id")
          sponsor(:sponsor="sponsor" :image-aspect-ratio="16/9" title-size="1rem")
    section
      sub-header(en="Sprint Sponsor" ja="開発スプリントスポンサー")
      v-layout(row wrap).sponsors
        v-flex.pa-2(xs4 v-for="sponsor in filteredSponsors('Sprint Sponsorship')" :key="sponsor.id")
          sponsor(:sponsor="sponsor" :image-aspect-ratio="16/9" title-size="1rem")
    section
      sub-header(en="Silver Sponsor" ja="シルバー")
      v-layout(row wrap).sponsors
        v-flex.pa-2(xs3 v-for="sponsor in filteredSponsors('Silver')" :key="sponsor.id")
          sponsor(:sponsor="sponsor" :image-aspect-ratio="16/9" title-size="1rem")
    section
      sub-header(en="Patron" ja="パトロン")
    section
      sub-header(en="Media Sponsor" ja="メディア")
    section
      sub-header(en="Network Sponsor" ja="ネットワーク")
      v-layout(row wrap).sponsors
        v-flex.pa-2(xs3 v-for="sponsor in filteredSponsors('Network Sponsor')" :key="sponsor.id")
          sponsor(:sponsor="sponsor" :image-aspect-ratio="16/9" title-size="1rem")
</template>

<script>
import json from '@/assets/sponsors.json'

import PageHeader from '@/components/partials/PageHeader'
import SubHeader from '@/components/pages/sponsors/SubHeader'
import Sponsor from '@/components/pages/sponsors/TheSponsor'

export default {
  components: { PageHeader, SubHeader, Sponsor },
  data() {
    return {
      sponsors: json
    }
  },
  methods: {
    filteredSponsors(packageName) {
      return this.sponsors.filter(sponsor => {
        console.log(
          sponsor.package,
          packageName,
          sponsor.package === packageName
        )
        return sponsor.package === packageName
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.sponsors-page__container {
  max-width: 1024px;
  margin: auto;
}

.sponsors {
  margin: 1rem 3rem 2rem;
}
</style>
