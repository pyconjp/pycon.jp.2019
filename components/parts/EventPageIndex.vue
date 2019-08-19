<template lang="pug">
section.my-5.page-index
    v-container.py-0
        .page-index__title.title.font-weight-bold.themeColor3--text.heading-font Page Index
        .page-index__indexes.blueGrey2
            .page-index__index.first
                ul
                    li(v-for="index in slicedIndexes[0]" :key="index.title ? index.title : index")
                        template(v-if="index.title")
                            span.text2.white--text.px-2.mr-2 {{ index.tag }}
                            span {{ index.title }}
                        template(v-else) {{ index }}
            .page-index__index.second(v-if="")
                ul
                    li(v-for="index in slicedIndexes[1]" :key="index.title ? index.title : index")
                        template(v-if="index.title")
                            span.text2.white--text.px-2.mr-2 {{ index.tag }}
                            span {{ index.title }}
                        template(v-else) {{ index }}

</template>

<script>
export default {
  props: {
    indexes: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    slicedIndexes() {
      if (this.indexes.length > 5) {
        return [
          this.indexes.slice(0, 5),
          this.indexes.slice(5, this.indexes.length)
        ]
      } else {
        return [this.indexes.slice(), []]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';

.page-index {
  &__title {
    margin-bottom: 0.5em;
  }

  &__indexes {
    display: flex;
    flex-direction: row;
    padding: 47px 30px;
    line-height: 36px;

    @media #{$display-breakpoint-md-and-down} {
      flex-direction: column;
    }
  }

  &__index {
    margin-right: 96px;

    @media #{$display-breakpoint-md-and-down} {
      margin-right: auto;
    }

    ul {
      padding: 0;
      li {
        list-style: none;
        vertical-align: middle;

        &::before {
          content: '';
          display: inline-block;
          height: 1px;
          width: 16px;
          margin-right: 13px;
          background-color: $themeColor0;
        }
      }
    }
  }
}
</style>
