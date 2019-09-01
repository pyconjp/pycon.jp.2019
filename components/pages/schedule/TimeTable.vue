<template lang="pug">
.schedule-table.pl-5
    v-layout.tt-row
        v-flex(v-for="(room, idx) in rooms" :key="idx")
            p.subheading.font-weight-bold {{ $t('rooms.' + roomsMaster[room]) }}
    v-layout.tt-row.py-3
        v-flex.text-md-center.text-xs-center.subheading {{ $t("timetable.opening") }}
    v-layout.tt-row.py-3

</template>

<style lang="sass" scoped>
.tt-row
    border-bottom: 1px grey solid
</style>

<script>
import Vue from 'vue'

const roomsMaster = {
    1001: "ab",
    1002: "small",
    1003: "ume",
    1004: "uguisu",
    1005: "d",
    1006: "large",
}

export default Vue.extend({
    name: "time-table",
    props: ['sessions'],
    data()  {
        return {
            rooms: [1001, 1002, 1003, 1004, 1005, 1006],
            roomsMaster: roomsMaster
        }
    },
    created() {
        console.log(this.sessions)
    }
})
</script>