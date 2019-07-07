<template lang="pug">
    #session
        v-container
            v-layout
                v-flex#development-sprint.md6.tertiary.pr-4.pb-4
                    .expand-background
                    v-layout.column.mt-2
                        v-flex.my-2.white--text
                            .display-1.font-weight-bold Development Sprints
                            .subheading 開発者スプリント
                        v-flex
                            v-card.pa-3
                                v-card-title.align-end
                                    span.display-1 09.14 
                                    span.mx-2 土
                                    v-icon location_on
                                    span 会場HDE
                                v-card-text
                                    span 短期集中型のソフトウェア開発イベントです。
                                v-layout.wrap
                                    v-flex.xs6.pa-2
                                        v-btn(block color="primary" round outline)
                                            span 詳細情報
                                            v-icon keyboard_arrow_right
                                    v-flex.xs6.pa-2
                                        v-btn(block color="primary" round)
                                            span.font-weight-bold 参加申し込み
                                            v-icon keyboard_arrow_right
                v-flex#turorial.md6.quaternary.pl-4.pb-4
                    .expand-background
                    v-layout.column.mt-2
                        v-flex.my-2.white--text
                            .display-1.font-weight-bold Tutorial
                            .subheading チュートリアル
                        v-flex
                            v-card.pa-3
                                v-card-title.align-end
                                    span.display-1 09.15
                                    span.mx-2 日
                                    v-icon location_on
                                    span 会場: 大田区産業プラザ PiO
                                v-card-text
                                    span 初心者向けのイベントです。
                                v-layout.wrap
                                    v-flex.xs6.pa-2
                                        v-btn(block color="primary" round outline)
                                            span 詳細情報
                                            v-icon keyboard_arrow_right
                                    v-flex.xs6.pa-2
                                        v-btn(block color="primary" round)
                                            span.font-weight-bold 参加申し込み
                                            v-icon keyboard_arrow_right
</template>

<style lang="sass" scoped>
.expand-background
    position: absolute
    width: 500%
    height: 100%

#development-sprint
    position: relative
    .expand-background
        right: 100%
        background-color: #998CBA

#turorial
    position: relative
    .expand-background
        left: 100%
        background-color: #E1A7C2



</style>


<script>
export default {
    name: "TheSession"
}
</script>

