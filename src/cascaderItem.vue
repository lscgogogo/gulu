<template>
  <div>
    {{ sourceItem.name }}
    <gulu-cascader-item
      v-for="(item, index) in sourceItem.children"
      :key="index"
      :sourceItem="item"
      v-if="sourceItem.children"
    ></gulu-cascader-item>
  </div>
</template>

<script>
export default{
  name: 'GuluCascaderItem',
  props: {
    sourceItem: {
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
    
</style>
