<template>
  <el-affix :offset="0">
    <div id="setting_nav">
      <van-nav-bar title="任务列表" left-arrow @click-left="onClickLeft">
      </van-nav-bar>
    </div>
  </el-affix>
</template>

<script>
  import { NavBar } from 'vant';
  import { Icon } from 'vant';

  export default {
    name: "RecordingNav",
    components:{
      [NavBar.name]:NavBar,
      [Icon.name]:Icon,
    },
    methods:{
      onClickLeft() {
        this.$router.push('/setting')
      }
    },
  }
</script>

<style scoped>

</style>
