<template>
  <div class="cascaderItem" :style="{ height: height }">
    <div class="left">
      <div
        class="label"
        v-for="(item, index) in items"
        :key="index"
        @click="onClickLabel(item)"
      >
        {{ item.name }}
        <icon class="icon" v-if="item.children" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-items
        ref="right"
        :items="rightItems"
        :height="height"
        :level="level + 1"
        :selected="selected"
        @update:selected="onUpdateSelected"
      />
    </div>
  </div>
</template>

<script>
import Icon from './icon'
export default {
  name: 'GuluCascaderItems',
  components: {
    Icon,
  },
  props: {
    items: {
      type: Array,
    },
    height: {
      type: String,
    },
    selected: {
      type: Array,
      default: () => [],
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      leftSelected: null,
    }
  },
  computed: {
    rightItems() {
      if (this.selected[this.level]) {
        let selected = this.items.filter(
          (item) => item.name === this.selected[this.level].name
        )
        if (
          selected &&
          selected[0].children &&
          selected[0].children.length > 0
        ) {
          return selected[0].children
        }
      }
    },
  },
  methods: {
    onClickLabel(item) {
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      // 单项数据流(关键)
      copy.splice(this.level + 1)
      this.$emit('update:selected', copy)
    },
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './var';
.cascaderItem {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;
  .left {
    overflow: auto;
    height: 100%;
    padding: 0.3em 0;
  }
  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
  }
  .label {
    padding: 0.3em 1em;
    display: flex;
    align-items: center;
    .icon {
      margin-left: 1em;
      transform: scale(0.5);
    }
  }
}
</style>
