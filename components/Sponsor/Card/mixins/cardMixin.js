export default {
  props: {'sponsor': {}, 'index': 0},
  data () {
    return {
      showRecruit: false,
    }
  },
  methods: {
    decideLocale: function(attr_base){
      if(this.$store.state.locale === "en" && this.sponsor[attr_base + '_en']){
        return this.sponsor[attr_base + '_en']
      } else {
        return this.sponsor[attr_base + '_ja']
      }
    }
  },
  computed: {
    imgSrc: function(){
      if (!this.sponsor.imgPath || this.sponsor.imgPath === ""){
        return require("~/assets/img/noImage.png")
      } else {
        return require("~/assets/img/sponsor/" + this.sponsor.imgPath)
      }
    },
    name: function(){
      return this.decideLocale('name')
    },
    siteUrl: function(){
      return this.decideLocale('siteUrl')
    },
    desc: function(){
      return this.decideLocale('description')
    },
    recruitText: function(){
      return this.decideLocale('recruitText')
    },
    recruitUrl: function(){
      return this.decideLocale('recruitUrl')
    }
  }
}
