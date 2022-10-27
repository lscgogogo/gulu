<template>
  <div id="app">
    <g-cascader
      :source.sync="source"
      popover-height="200px"
      :selected.sync="selected"
      @update:selected="onUpdateSelected"
      @update:source="onUpdateSource"
    />
  </div>
</template>

<script>
import Cascader from '../../../src/cascader.vue'

export default {
  data() {
    return {
      selected: [],
      source: [
        {
          name: 'zhejiang',
          children: [
            {
              name: 'hangzhou',
              children: [
                {
                  name: 'xihu',
                },
              ],
            },
          ],
        },
        {
          name: 'jiangsu',
          children: [
            {
              name: 'nanjing',
              children: [
                {
                  name: 'zhonghuamen',
                },
              ],
            },
          ],
        },
      ],
    }
  },
  components: {
    'g-cascader': Cascader,
  },
  methods: {
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
