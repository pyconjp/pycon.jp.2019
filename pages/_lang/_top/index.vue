<template lang="pug" src="./index.pug"/>
<style src="./index.sass" lang="sass" />

<script>
  import { mapGetters, mapActions } from 'vuex'
  import TopHero from '~/components/TopHero'
  import TopKeynote from '~/components/TopKeynote'
  import TopNews from '~/components/TopNews'
  import TopPlace from '~/components/TopPlace'
  import TopOther from '~/components/TopOther'
  import TopSponsor from '~/components/TopSponsor'
  import TopStaff from '~/components/TopStaff'
  import GlobalFooter from '~/components/GlobalFooter'
  //import fetch from 'node-fetch'
  //import convert from 'xml-js'

  export default {
    name: 'top',
    components: {
      TopHero,
      TopKeynote,
      TopNews,
      TopPlace,
      TopOther,
      TopSponsor,
      TopStaff,
      GlobalFooter
    },
    head () {
      return {
        title: this.$t('top.title'),
      }
    },
    mounted(){
      this.FETCH_NEWS()
    },
    computed: {
      ...mapGetters({
        "news": "news_list"
      })
    },
    methods:{
      ...mapActions({
        FETCH_NEWS: "FETCH_NEWS"
      })
    }
  }
</script>
