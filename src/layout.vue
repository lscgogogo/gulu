<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluLayout",
  data() {
    return {
      layoutClass: {
        hasSider: false,
      },
    };
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "GuluSider") {
        this.layoutClass.hasSider = true;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
  flex: 1;
  &.hasSider {
    flex-direction: row;
  }
}
</style>
