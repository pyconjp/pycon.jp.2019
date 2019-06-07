<template lang="pug" src="./sessions.pug"/>

<script>
import SessionList from '~/components/Event/SessionList'

  export default {
    name: 'sessions',
    head () {
      return {
        title: 'セッション一覧',
      }
    },
    components: {
      SessionList
    }
  }
</script>

<style src="./sessions.sass" lang="sass" />
