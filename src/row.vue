<template>
  <div
    class="row"
    :style="colStyle"
  >
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
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    });
  },
  computed:{
       colStyle(){
            return { marginLeft: -this.gutter / 2 + 'px', marginRight: -this.colStylegutter / 2 + 'px' }
       }
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>
