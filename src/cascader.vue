<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover" v-if="popoverVisible">
      <div class="level1">
        <div
          class="label"
          v-for="(item1, index) in source"
          :key="index"
          @click="level1Selected = item1"
        >
          {{ item1.name }}
        </div>
      </div>
      <div class="level2">
        <div
          class="label"
          v-for="(item2, index) in level2Items"
          :key="index"
          @click="level2Selected = item2"
        >
          {{ item2.name }}
        </div>
      </div>
      <div class="level3">
        <div class="label" v-for="(item3, index) in level3Items" :key="index">
          {{ item3.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CascaderItem from "./cascaderItem.vue";
export default {
  name: "GuluCascader",
  data() {
    return {
      popoverVisible: false,
      level1Selected: null,
      level2Selected: null,
    };
  },
  props: {
    source: {
      type: Array,
    },
  },
  components: { CascaderItem },
  computed: {
    level2Items() {
      if (this.level1Selected) {
        return this.level1Selected.children;
      } else {
        return [];
      }
    },
    level3Items() {
      if (this.level2Selected) {
        return this.level2Selected.children;
      } else {
        return [];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./var";
.cascader {
  .trigger {
    border: 1px solid red;
    height: 32px;
    width: 100px;
  }
  .popover {
    border: 2px solid red;
    height: 200px;
    width: 80px;
    position: relative;
    .level1 {
      .level2 {
        position: absolute;
        left: 100%;
        top: 0;
        width: 100%;
        display: none;
      }
      &:hover .level2 {
        display: block;
      }
    }
  }
}
</style>
