<template lang="pug">
#staff-page
  page-header(en="Staffs" ja="スタッフ")
  .container.pt-4
    second-heading(name="スタッフ一覧")
    section.team-section.px-5(v-for="team in teams" :key="team.id")
      h2.display-1.font-weight-bold.mt-5.mb-3 {{ $t(`staffs.teams.${team.name}`) }}
      v-layout(row wrap)
        v-flex(v-for="staff in filteredStaffs(team.name)" :key="staff.id" md4 sm6 xs12)
          staff-card(:staff="staff")
</template>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';

.team-section {
  h2 {
    color: $themeColor3;
  }
}
</style>


<script>
import staffs from '@/assets/staffs.json'

import PageHeader from '@/components/partials/PageHeader'
import SecondHeading from '@/components/parts/SecondHeading'
import StaffCard from '@/components/pages/staffs/StaffCard'

export default {
  components: { PageHeader, SecondHeading, StaffCard },
  data() {
    return {
      staffs: staffs,
      teams: [
        {
          id: 0,
          name: 'cxo'
        },
        {
          id: 1,
          name: 'contents'
        },
        {
          id: 2,
          name: 'sponsor'
        },
        {
          id: 3,
          name: 'design'
        },
        {
          id: 4,
          name: 'system'
        },
        {
          id: 5,
          name: 'venue'
        },
        {
          id: 6,
          name: 'conbu'
        }
      ]
    }
  },
  methods: {
    filteredStaffs(teamName) {
      return this.staffs.filter(staff => {
        return staff.team === teamName
      })
    }
  },
  head () {
    return { title: this.$t('staffs.title') }
  },
}
</script>
