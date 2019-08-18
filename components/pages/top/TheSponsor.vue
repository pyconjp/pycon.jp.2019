<template lang="pug">
#sponsor
    v-container
        v-layout.my-4.wrap
            v-flex.md12.text-xs-center
                first-heading(name="Sponsors")
        sponsors-group(:sponsors="diamondSponsors" :xs="12" :sm="12" :md="5")
        sponsors-group(:sponsors="platinumSponsors" :xs="6" :sm="6" :md="4")
        sponsors-group(:sponsors="goldSponsors" :xs="4" :sm="4" :md="3")
        sponsors-group(:sponsors="silverSponsors" :xs="4" :sm="4" :md="2")
        //- sponsors-group(:sponsors="sprintSponsors" :xs="12" :sm="6" :md="3")
        //- sponsors-group(:sponsors="networkSponsors" :xs="4" :sm="4" :md="2")
        sponsors-group(:sponsors="otherSponsors" :xs="4" :sm="4" :md="3")
        //- v-layout.my-3.wrap.justify-center
        //-     v-flex.xs12.sm12.md3.text-xs-right.px-2
        //-         v-btn(outline block color="apply" round large)
        //-             span {{ $t("home.sponsor.list") }}
        //-             v-icon keyboard_arrow_right
        //-     v-flex.xs12.sm12.md3.text-xs-left.px-2
        //-         v-btn(block color="apply" href="https://pyconjp.blogspot.com/2019/04/sponsor-application.html" target="_blank" round large)
        //-             span {{ $t("home.sponsor.hiring") }}
        //-             v-icon keyboard_arrow_right
</template>

<script>
import FirstHeading from "@/components/parts/FirstHeading"
import SponsorsGroup from "@/components/parts/SponsorsGroup"
import sponsorsData from "@/assets/sponsors"

export default {
    name: "TheSponsor",
    components: {
        "first-heading": FirstHeading,
        "sponsors-group": SponsorsGroup,
    },
    data() {
        return {
            sponsors: sponsorsData.filter(sponsor => sponsor.logoImage),
        }
    },
    computed: {
        diamondSponsors() {
            return this.sponsors.filter(sponsor => sponsor.package === "Diamond")
        },
        platinumSponsors() {
            return this.sponsors.filter(sponsor => sponsor.package === "Platinum")
        },
        goldSponsors() {
            return this.sponsors.filter(sponsor => sponsor.package === "Gold")
        },
        silverSponsors() {
            return this.sponsors.filter(sponsor => sponsor.package === "Silver")
        },
        // sprintSponsors() {
        //     return this.sponsors.filter(sponsor => sponsor.package === "Sprint")
        // },
        // networkSponsors() {
        //     return this.sponsors.filter(sponsor => sponsor.package === "Network")
        // },
        otherSponsors() {
            return this.sponsors.filter(sponsor => ["Lunch", "Breakfast", "Water", "Network", "Sprint"].includes(sponsor.package))
        }
    }
}
</script>

