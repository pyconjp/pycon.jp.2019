<template src="./detail.pug" lang="pug"/>

<script>
  import sessionsMixin from '~/components/Event/mixins/sessionsMixin'
  export default {
    name: 'session-details',
    props: ['category','session','date','no'],
    mixins: [sessionsMixin],

    computed: {
      dates () {
        let _day
        let _time
        if(this.category === 'talk'){
          if( this.date === 1 ){
            _day =  "2019-9-17"
            switch(this.no){
              case 1:
                _time = "13:30"
                break
              case 2:
                _time = "14:30"
                break
              case 3:
                _time = "15:45"
                break
              case 4:
                _time = "16:30"
                break
            }
          }else if( this.date === 2){
            _day =  "2019-9-18"
            switch(this.no){
              case 1:
                _time = "11:15"
                break
              case 2:
                _time = "13:30"
                break
              case 3:
                _time = "14:30"
                break
              case 4:
                _time = "15:45"
                break
              case 5:
                _time = "16:30"
                break
            }
          }
        } else if( this.category === 'lt'){
          //_day = this.session.day === 1 ? "2019-9-17":"2019-9-18"
          _day = this.session.day === 1 ? "2019-9-17 (17:30~) " : "2019-9-18 (17:15~) "
          _time = this.session.no ? "no." + this.session.no : ""
        } else if( this.category === 'poster'){
          _day =  "2019-9-18"
          _time = "15:10 - 15:45"
        }
        return _day + " " + _time
      },
      abstract() {
        return (this.session && this.session.hasOwnProperty('abstract') && this.session.abstruct !="" ) ?  this.session.abstract : "-"
      },
      profile() {
        if(this.category === 'talk'){
          return (this.session && this.session.hasOwnProperty('profile') && this.session.profile !="" ) ?  this.session.profile : "-"
        }else{
        return (this.session && this.session.hasOwnProperty('bio') && this.session.bio !="" ) ?  this.session.bio : "-"
        }
      },
      description() {
        return (this.session && this.session.hasOwnProperty('description') && this.session.description !="" ) ?  this.session.description : "-"
      },
      language() {
        let _lang = ""
        if (this.session && this.session.hasOwnProperty('lang_of_talk') && this.session.lang_of_talk !="" ){
            _lang = this.session.lang_of_talk
            if(_lang == "ja") {
              _lang = this.$i18n.t("event.conference.language.japanese")
            }else if(_lang  == "en"){
              _lang = this.$i18n.t("event.conference.language.english")
          }
        }
        return _lang
      },
      tags() {
        let tags = []
        if(this.session && this.session.hasOwnProperty('tags')){
            let tagStr = String(this.session.tags)
            tags = tagStr.split(',')
            if(Object.keys(tags).length <= 0 || tags[0] === ""){
               tags = false
              }
        }
        return tags
      }
    },
    methods: {
      showDescription() {
        this.more = !this.more
      }
    }
  }
</script>

<style src="./detail.sass" lang="sass" />