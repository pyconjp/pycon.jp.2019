<template lang="pug">
v-layout.wrap.justify-center.pb-4
    v-flex(v-for="sponsor in sponsors" :key="sponsor.id" :class="[`xs${xs}`, `sm${sm}`, `md${md}`]").pa-2
        v-card.pa-2
            v-img(v-if="sponsor.logoIImage" :src="require(`@/assets/images/logos/${sponsor.logoIImage}`)" :aspect-ratio="3/2" contain)
            v-responsive(v-else :aspect-ratio="3/2")
                v-layout(align-center justify-center row fill-height)
                        v-card-text
                            p.text-xs-center.font-weight-bold.small {{sponsor.name}}

</template>

<script>
export default {
  props: {
    sponsors: {
      type: Array,
      required: true
    },
    xs: {
      type: Number,
      required: true
    },
    sm: {
      type: Number,
      required: true
    },
    md: {
      type: Number,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
p {
    margin: 0;
}

.small {
    font-size: 10px;
}
</style>
