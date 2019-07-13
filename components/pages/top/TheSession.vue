<template lang="pug">
    #session
        v-container(:class="{'pa-0': $vuetify.breakpoint.smAndDown}")
            v-layout.wrap
                v-flex#development-sprint.xs12.sm12.md6.tertiary.pb-4(
                    :class="{'px-4': $vuetify.breakpoint.smAndDown, 'pr-4': $vuetify.breakpoint.mdAndUp}"
                )
                    .expand-background
                    v-layout.column.mt-2
                        v-flex.my-2.white--text
                            .display-1.font-weight-bold.heading-font Development Sprints
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
                                v-layout.wrap.pa-2
                                    v-flex.xs12.xs12.sm12.md6.px-1
                                        v-btn(block color="primary" round outline)
                                            span 詳細情報
                                            v-icon keyboard_arrow_right
                                    v-flex.xs12.xs12.sm12.md6.px-1
                                        v-btn(block color="primary" round)
                                            span.font-weight-bold 参加申し込み
                                            v-icon keyboard_arrow_right
                v-flex#turorial.xs12.sm12.md6.quaternary.pb-4(
                    :class="{'px-4': $vuetify.breakpoint.smAndDown, 'pl-4': $vuetify.breakpoint.mdAndUp}"
                )
                    .expand-background
                    v-layout.column.mt-2
                        v-flex.my-2.white--text
                            .display-1.font-weight-bold.heading-font Tutorial
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
                                v-layout.wrap.pa-2
                                    v-flex.xs12.sm12.md6.px-1
                                        v-btn(block color="primary" round outline)
                                            span 詳細情報
                                            v-icon keyboard_arrow_right
                                    v-flex.xs12.sm12.md6.px-1
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

