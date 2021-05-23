<template>
    <div>

        <!-- vant导航栏 -->
        <van-nav-bar style="background-color: #3090EC;">

            <template #left>
                <van-icon @click="back" color="white" name="arrow-left" />
            </template>

            <template #title>
                <span style="color: white;">新用户注册</span>
            </template>

        </van-nav-bar>

        <!-- vant表单 -->
        <van-form>
            <van-field
                    v-model="username"
                    name="账号"
                    label="账号"
                    placeholder="手机号"
                    :rules="[{ required: true, message: '请填写账号' },{pattern:/^[1][3,5,6,7,8,9][0-9]{9}$/ , message: '请输入正确的11位手机号'}]"
            />
            <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    right-icon="eye-o"
                    placeholder1="显示图标"
                    :rules="[{ required: true, message: '请填写密码' },{pattern: /^\w{6,}$/,message:'密码不少于6位'}]"/>
            <van-field
                    v-model="repeat"
                    type="password1"
                    name="密码1"
                    label="密码"
                    placeholder="再次输入密码"
                    right-icon="eye-o"
                    placeholder1="显示图标"
                    :rules="[{ required: true, message: '请填写密码' },{pattern: /^\w{6,}$/,message:'密码不少于6位'}]"/>
            <div style="margin: 16px;">
                <van-button @click="onSubmit" round block type="primary" native-type="submit">
                    注册
                </van-button>
            </div>
        </van-form>

        <div style="float: right;">
            <router-link to="/login">立即登录</router-link>
        </div>

    </div>
</template>

<script>
    import { Toast } from 'vant';
    import {NavBar} from 'vant';
    import { reactive } from 'vue';
    import {Button} from 'vant';
    import {Field} from 'vant';
    import {Form} from 'vant';
    import {Icon}from'vant';
    export default {
        name: "Reg",
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
                password: ''
            }
        },
        methods: {
            onSubmit() { //点击注册
                // 如果不符合注册条件则不会继续执行
                if (this.username.trim() == '') {
                    return
                }
                if (!this.username.match(/^[1][3,5,6,7,8,9][0-9]{9}$/)) {
                    return
                }
                if (!this.password.match(/^\w{6,}$/)) {
                    return

                }

                // 1.获取localstorage的数据
                let users = localStorage.users
                if (users) {
                    users = JSON.parse(users)
                } else {
                    users = []
                }

                // 2.把新注册的用户信息添加到数组
                users.push({
                    username: this.username,
                    password: this.password
                })

                // 3.保存到本地
                localStorage.users = JSON.stringify(users)

                Toast.success('注册成功');

                setTimeout(() => { //一秒后跳转登录页面
                    this.$router.push({
                        path: '/Login'
                    })
                }, 1000)

            },

            back() { //返回上一级
                window.history.back()
            }

        }
    }

</script>

<style scoped>

</style>