export default {
  computed: {
    room () {
      return (this.session && this.session.hasOwnProperty('room')) ?  this.session.room : ""
    },
    talk_format () {
      return (this.session && this.session.hasOwnProperty('talk_format')) ?  this.session.talk_format + "min" : ""
    },
    title () {
      return (this.session && this.session.hasOwnProperty('title')) ?  this.session.title : ""
    },
    name () {
      return (this.session && this.session.hasOwnProperty('name')) ?  this.session.name : ""
    },
    level () {
      return (this.session && this.session.hasOwnProperty('audience_level') && this.session.audience_level != "") ?  this.session.audience_level : "-"
    },
    slide_language () {
      let _lang = ""
      if (this.session && this.session.hasOwnProperty('lang_of_slide') && this.session.lang_of_slide !="" ){
          _lang = this.session.lang_of_slide
          if(_lang == "ja") {
            _lang = this.$i18n.t("event.conference.language.japanese")
          }else if(_lang  == "en"){
            _lang = this.$i18n.t("event.conference.language.english")
        }else if(_lang == "ja_en")
            _lang = this.$i18n.t("event.conference.language.multi")
      }
      return _lang
    }
  }
}
