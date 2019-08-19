<template lang="pug">
table.schedule-table
    tbody
        tr(v-if="day16")
            td.themeColor3--text.font-weight-bold 1日目
            td
                | 2019.09.16（月・祝） {{ day16Time }}
                br
                slot(name="day16-detail")
        tr(v-if="day17")
            td.themeColor3--text.font-weight-bold 2日目
            td
                | 2019.09.17（火） {{ day17Time }}
                br
                slot(name="day17-detail")
</template>

<script>
export default {
  props: {
    day16: {
      type: Boolean,
      default: false
    },
    day17: {
      type: Boolean,
      default: false
    },
    day16Time: {
      type: String
    },
    day17Time: {
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
