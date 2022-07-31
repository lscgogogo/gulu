<template>
  <div class="row" :style="colStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluRow",
  props: {
    gutter: {
      type: [Number, String],
    },
    position: {
      type: String,
      validator(value) {
        return ["left", "right", "center"].includes(value);
      },
    },
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    });
  },
  computed: {
    colStyle() {
      return {
        marginLeft: -this.gutter / 2 + "px",
        marginRight: -this.colStylegutter / 2 + "px",
      };
    },
    rowClass() {
         return [this.align && `align-${position}`]
    },
  },
};
</script>


<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  .align-left{
       justify-content: flex-start;
  }
  .align-right{
       justify-content: flex-end;
  }
  .align-center{
       justify-content: center;
  }
}
</style>
