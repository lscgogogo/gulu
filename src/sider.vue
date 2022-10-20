<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="visible = false">close</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GuluSider",
  data() {
    return {
      visible: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.sider {
  position: relative;
  button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slide-enter,
.slide-leave-to {
  transition: all 2s;
}

.slide-enter,
.slide-leave-to {
  margin-left: -300px;
}
</style>
