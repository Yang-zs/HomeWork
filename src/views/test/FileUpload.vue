<template>
  <div>
    <div class="box" @click="triggerFile">选择文件</div>
    <input v-show="showIpt" id="file" type="file" @change="getFile">
    <button @click="limitFileSize()" :disabled="disableBtn" >点击上传</button>

  </div>
</template>

<script setup>
import {ref} from 'vue'
const showIpt = ref(false)
const disableBtn = ref(true)
const file = ref('')
// 点击其他盒子触发选择文件
const triggerFile = ()=>{
const ipt = document.getElementById('file')
  ipt.click()
}
// 获取文件信息
const getFile = (event)=>{
  console.log(event.target.files[0])
  file.value = event.target.files[0]
  if(event.target.files[0]){
    disableBtn.value = false
  }
}
// 限制上传文件大小
const limitFileSize = ()=>{
  // 限制上传文件大小
  const fileSize = file.value.size
  const Size = 1024 * 1024 * 2
  if(fileSize > Size){
    alert('文件大小超过限制')
    return false
  }
//  限制文件上传类型
  const fileType = file.value.type
  const type = ['image/jpeg','image/png','image/gif']
  if(!type.includes(fileType)){
    alert('文件类型不符合要求')
    return false
  }

}


</script>

<style scoped lang='scss'>
.box{
  width: 100px;
  height: 30px;
  border: 1px solid #ccc;
}
</style>
