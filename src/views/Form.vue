<template>
  <div>
    <yang-form :item="formItem" :field="formField"></yang-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      formItem: [
        {
          type: 'input',
          label: '活动名称'
        },
        {
          type: 'select',
          label: '活动区域'
        }
      ],
      formField:{
        name:'',
        gender:''
      }
    }
  },
  components: {
    yangForm: () => import('../components/form/index.vue')
  }
}
</script>

<style scoped>

</style>
