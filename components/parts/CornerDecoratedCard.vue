<template lang="pug">
v-card(flat).pa-4.card
    .corner-left-top
    .corner-right-bottom
    slot
</template>

<style lang="scss" scoped>
.card {
  border: solid 1px #e9ebf0;
  position: relative;
}
.corner-left-top,
.corner-right-bottom {
  position: absolute;
  width: 30px;
  height: 30px;
}
.corner-left-top {
  top: -2px;
  left: -2px;
  border-left: solid 3px #eba4c3;
  border-top: solid 3px #eba4c3;
}
.corner-right-bottom {
  right: -2px;
  bottom: -2px;
  border-right: solid 3px #e1a7c2;
  border-bottom: solid 3px #e1a7c2;
}
</style>