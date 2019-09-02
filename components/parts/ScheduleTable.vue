<template lang="pug">
table.schedule-table
    tbody
        tr(v-if="day14")
            td
                | 2019.09.14（{{ $t('weekday.sat') }}） {{ day14Time }}
                br
                slot(name="day14-detail")
        tr(v-if="day15")
            td
                | 2019.09.15（{{ $t('weekday.sun') }}） {{ day15Time }}
                br
                slot(name="day15-detail")
        tr(v-if="day16")
            td.themeColor3--text.font-weight-bold {{ $t('days.day1') }}
            td
                | 2019.09.16（{{ $t('weekday.mon') }}） {{ day16Time }}
                br
                slot(name="day16-detail")
        tr(v-if="day17")
            td.themeColor3--text.font-weight-bold {{ $t('days.day2') }}
            td
                | 2019.09.17（{{ $t('weekday.tue') }}） {{ day17Time }}
                br
                slot(name="day17-detail")
</template>

<script>
export default {
  props: {
    day14: {
      type: Boolean,
      default: false
    },
    day15: {
      type: Boolean,
      default: false
    },
    day16: {
      type: Boolean,
      default: false
    },
    day17: {
      type: Boolean,
      default: false
    },
    day14Time: {
      type: String
    },
    day15Time: {
      type: String
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
