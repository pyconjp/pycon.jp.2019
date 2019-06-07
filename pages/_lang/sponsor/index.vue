<template lang="pug">
#pycon-sponsor
  div.uk-container.sponsor-sections
    diamond(:sponsor="diamondSponsor")
    platinum(:sponsors="platinumSponsors")
    gold(:sponsors="goldSponsors")
    sprint(:sponsors="sprintSponsors")
    silver(:sponsors="silverSponsors")
    breakfast(:sponsors="breakfastSponsors")
    lunch(:sponsors="lunchSponsors")
    drink(:sponsors="drinkSponsors")
    water(:sponsors="waterSponsors")
    lanyard(:sponsors="lanyardSponsors")
    patron(:sponsors="patron")
    media(:sponsors="mediaSponsors")
    network(:sponsors="networkSponsors")
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import Diamond from '~/components/Sponsor/Diamond';
import Platinum from '~/components/Sponsor/Platinum';
import Gold from '~/components/Sponsor/Gold';
import Sprint from '~/components/Sponsor/Sprint';
import Silver from '~/components/Sponsor/Silver';
import Breakfast from '~/components/Sponsor/Breakfast';
import Lunch from '~/components/Sponsor/Lunch';
import Drink from '~/components/Sponsor/Drink';
import Water from '~/components/Sponsor/Water';
import Lanyard from '~/components/Sponsor/Lanyard';
import Patron from '~/components/Sponsor/Patron';
import Media from '~/components/Sponsor/Media';
import Network from '~/components/Sponsor/Network';
import sponsors from '~/static/sponsor/data.json'

export default {
  name: 'sponsor',
  components: {
    Diamond,
    Platinum,
    Gold,
    Sprint,
    Silver,
    Breakfast,
    Lunch,
    Drink,
    Water,
    Lanyard,
    Patron,
    Media,
    Network
  },
  data () {
    return { sponsors: sponsors.data }
  },
  computed: {
    diamondSponsor() { return this.sponsors.filter(s => s.package == "Diamond")[0] || {} },
    platinumSponsors() { return this.sponsors.filter(s => s.package == "Platinum") },
    goldSponsors() { return this.sponsors.filter(s => s.package == "Gold") },
    sprintSponsors() { return this.sponsors.filter(s => s.package == "Sprint") },
    silverSponsors() { return this.sponsors.filter(s => s.package == "Silver") },
    breakfastSponsors() { return this.sponsors.filter(s => s.package == "Breakfast") },
    lunchSponsors() { return this.sponsors.filter(s => s.package == "Lunch") },
    drinkSponsors() { return this.sponsors.filter(s => s.package == "Drink") },
    waterSponsors() { return this.sponsors.filter(s => s.package == "Water") },
    lanyardSponsors() { return this.sponsors.filter(s => s.package == "Lanyard") },
    patron() { return this.sponsors.filter(s => s.package == "Patron") },
    mediaSponsors() { return this.sponsors.filter(s => s.package == "Media") },
    networkSponsors() { return this.sponsors.filter(s => s.package == "Network") }
  },
  methods: {
    ...mapActions({
      FETCH_SPONSOR: "FETCH_SPONSOR"
    })
  },
  head () {
    return {
      title: this.$t('sponsor.title')
    }
  }
}
</script>

<style lang="sass">
#pycon-sponsor
  margin-top: 3rem
  @media (max-width: $breakpoint-small)
    margin-top: 0
  section
    &:last-child
      margin-bottom: 10rem
      @media (max-width: $breakpoint-small)
        margin-bottom: 6rem

.sponsor-sections
  padding-top: 30px
  &> *
    margin-bottom: 10rem
    @media (max-width: $breakpoint-small)
      margin-bottom: 6rem
  h2
    @media (max-width: $breakpoint-small)
      margin: 10px 20px 3rem
      font-size: 36px
  h3
    margin: 0

.img
  width: auto
  height: auto
  max-width: 100%
  max-height: 100%

.img-block
  display: flex
  justify-content: center
  align-items: center
  padding: 20px
</style>
