<template>
  <div id="app">
    <g-cascader
      :source.sync="source"
      popover-height="200px"
      :selected.sync="selected"
      @update:selected="onUpdateSelected"
      @update:source="onUpdateSource"
      :load-data="loadData"
    />
  </div>
</template>

<script>
import cascader from './cascader.vue'
import db from './db'

function ajax(parentId = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = db.filter((item) => item.parent_id == parentId)
      result.forEach((node) => {
        if (result.length > 0) {
          node.isLeaf = false
        } else {
          node.isLeaf = true
        }
      })
      resolve(result)
    }, 1000)
  })
}
console.log(ajax())
export default {
  data() {
    return {
      selected: [],
      source: [],
    }
  },
  components: {
    'g-cascader': cascader,
  },
  created() {
    ajax().then((res) => {
      this.source = res
    })
  },
  methods: {
    loadData({ id }, updateSource) {
      ajax(id).then((result) => {
        updateSource(result)
      })
    },
    onUpdateSelected() {
      console.log('onUpdateSelected')
    },
    onUpdateSource() {
      console.log('onUpdateSource')
    },
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* :root  css3选择器  表示html */
:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
#app {
  margin: 20px;
}
body {
  font-size: var(--font-size);
}
</style>
