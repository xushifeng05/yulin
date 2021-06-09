<template>
  <van-button @click="exit()"  to="/Login" type="primary" block>退出账户</van-button>
</template>

<script>
  import { Button } from 'vant'
  import axios from "axios"

  export default {
    name: "exit",
    components:{
      [Button.name]:Button,
    },
    methods:{
      exit(){
        axios.post("http://localhost:8081/exit",this.$qs.stringify(
            {
              id:this.$store.state.user.userNumber
            }
        )).then((response) =>{
          console.log(response.data);
          this.$store.commit('initializationUser');
        })
      //   axios.post("http://localhost:8081/test",this.$qs.stringify({
      //     id:231119009,
      //     password:258147
      //   })).then((res)=>{
      //     console.log(res)
      //   })
      },
    },
  }
</script>

<style scoped>

</style>
