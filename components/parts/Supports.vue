<template lang="pug">
section.my-5.support.blueGrey2
    v-container
        hs Support
        v-layout(justify-space-between fill-height :wrap="$vuetify.breakpoint.smAndDown")
            v-flex(xs12 md4 :class="{'mr-3': $vuetify.breakpoint.mdAndUp, 'mb-2': $vuetify.breakpoint.smAndDown}")
                v-card.flex-card(height="100%")
                    v-img(max-height="20vh" :src="require('@/assets/images/eating.png')")
                    .card-content
                        h3 {{ $t('events.supports.food.title') }}
                        p.themeColor3--text.font-weight-bold {{ $t('days.day1') }}
                        p {{ $t('events.supports.food.day1') }}
                        p.themeColor3--text.font-weight-bold {{ $t('days.day2') }}
                        p {{ $t('events.supports.food.day2') }}
            v-flex(xs12 md4 :class="{'mx-3': $vuetify.breakpoint.mdAndUp, 'my-2': $vuetify.breakpoint.smAndDown}")
                v-card.flex-card(height="100%")
                    v-img(max-height="20vh" :src="require('@/assets/images/nursery.png')")
                    .card-content
                        h3 {{ $t('events.supports.nursery.title') }}
                        p {{ $t('events.supports.nursery.content') }}
                        v-spacer
                        button-with-arrow(color="themeColor1" outline :dark="true" :block="false" target="_blank" href="https://cscs.alpha-co.com/event_yoyaku_kihon_form.jsp?E=1712898*9X7Et") {{ $t('events.supports.nursery.to_apply') }}
            v-flex(xs12 md4 :class="{'ml-3': $vuetify.breakpoint.mdAndUp, 'mt-2': $vuetify.breakpoint.smAndDown}")
                v-card.flex-card(height="100%")
                    v-img(max-height="20vh" :src="require('@/assets/images/support-local.png')")
                    .card-content
                        h3 {{ $t('events.supports.distant.title') }}
                        p {{ $t('events.supports.distant.content') }}
                        v-spacer
                        button-with-arrow(color="themeColor1" outline :dark="true" :block="false"  href="#" disabled) {{ $t('events.supports.distant.to_apply') }}
</template>

<script>
import SectionHeader from '@/components/parts/SectionHeader'
import ButtonWithArrow from '@/components/parts/ButtonWithArrow'

export default {
  components: {
    ButtonWithArrow,
    hs: SectionHeader
  }
}
</script>

<style lang="scss" scoped>
.flex-card {
  display: flex;
  flex-direction: column;

  .v-image.v-responsive {
    flex: initial;
  }

  .card-content {
    flex: 1;
    padding: 16px;
    display: flex;
    flex-direction: column;

    .spacer {
      flex: 1;
    }
  }
}
</style>
