<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-items
        :items="source"
        :height="popoverHeight"
        :selected="selected"
        @update:selected="onUpdateSelected"
      />
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
    popoverHeight: {
      type: String,
    },
    selected: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './var';
.cascader {
    position: relative;
    .trigger {
      height: 32px;
      width: 100px;
      border: 1px solid black;
    }
    .popover-wrapper {
      position: absolute; top: 100%; left: 0; background: white; display: flex;
      @extend .box-shadow;
    }
  }
</style>
