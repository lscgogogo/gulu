<template>
  <button
    @click="$emit('click')"
    class="g-button"
    :class="{ [`icon-${iconPosition}`]: true }"
  >
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from "./icon.vue";
export default {
  name: "GuluButton",
  components: {
    "g-icon": Icon,
  },
  // props: ["icon", "iconPosition"],
  // 第二种写法
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import './var.scss';
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading {
  animation: spin 2s infinite linear;
}

.g-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0.3em 0.9em;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    background-color: $button-active-bg;
  }

  &:focus {
    outline: none;
  }

  > .icon {
    order: 1;
    margin-right: 0.3em;
  }

  > .content {
    order: 2;
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }

    > .content {
      order: 1;
    }
  }
}
</style>
