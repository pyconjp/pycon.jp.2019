<template lang="pug">
#top
    key-visual
    //- session
    news
    //- overview
    //- conference
    //- access
    //- support
    sponsor
</template>

<script>
import TheKeyVisual from "@/components/pages/top/TheKeyVisual"
import TheSession from "@/components/pages/top/TheSession"
import TheNews from "@/components/pages/top/TheNews"
import TheOverview from "@/components/pages/top/TheOverview"
import TheConference from "@/components/pages/top/TheConference"
import TheAccess from "@/components/pages/top/TheAccess"
import TheSupport from "@/components/pages/top/TheSupport"
import TheSponsor from "@/components/pages/top/TheSponsor"


export default {
  components: {
    "key-visual": TheKeyVisual,
    "session": TheSession,
    "news": TheNews,
    "overview": TheOverview,
    "conference": TheConference,
    "access": TheAccess,
    "support": TheSupport,
    "sponsor": TheSponsor
  },
  head () {
    return { title: this.$t('home.title') }
  },
  async created() {
    // News
    // const url = "https://script.googleusercontent.com/macros/echo?user_content_key=ZuppFUvp3G9UxR6aKZgBgrPE8vTQf7A4sOk7z8ph6UhBwb2PlKVjstNi6-DZzJbuHWvbCKqjK6wu0_qLhFwJLL_zwJge3Cckm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJ9mZKgggRSOURRQ0WvbGHmV5NYIYqOUFVR_DbOCwbvdNONDik88y9c0VZXY9HZEGr0uJ9YYKCWC&lib=MnV3PmCdam9EutRvBBsyupNVJGv4Fseyb"
    // const resp = await this.$axios.get(url)
    // console.log(resp)
  }
}
</script>