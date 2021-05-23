<template>
    <van-nav-bar style="background-color: #3090EC;">
        <template #title>
    <span style="color: white;">选择身份</span></template> </van-nav-bar>
    <div id="teacher" @click="teacher" class="btn btn-success">

        <van-image
                round
                width="6rem"
                height="6rem"
                :src="imgR"
        /><h4 align="center">负责人</h4>
  </div>
    <div id="student" @click="student" class="btn btn-success">
        <van-image
                round
                width="6rem"
                height="6rem"
                :src="imgS"/>
        <h4 align="center">志愿者</h4>
    </div>
</template>

<script>
    import {Field, Icon, Image, NavBar} from 'vant';
    export default {
        name: "TeacherOrStudent",
        data(){
            return{
                imgR:require("../../assets/LoginImg/2.png"),
                imgS:require("../../assets/LoginImg/1.png")
            }
        },
        components:{
            [Image.name]:Image,
            [NavBar.name]: NavBar,

        },
        methods:{
            teacher(){
                //指定跳转地址
                this.$router.replace('/Teacher')
            },
            student(){
                //指定跳转地址
                this.$router.replace('/homePage')
            },
        }
    }
</script>

<style scoped>
    #teacher{
        border:3px solid black;
        margin-top:260px;
        margin-left:80px;
        border-radius: 50%;
        width:6rem;
        height:6rem;
    }
    #student{
        border:3px solid black;
        margin-top: -101px;
        margin-left:220px;
        border-radius: 50%;
        width:6rem;
        height:6rem;
    }
</style>
