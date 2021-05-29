<template>
  <div>

    <!-- vant导航栏 -->
    <van-nav-bar style="background-color: #3090EC;">

      <template #left>
        <van-icon @click="back" color="white" name="arrow-left"/>
      </template>

      <template #title>
        <span style="color:white;">登录</span>
      </template>

    </van-nav-bar>

    <!-- vant表单 -->
    <van-form>
      <van-field
              v-model="username"
              name="账号"
              label="账号"
              placeholder="手机号"
              :rules="[{ required: true, message: '请填写账号' },{pattern:/^[2][3][1]{3}[0-9]{4}$/ , message: '请输入正确的学号'}]"
      />
      <van-field
              v-model="password"
              :type="isPassword"
              name="密码"
              label="密码"
              placeholder="密码"
              right-icon="eye-o"
              placeholder1="显示图标"
              :rules="[{ required: true, message: '请填写密码' },{pattern: /^\w{6,}$/,message:'密码不少于6位'}]"
      >

      </van-field>

      <div style="margin: 24px;">
        <van-button @click="onSubmit" round block type="primary" native-type="submit">
          <span>登录</span>
        </van-button>
      </div>
    </van-form>

    <div style="float: right;">
      <router-link to="/reg">没有账号？点击注册</router-link>
    </div>

  </div>

</template>

<script>
  import {Button, Field, Form, Icon, NavBar, Toast} from 'vant';
  import {reactive} from 'vue';
  import axios from 'axios'

  export default {
    name: "Login",

    components: {
      [NavBar.name]: NavBar,
      [reactive.name]: reactive,
      [Toast.name]: Toast,
      [Button.name]: Button,
      [Field.name]: Field,
      [Form.name]: Form,
      [Icon.name]: Icon,
    },
    data() {
      return {
        username: '',
        password: '',
        isPassword: 'password', //密码的type类型
        isText: true,
        isLogin: '',
      };
    },
    methods: {
      onSubmit() { //点击登录
        //如果不符合登录条件则不会继续执行
        if (this.username.trim() == '') {
          return
        }
        // if(!this.username.match(/^[1][3,5,6,7,8,9][0-9]{9}$/)){
        //     return
        // }
        if (!this.username.match(/^[2][3][1]{3}[0-9]{4}$/)) {
          return
        }
        if (!this.password.match(/^\w{6,}$/)) {
          return
        }

        // 获取数据
        if (localStorage.user == null) {
          axios.post("http://localhost:8081/Login", this.$qs.stringify({
                id: this.username,
                password: this.password
              })
          ).then((res) => {
            console.log(res.data.data);
            if (res.data.code == 200){
              this.$router.push('/TeacherOrStudent');
              this.$store.commit('setUser',{
                name:res.data.data.name,
                id:res.data.data.id,
                sex:res.data.data.sex,
                img:res.data.data.imgurl,
              });
            }else{
              this.$notify({type: 'danger',message:res.data.message});
            }
          })
        }
        // else {
        //   let users = localStorage.users
        //   if (users) {
        //     users = JSON.parse(users)
        //     let isLogin = false
        //     users.map(item => {
        //       if (item.username == this.username && item.password == this.password) {
        //         isLogin = true
        //         return
        //       }
        //     })
        //   }
        // }
        //     if(isLogin){
        //         sessionStorage.user = this.username
        //         this.$router.push({
        //             path:'/TeacherOrStudent'
        //         })
        //     }else{
        //         this.$notify({ type: 'danger', message: '输入的账号或密码有误' });
        // }
        //     else{
        //     this.$notify({ type: 'danger', message: '该用户不存在' });
        // }
      },
      onPassword() { //点击切换密码的type类型
        this.isText = !this.isText
        if (this.isText) {
          this.isPassword = 'password'
        } else {
          this.isPassword = 'text'
        }
      },
      back() { //返回我的页面
        this.$router.push({
          path: '/TeacherOrStudent'
        })
      }
    }

  };
</script>

<style scoped>
</style>
