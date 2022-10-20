<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover" v-if="popoverVisible">
      <cascader-items :items="source" />
    </div>
  </div>
</template>

<script>
 import CascaderItems from './cascader-items'
export default {
  name: 'GuluCascader',
  components: { CascaderItems },
  data() {
    return {
      popoverVisible: false,
    }
  },
  props: {
    source: {
      type: Array,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './var';
.cascader {
  .trigger {
    border: 1px solid red;
    height: 32px;
    width: 100px;
  }
  .popover {
    border: 2px solid green;
    height: 200px;
    display: flex;
    .label {
      white-space: nowrap;
    }
  }
}
</style>
