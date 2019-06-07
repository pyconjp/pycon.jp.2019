<template src="./table.pug" lang="pug"/>

<script>
import { mapGetters, mapActions } from 'vuex'
import SessionSummary from '~/components/Event/SessionSummary'
import SessionDetail from '~/components/Event/SessionDetail'
import talks from '~/static/contents/talks.json'

export default {
  name: 'time-table',
  data(){
    return{
      isFixed: false,
      currentTab: "day-1",
      rooms: {
              "dayOne": ["ra","rb","rc","rd1","re","rf"],
              "dayTwo": ["ra","rb","rc","rd2","rd3","re","rf"]
              },
      currentTalkDetail: {
          category: "talk",
          talk: "",
          date: "",
          no: ""
      },
      talks: talks.data
    }
  },
  components: {
    SessionSummary,
    SessionDetail
  },
  destroyed() {
    let _modal = document.getElementById("modal-session")
    if(_modal != undefined) _modal.remove()
  },
  methods:{
    showDetail (day,no,room) {
      const talk = this.getTalk(day,no,room)
      this.$data.currentTalkDetail.talk = talk
      this.$data.currentTalkDetail.date = day
      this.$data.currentTalkDetail.no = no

      // show UIkit modal
      const uikit = require('uikit')
      uikit.modal('#modal-session').show()
    },
    getTalk (day,no,room) {
      let currentDayTrack = this.talks.filter( (item, index) => {
                                                if(parseInt(item.day) === parseInt(day)) return true
                                                })
      if(currentDayTrack[0]){
          return currentDayTrack.filter( (track) => {
                                          if(parseInt(track.no) === parseInt(no)  && String(track.room_id) === String(room) ) return true
                                          })[0]
      }
      return ""
    },
    changeTab (evt) {
      this.$data.currentTab = evt.currentTarget.getAttribute('data-tab')
    },
    parallelScroll (evt, el) {
      let tableHeader = this.$refs[this.$data.currentTab]
      if( tableHeader != undefined) {
        if(window.scrollY > (112+90)){
          const sLeft = el.scrollLeft
          tableHeader.scrollLeft = sLeft
        }else{
          tableHeader.scrollLeft = 0
        }
      }
    },
    fixedHead (evt, el) {
      let tableHeader = this.$refs[this.$data.currentTab]
      let windowWidth = window.innerWidth
      if( tableHeader != undefined) {
        if(windowWidth > 640  && (window.scrollY > (112+89))){
          this.$data.isFixed = true
          const sLeft = el.scrollLeft
          tableHeader.scrollLeft = sLeft
        }else{
          this.$data.isFixed = false
          tableHeader.scrollLeft = 0
        }
      }
    }
  }
}
</script>

<style src="./table.sass" lang="sass"/>