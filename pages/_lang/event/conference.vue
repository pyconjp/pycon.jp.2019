<template lang="pug" src="./conference.pug"/>

<script>
import TimeTable from '~/components/Event/TimeTable'

  export default {
    name: 'conference',
    head () {
      return {
        title: this.$t('event.conference.title'),
      }
    },
    components: {
      TimeTable
    }
  }
</script>

<style src="./conference.sass" lang="sass" />
