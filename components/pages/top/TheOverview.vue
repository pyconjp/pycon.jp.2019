<template lang="pug">
#overview.background
    v-container
        v-layout.my-4
            v-flex.xs12.text-xs-center
                .display-3.primary--text(style="text-decoration: underline;") Overview
        v-card.pa-4
            v-layout.wrap
                v-flex.md9
                    v-layout
                        v-flex.xs12
                            .display-1 What is PyCon JP?
                            .caption.mx-2 PyCon JPとは
                        v-flex.xs12.my-4
                            .body-1 ダミーテキストダミーテキストダミーテキストダミーテキスト
                        v-flex.xs3
                            v-btn(block outline round) 行動規範
                v-flex.md3

</template>

<script>
export default {
    name: "TheOverview"
}
</script>

