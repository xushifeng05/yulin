<template>
  <el-affix :offset="0">
    <div id="setting_nav">
      <van-nav-bar title="个人中心">
      </van-nav-bar>
    </div>
  </el-affix>
</template>

<script>
  import { NavBar } from 'vant';
  import { Icon } from 'vant';
  export default {
    name: "SettingNav",
    components:{
      [NavBar.name]:NavBar,
      [Icon.name]:Icon,
    },
    setup() {

      return {

      };
    },
  }
</script>

<style scoped>
  #setting_nav{
    text-align: center;
    height: 2.5em;
    line-height: 2.5em;
    /*font-family: "微软雅黑";*/
    font-size: 110%;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
</style>
