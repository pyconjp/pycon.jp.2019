<template lang="pug">
    v-card(height="100%").pa-1.tt-card
        v-layout.align-top.py-1
            v-flex.shrink
                span(:class="session.lang_of_talk === 'en' ? 'themeBlue' : 'themeRed'").white--text.px-1.font-weight-bold.text-uppercase.caption {{ session.lang_of_talk }}
            v-spacer
            v-flex.shrink
                v-layout.column
                    v-flex(v-if="$vuetify.breakpoint.smAndDown")
                        .caption.blueGrey1--text {{ $t("rooms." + roomsMaster[session.room_id]) }}
                    v-flex
                        .caption.blueGrey1--text {{ session.talk_format }}
        .py-1.caption.font-weight-bold {{ session.title }}
        .py-1.caption.font-weight-thin.grey--text {{ session.name }}
        v-layout.justify-end.py-2(v-if="session.audience_level")
            v-flex.shrink.caption.font-weight-thin.grey--text
                span {{ $t('timetable.level') }} :
                span.ml-1.px-1.level(:class="ClassForLevel(session.audience_level)") {{ session.audience_level }}
        .pt-3.pb-3
        .bottom.py-1(style="width: 95%")
            v-divider
            v-dialog(v-model="dialog")
                template(#activator="{ on }")
                    a(v-on="on")
                        .pt-1.text-md-center.text-xs-center {{ $t("timetable.detail") }}
                SessionModalWindow(:session="session" @close="dialog = false")
</template>

<style lang="sass" scoped>
.tt-card
    height: 100%
    position: relative
.bottom
    position: absolute
    bottom: 5px
.v-dialog__container
    display: none !important
.level.all
    border: 1px #76b3f2 solid
    color: #76b3f2
.level.beginner
    border: 1px #6ab26a solid
    color: #6ab26a
.level.intermediate
    border: 1px #f0980c solid
    color: #f0980c
.level.advanced
    border: 1px #ea4d6b solid
    color: #ea4d6b
</style>

<script>
import { roomsMaster } from "@/plugins/constants"

import SessionModalWindow from '@/components/parts/SessionModalWindow'

export default {
    name: "timetable-card",
    props: ["session"],
    components: { SessionModalWindow },
    methods: {
        ClassForLevel(level) {
            switch (level) {
                case "All":
                    return "all"
                case "Beginner":
                    return "beginner"
                case "Intermediate":
                    return "intermediate"
                case "Advanced":
                    return "advanced"
                default:
                    break;
            }
        }
    },
    data() {
        return {
            dialog: false,
            roomsMaster: roomsMaster
        }
    }
}
</script>