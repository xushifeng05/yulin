<template>
    <van-nav-bar style="background-color: #3090EC;">
        <template #title>
            <span style="color: white;">管理者登录</span></template> </van-nav-bar>
    <div class="yuan">
        <van-image
                round
                width="6rem"
                height="6rem"
                :src="imgR"
        />  </div>
    <van-form>
        <van-field
                v-model="password"
                :type="isPassword"
                name="密码"
                label="密码"
                placeholder="密码"

                :rules="[{ required: true, message: '请填写密码' },{pattern: /^\w{6,}$/,message:'密码不少于6位'}]"
        >
        </van-field>

        <div style="margin: 24px;">
            <van-button @click="onSubmit" round block type="primary" native-type="submit">
                <span>登录</span>
            </van-button>
        </div>
    </van-form>

</template>

<script>
    import {Image} from 'vant';
    import { Field } from 'vant';
    import { Icon } from 'vant';
    import {NavBar} from 'vant';
    import {Form} from 'vant';
    import {Button} from 'vant';
    export default {
        name: "Teacher",
        components:{
            [Image.name]:Image,
            [Field.name]:Field,
            [Icon.name]:Icon,
            [NavBar.name]: NavBar,
            [Form.name]: Form,
            [Button.name]: Button,
        },data() {
            return {
                username: '',
                password: '',
                isPassword:'password', //密码的type类型
                isText:true,
                imgR:require("../../assets/LoginImg/2.png"),
            };
        },
        methods: {
            onSubmit(){ //点击登录
                //如果不符合登录条件则不会继续执行
                if(this.username.trim() == ''){
                    return
                }

                if(!this.password.match(/^\w{6,}$/)){
                    return
                }

                // 获取数据
                let users = localStorage.users
                if(users){
                    users = JSON.parse(users)
                    let isLogin = false
                    users.map(item=>{
                        if(item.password == this.password){
                            isLogin = true
                            return
                        }
                    })

                    if(isLogin){
                        sessionStorage.password = this.upassword
                        this.$router.push({
                            path:'/header'
                        })
                    }else{
                        this.$notify({ type: 'danger', message: '输入的账号或密码有误' });
                    }

                }else{
                    this.$notify({ type: 'danger', message: '该用户不存在' });
                }
            },
            onPassword(){ //点击切换密码的type类型
                this.isText = !this.isText
                if(this.isText){
                    this.isPassword = 'password'
                }else{
                    this.isPassword = 'text'
                }
            },
            back(){ //返回我的页面
                this.$router.push({
                    path:'/homePage'
                })
            }
        }

    };

</script>

<style scoped>
    .yuan{
        border:3px solid black;
        margin-top:50px;
        margin-left:155px;
        border-radius: 50%;
        width:6rem;
        height:6rem;
    }
</style>
