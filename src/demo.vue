<template>
  <div id="app">
    <g-cascader :source="source"></g-cascader>
  </div>
</template>

<script>
import cascader from './cascader.vue'
export default {
  data() {
    return {
      source: [
        {
          name: 'Zhejiang',
          children: [
            {
              name: 'Hangzhou',
              children: [
                {
                  name: 'West Lake',
                },
              ],
            },
          ],
        },
        {
          name: 'Jiangsu',
          children: [
            {
              name: 'Nanjing',
              children: [
                {
                  name: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ],
    }
  },
  components: {
    'g-cascader': cascader,
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
