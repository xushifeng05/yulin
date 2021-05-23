<template>
  <el-affix :offset="0">
    <van-nav-bar title="志愿者证书" @click-left="onClickLeft" left-text="返回" left-arrow>
    </van-nav-bar>
  </el-affix>
</template>

<script>
  import { NavBar } from 'vant';
  import { Icon } from 'vant';

  export default {
    name: "CertificateNav",
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
