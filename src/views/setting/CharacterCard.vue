<template>
  <div id="CharacterCard">
    <el-space size="large">
      <div class="block"><el-avatar shape="square" :size="70" :src="squareUrl"></el-avatar></div>
      <div class="van-multi-ellipsis--l2" style="float: left;margin-left: 4%;">
        {{ username }}<br>
        <p style="font-size: 70%; color: #2B2B2C">{{ userID }}</p>
      </div>
<!--      <div>-->
<!--        <el-space direction="vertical" alignment="left" style="padding-left: 0px;">-->
<!--          <el-tag style="border-width: 0px;background-color: Transparent;font-size: 120%;">用户:9527</el-tag>-->
<!--          <el-tag style="border-width: 0px;background-color: Transparent;margin-top: -4em">184******62</el-tag>-->
<!--        </el-space>-->
<!--      </div>-->
    </el-space>
  </div>
</template>

<script>
  export default {
    name: "CharacterCard",
    data(){
      return{
        squareUrl:"",
        username:"",
        userID:"",
      }
    },
    mounted() {
      this.squareUrl = this.$store.state.user.userImg;
      this.username = this.$store.state.user.username;
      this.userID = this.$store.state.user.userNumber;
    }
  }
</script>

<style scoped>
#CharacterCard{
  padding-left: 2em;
}
</style>
