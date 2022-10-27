<template>
    <div>
  
      <pre><code>{{content}}</code></pre>
    </div>
  </template>
  
  <script>

  export default {
    data() {
      return {
        content:``,
      };
    },
    components: {
      "g-cacader": Cascader,
    },
  };
  </script>
  