<template lang="pug">
#staff-page
  page-header(en="Staff" ja="スタッフ")
  .container.pt-4
    .staffs
      second-heading(:name="$t('staff.title')")
      section.team-section(
        v-for="team in teams" :key="team.id"
        :class="{'px-5 my-5': $vuetify.breakpoint.mdAndUp}"
      )
        h2.headline.font-weight-bold.mt-5.mb-3.text-xs-center.text-md-left {{ $t(`staff.teams.${team.name}`) }}
        v-layout(row wrap)
          v-flex(v-for="staff in filteredStaffs(team.name)" :key="staff.id" md4 sm6 xs12)
            staff-card(:staff="staff")
    .recruitment
      second-heading(:name="$t('staff.recruitment.title')")
      .recruit-box(
        :class="{'px-5 my-5': $vuetify.breakpoint.mdAndUp}"
      ) {{ $t('staff.recruitment.abstract') }}
        a(href="https://pyconjp.blogspot.com/2019/08/2019-conf-day-staff.html" target="_blank")
          v-layout.staff(:class="{'mx-0': $vuetify.breakpoint.smAndDown}").my-3.py-3.align-center.wrap
            v-flex.xs12.md4.text-md-center.pa-3.right-border
              v-layout.justify-center
                v-flex.text-xs-right.text-md-right.pr-1
                  v-icon(medium).px-2 supervised_user_circle
                v-flex
                  span.themeColor3--text.headline.font-weight-bold {{ $t("home.news.staff") }} 
            v-flex.xs10.md7.text-md-left.py-3.pl-4
              .body-1.themeColor3--text {{ $t("home.news.staff_desc") }}
            v-flex.xs1.md1.text-xs-right.text-md-right(
              :class="{'px-0': $vuetify.breakpoint.smAndDown, 'px-4': $vuetify.breakpoint.mdAndUp}"
            )
              v-icon(large) keyboard_arrow_right
        v-layout(
          :class="{'mx-0': $vuetify.breakpoint.smAndDown}"
        ).py-1
          v-flex
            .body-2(v-html='$t("home.news.staff_note")') 
</template>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';

.team-section {
  h2 {
    color: $themeColor3;
  }
}
.staff {
  border: solid 3px #5970A5;
}
.right-border {
  border-right: solid 1px #E9EBF0;
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
          name: 'jimukyoku'
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
          name: 'noc'
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
    return { title: this.$t('staff.title') }
  },
}
</script>
