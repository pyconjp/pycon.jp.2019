<template lang="pug">
#page-header.pt-5.pb-3.text-xs-center(:class="color", :style="{opacity: opacity}")
  h1.display-2.heading-font(:class="`${enColor}--text`", :style="{opacity: enOpacity}") {{ en }}
  p.subheading.py-2(:class="`${jaColor}--text`", :style="{opacity: jaOpacity}") {{ ja }}
  .underbar(:class="`${barColor}`", :style="{opacity: barOpacity}")
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    ja: String,
    en: String,
    // 色と透明度の組み合わせが多すぎて苦しい
    // darkかlightか(背景が濃色or淡色)で切り分けした方が良いかもしれない
    color: {
      default: 'blueGrey2'
    },
    barColor: {
      default: 'themeColor3'
    },
    enColor: {
      default: 'themeColor3'
    },
    jaColor: {
      default: 'themeColor3'
    },
    opacity: {
      default: '1'
    },
    barOpacity: {
      default: '1'
    },
    enOpacity: {
      default: '1'
    },
    jaOpacity: {
      default: '0.5'
    }
  }
}
</script>

<style lang="scss" scoped>
#page-header {
  position: relative;

  .underbar {
    display: block;
    height: 5px;
    width: 160px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
