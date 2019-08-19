<template lang="pug">
table.schedule-table
    tbody
        tr(v-if="day1")
            td.themeColor3--text.font-weight-bold 1日目
            td
                | 2019.09.16（月・祝） {{ day1Time }}
                br
                slot(name="day1-detail")
        tr(v-if="day2")
            td.themeColor3--text.font-weight-bold 2日目
            td
                | 2019.09.17（火） {{ day2Time }}
                br
                slot(name="day2-detail")
</template>

<script>
export default {
  props: {
    day1: {
      type: Boolean,
      default: false
    },
    day2: {
      type: Boolean,
      default: false
    },
    day1Time: {
      type: String
    },
    day2Time: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.schedule-table {
  td {
    padding: 6px 0;
    vertical-align: top;

    &:first-of-type {
      padding-right: 12px;
      white-space: nowrap;
    }
  }
}
</style>
