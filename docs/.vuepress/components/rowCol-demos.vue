<template>
  <div>
    <g-row class="demoRow">
      <g-col class="demoCol" span="8">8</g-col>
      <g-col class="demoCol" span="8">8</g-col>
      <g-col class="demoCol" span="8">8</g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col class="demoCol" span="6">6</g-col>
      <g-col class="demoCol" span="6">6</g-col>
      <g-col class="demoCol" span="6">6</g-col>
      <g-col class="demoCol" span="6">6</g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col class="demoCol" span="4">4</g-col>
      <g-col class="demoCol" span="4">4</g-col>
      <g-col class="demoCol" span="4">4</g-col>
      <g-col class="demoCol" span="4">4</g-col>
      <g-col class="demoCol" span="4">4</g-col>
      <g-col class="demoCol" span="4">4</g-col>
    </g-row>

    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Row from '../../../src/row.vue'
import Col from '../../../src/col.vue'
export default {
  data() {
    return {
      content: `
      <g-row class="demoRow">
        <g-col class="demoCol" span="8">8</g-col>
        <g-col class="demoCol" span="8">8</g-col>
        <g-col class="demoCol" span="8">8</g-col>
      </g-row>

      <g-row class="demoRow">
      <g-col class="demoCol" span="6">6</g-col>
      <g-col class="demoCol" span="6">6</g-col>
      <g-col class="demoCol" span="6">6</g-col>
      <g-col class="demoCol" span="6">6</g-col>
    </g-row>
    
    <g-row class="demoRow">
      <g-col class="demoCol" span="4">4</g-col>
      <g-col class="demoCol" span="4">4</g-col>
      <g-col class="demoCol" span="4">4</g-col>
      <g-col class="demoCol" span="4">4</g-col>
      <g-col class="demoCol" span="4">4</g-col>
      <g-col class="demoCol" span="4">4</g-col>
    </g-row>
      `,
    }
  },
  components: {
    'g-row': Row,
    'g-col': Col,
  },
}
</script>
<style>
.demoRow {
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  border: 1px solid grey;
  background-color: rgb(238, 238, 238);
  text-align: center;
}
</style>
