<template lang="pug">
    #key-visual
        v-container
            v-layout
                v-flex.md6.left
                    v-layout.column
                        v-flex
                            v-img(src="/images/square_logo.png" width="500px")
                        v-flex.my-4.text-xs-left
                            .headline
                                span.primaryText--text ──── 2019.09.14 - 17
                                span.ml-4
                                    v-icon(color="twitter") fab fa-twitter
                                span.ml-2.twitter--text #pyconjp
                v-flex.md6
                    v-layout.column.right-padding
                        v-flex.display-2
                            span.primaryText--text.font-weight-bold Conference
                        v-flex.caption
                            span.primaryText--text カンファレンス
                        v-flex.py-4
                            span.display-2 09.16
                            span.title.ml-2 月・祝
                            span.display-1.mx-4.grey--text.grey--lighten -
                            span.display-2 09.17
                            span.title.ml-2 火
                        v-flex
                            v-icon.material-icons-outlined location_on
                            span.title.ml-2 会場: 大田区産業プラザ PiO
                        v-flex.text-xs-center.my-2.pa-4
                            v-btn(block color="primary" large round style="height: 60px;")
                                span.title.font-weight-bold 参加申し込み
                                v-icon keyboard_arrow_right
                        v-flex.text-xs-center.mt-4.mb-2.subheading
                            v-layout.align-center.justify-center
                                v-flex.xs12
                                    v-icon(color="secondaryText") tag_faces
                                    span.secondaryText--text.ml-2.font-weight-bold 子供向けワークショップも同時開催！
                        v-flex.text-xs-center
                            v-card(color="secondaryText").pa-3.text-xs-left
                                span.title.white--text Youth Coder Workshop
                                v-btn(color="white" block large)
                                    v-flex.align-end
                                        span.title 09.16
                                        span.caption.ml-2 月・祝
                                    v-spacer
                                    span.secondary--text.subheading.font-weight-bold 詳細情報
                                    v-icon.secondary--text.ml-2 keyboard_arrow_right
</template>

<style lang="sass" scoped>
.right-padding
    padding: 40px 90px !important
.left
    border-right: solid 1px #E9EBF0
</style>


<script>
export default {
    name: "TheKeyVisual"
}
</script>
