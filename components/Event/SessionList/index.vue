<template src="./list.pug" lang="pug"/>

<script>
  import SessionSummary from '~/components/Event/SessionSummary'
  import SessionDetail from '~/components/Event/SessionDetail'
  import talks from '~/static/contents/talks.json'
  import posters from '~/static/contents/posters.json'
  import lts from '~/static/contents/lightningtalks.json'

  export default {
    name: 'session-list',
    components: {
      SessionSummary,
      SessionDetail
    },
    data() {
      return {
        isFixed: false,
        currentSessionDetail: {
            category: "",
            session: "",
            date: "",
            no: ""
        },
        talks: talks.data, 
        posters: posters.data
      }
    },
    destroyed(){
      // !uikitのmodalを利用すると閉じたあとnodeの位置が変ってしまい、ページ遷移の度に元の位置にあった分のコンポーネントがロードされてしまうのでdestroyedの度に場外（になってるはず）のmodalを殺しておく。
      let _modal = document.getElementById("modal-session")
      if(_modal != undefined) _modal.remove()
    },
    computed: {
      lts() {
        return lts.data.sort((a, b) => {
          if (a.day < b.day) return -1
          if (a.day > b.day) return 1
          if (a.no < b.no) return -1
          if (a.no > b.no) return 1
          return 0
        })
      }
    },
    methods:{
      showDetail (category,session) {
        this.$data.currentSessionDetail.category = category
        this.$data.currentSessionDetail.session = session
        this.$data.currentSessionDetail.date = session.day
        this.$data.currentSessionDetail.no = session.no

        // show UIkit modal
        const uikit = require('uikit')
        uikit.modal('#modal-session').show()
      }
    }
  }
</script>

import sponsors from '~/static/sponsor/data.json'