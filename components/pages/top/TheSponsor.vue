<template lang="pug">
#sponsor
    v-container
        v-layout.my-4.wrap
            v-flex.md12.text-xs-center
                first-heading(name="Sponsors")
        h3.text-xs-center.display-1 Diamond
        sponsors-group(:sponsors="diamondSponsors" :xs="12" :sm="6" :md="4")
        h3.text-xs-center.display-1 Platinum
        sponsors-group(:sponsors="platinumSponsors" :xs="8" :sm="4" :md="3")
        h3.text-xs-center.display-1 Gold
        sponsors-group(:sponsors="goldSponsors" :xs="6" :sm="3" :md="2")
        v-layout.my-3.wrap.justify-center
            v-flex.xs12.sm12.md3.text-xs-right.px-2
                v-btn(outline block color="primary" round large)
                    span {{ $t("home.sponsor.list") }}
                    v-icon keyboard_arrow_right
            v-flex.xs12.sm12.md3.text-xs-left.px-2
                v-btn(block color="primary" round large)
                    span {{ $t("home.sponsor.hiring") }}
                    v-icon keyboard_arrow_right
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
            sponsors: sponsorsData,
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
        sprintSponsors() {
            return this.sponsors.filter(sponsor => sponsor.package === "Sprint Sponsorship")
        },
        additionalSponsors() {
            return this.sponsors.filter(sponsor => sponsor.package === "Additional Plans")
        }
    }
}
</script>

