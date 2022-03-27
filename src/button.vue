<template>
  <button class="g-button" :class="{ [`icon-${iconPosition}`]: true }">
    <g-icon v-if="icon" :name="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  // props: ["icon", "iconPosition"],
  // 第二种写法
  props:{
    icon:{},
    iconPosition:{
      type:String,
      default:'left',
      validator(value){
        return value === 'left' || value === 'right';
      }
    }
  }
};
</script>

<style lang='scss'>
.g-button {
  font-size: var(--font-size);
  height: var(---button-height);
  padding: .3em .9em;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--button-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {order: 1;margin-right: .3em;}
  > .content {order: 2;}

  &.icon-right {
    > .icon {order: 2;margin-left: .3em;margin-right:0;}
    > .content {order: 1;}
  }
}
</style>