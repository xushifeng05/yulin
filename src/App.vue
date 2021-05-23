<template>
  <div id="app">
    <router-view/>
    <!--底部导航栏-->
    <div v-show="showBar">
      <van-tabbar v-model="active">
        <van-tabbar-item  to="/homePage" icon="coupon">首页</van-tabbar-item>
        <van-tabbar-item  to="/LockInHeader" icon="column">任务</van-tabbar-item>
        <van-tabbar-item  to="/setting" icon="manager">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>

</template>

<script>
  import { mapState } from 'vuex'
  import { Tabbar, TabbarItem} from 'vant';

  export default {
    name:'App',
    data() {
      return {
        keepAliveData: ['manage'],
        active:0,
        showBar:false,
      }
    },
    watch:{
      '$route'(){
        console.log(this.$route.name.name);
        switch (this.$route.name.name) {
          case 'setting': this.showBar = true;this.active = 2;break;
          case 'home': this.showBar = true;this.active = 0;break;
          case 'LockInHeader': this.showBar = true;this.active = 1;break;
          default:this.showBar = false;
        }

      }
    },
    components:{
      [Tabbar.name]:Tabbar,
      [TabbarItem.name]:TabbarItem,
    },
    computed: {
      ...mapState([
        'isShowLoading',
      ]),
    },
  }

</script>

<style>
#app{
  width: 100%;
  height: 100%;
}
</style>
