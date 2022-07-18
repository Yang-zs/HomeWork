<template>
  <div class="home">
    <yangButton block>默认按钮</yangButton>
    <yangButton size="medium" type="primary" block>成功按钮</yangButton>
    <yangButton type="danger" block>危险按钮</yangButton>
    <yangButton type="warning" border block>警告按钮</yangButton>
  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {
    yangButton: () => import('../../components/button/index.vue'),
  },
}
</script>
