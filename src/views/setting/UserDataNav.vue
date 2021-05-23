<template>
  <div id="UserDataNav">
    <el-affix :offset="0">
      <van-nav-bar title="个人资料" @click-left="onClickLeft" left-text="返回" left-arrow>
      </van-nav-bar>
    </el-affix>
  </div>

</template>

<script>
  import { NavBar } from 'vant';
  import { Icon } from 'vant';

  export default {
    name: "UserDataNav",
    components:{
      [NavBar.name]:NavBar,
      [Icon.name]:Icon,
    },
    methods:{
      onClickLeft(){
        this.$router.push('/Setting')
      },
    },
  }
</script>

<style scoped>

</style>
