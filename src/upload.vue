<template>
  <div class="gulu-uploader">
    <div @click="onClickUpload" ref="trigger">
      <slot></slot>
    </div>
    <div ref="temp" style="width:0;height:0;overflow:hidden"></div>
  </div>
</template>

<script>
export default {
  name: "GlueUpload",
  props: {
    name:{
        type:String,
        required:true
    },
    action:{
        type:String,
        required:true
    },
    method:{
        type:String,
        default:'POST'
    }
  },
  methods: {
    onClickUpload() {
      let input = document.createElement("input");
      input.type = "file";
      this.$refs.temp.appendChild(input);
      input.addEventListener("change", () => {
        let file = input.files[0];
        input.remove();
        let formData = new FormData();
        formData.append(this.name, file);


        var xhr = new XMLHttpRequest();
        xhr.open(this.method,this.action)
        xhr.onload = function(){
            img.src = `https://node-server-12.herokuapp.com/preview/${xhr.respone}`
            console.log(xhr.response);
        }
        xhr.send(formData)
      });
      input.click();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>>

