<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="(item, index) in source" :key="index">
        <CascaderItem :sourceItem="item" />
      </div>
    </div>
  </div>
</template>

<script>
import CascaderItem from './cascaderItem.vue'
export default {
  name: 'GuluCascader ',
  props: {
    source: {
      type: Array,
    },
  },
  components: { CascaderItem },
}
</script>

<style lang="scss" scoped>
@import './var';
.cascader {
  border: 1px solid red;
}
</style>
