<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluCol",
  props:{
       span:{
            type:[String,Number]
       }
  }
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  width: 50%;
  border: red 1px solid;

  $class-prefix: col-;
   @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
}
</style>
