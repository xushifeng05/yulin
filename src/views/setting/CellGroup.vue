<template>
  <van-cell to="/UserData" title="个人资料" is-link size="large" />
  <van-cell to="/recording" title="任务列表" is-link size="large" />
  <van-cell to="/certificate" title="志愿者证书" is-link size="large" />
</template>

<script>
  import { Cell, CellGroup } from 'vant';

  export default {
    name: "CellGroup",
    components:{
      [CellGroup.name]:CellGroup,
      [Cell.name]:Cell,
    },
  }
</script>

<style scoped>

</style>
