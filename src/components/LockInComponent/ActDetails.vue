<template>
    <div  class="big_box">
    <el-affix :offset="0">
        <div>
            <van-nav-bar
                    title="活动详情"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
                    @click-right="onClickRight"
            />
        </div>
        </el-affix>

    <div class="div_all" v-for="List in notices" :key="List">
        <div class="imagebox">
            <img src="../../assets/1.png" class="imagecs">
        </div>
        <div class="acttext">{{List.item1}}<br>
            <div style="border-radius: 15%;">
                <p style="color: black;font-size: small">{{List.notice2}}</p></div>    <!--志愿活动名称-->
        </div>
        <div class="noticecs">
            <div class="p1box">   <!--报名时间盒子-->
                <p style="float:left;margin-left: 0.6rem;line-height: 0.4rem;font-size: small;color: darkgrey">
                    <i class="el-icon-timer">&nbsp;</i>{{List.timea}}</p>
                <p style="float:left;margin-left: 1rem;line-height: 0.8rem;font-size: small">
                    {{List.time1}}
                </p>
            </div>
            <br>
            <div class="p2box">   <!--活动时间盒子-->
                <p style="float:left;margin-left: 0.6rem;line-height: 0.4rem;font-size: small;color: darkgray">
                    <i class="el-icon-timer">&nbsp;</i>{{List.timeb}}</p>
                <p style="float:left;margin-left: 1rem;line-height: 0.8rem;font-size: small">
                    {{List.time2}}
                </p>
            </div>

        </div>
        <div class="addressbox">
            <div class="p3box">    <!--活动地址盒子-->
                <p style="float:left;margin-left: 0.6rem;line-height: 0.4rem;font-size: small;color: darkgray">
                    <i class="el-icon-location-outline">&nbsp;</i>{{List.actaddress}}</p>
                <p style="float:left;margin-left: 1rem;line-height: 0.8rem;font-size: small">
                    {{List.address}}
                </p>
            </div>

        </div>
    </div>
        <!-- 进度条盒子 -->
        <div class="ratebox">
            <el-steps style="flex-basis: 1000px;color: darkgrey;" :space="1200" :active="2" finish-status="success" class="ratesteps">
                <el-step title="待签到"></el-step>
                <el-step title="签到"></el-step>
                <el-step title="签退"></el-step>
            </el-steps>
        </div>
        <!-- 活动简介盒子 -->
    <div class="details" v-for="List in notices" :key="List">
        <p style="margin-left: 0.8rem;line-height: 0.45rem">
            {{List.detail}}
        </p>
        <p style="margin-left: 0.6rem;margin-right:0.5rem;margin-top:-0.4rem;line-height: 1.4rem;font-size: 14px;color: darkgrey">
            &nbsp;&nbsp;&nbsp;&nbsp;{{List.detail1}}</p>
    </div>
    </div>
<div class="bottom">
    <el-affix :offset="0" position="bottom" >
        <el-button type="primary" @click="onClick">签到</el-button>
    </el-affix>
</div>
        <!--<div @click="onClick" class="qiandao">签到</div>-->
</template>

<script>
    import {NavBar, Toast} from "vant";

    export default {
        components: {
            [NavBar.name]: NavBar,
            [Toast.name]: Toast,
        },
        data() {
            return {
                active: 0,
                value: '',
                images: [],
                notices: [
                    {
                        timea:'报名时间',
                        timeb:'活动时间',
                        time1:'2021/04/21  22:00 ~ 2021/04/28  13:35',
                        time2:'2021/04/25  22:00 ~ 2021/04/28  13:35',
                        item1:'志愿活动名称1',
                        notice1: '活动公告1',
                        notice2: '活动公告2',
                        actaddress:'活动地址',
                        address:'英华楼3407',
                        detail:'简介',
                        detail1:'简介yuling志愿服务队志愿服务志愿服务志愿服务志愿服务志愿服务',
                    }
                ]
            }
        },

        methods: {
            onClickLeft() {
                this.$router.push('/LockInHeader')  //此处返回首页面
            },
            onClickRight() {
                this.$router.push('/')  //右边更多
            },
            onClick() {
                this.$router.push('/LockInPage')
            }
        }

    }
</script>

<style scoped>
    /*.qiandao {
        border-radius: 10%;
        width: 4rem;
        height: 1.5rem;
        color: #42b983;
        border: 0.1rem solid #42b983;
        margin-left: 9.4rem;
        text-align: center;
    }*/
    .div_all {
        border: 0.02rem solid lightgrey;
        width: 90%;
        height: 15rem;
        margin-left: 1.18rem;
        margin-top: 1.8rem;
        box-shadow: 0 0.19rem 0.19rem lightgrey;
        border-radius: 3%;
    }
    .ratebox{
        width: 90%;
        height: 6rem;
        margin-left: 1.18rem;
        margin-top: 1.8rem;
        border-radius: 3%;
        border: 0.02rem solid lightgrey;
        box-shadow: 0 0.19rem 0.19rem lightgrey;
    }
    .ratesteps{
        margin-top: 1.5rem;
        margin-left:3.5rem;
    }
    .details {
        width: 90%;
        height: 7rem;
        margin-left: 1.18rem;
        margin-top: 1.8rem;
        border-radius: 3%;
        border: 0.02rem solid lightgrey;
        box-shadow: 0 0.19rem 0.19rem lightgrey;
    }
    .imagebox{
        width: 21.1rem;
        height: 7.5rem;
        border-bottom: 0.02rem solid lightgrey;
    }
    .imagecs {
        width: 6.2rem;
        height:6.2rem;
        border-radius: 50%;
        float: left;
        margin-left: 0.6rem;
        margin-top: 0.6rem;
    }
    .acttext{
        margin-top: -6.5rem;
        margin-left: 8rem;
        font-size: larger;
        font-weight: bold;
        height: 6.3rem;
    }
    .noticecs{
        margin-top: 0.25rem;
        height: 4.85rem;
        width: 100%;
        border-bottom: 0.02rem solid lightgrey;
    }
    .p1box{
        height: 2.2rem;
        margin-bottom: 0;
    }
    .p2box{
        height: 2.2rem;
        margin-top: -1rem;
    }
    .p3box{
        height: 2.2rem;
    }
    .bottom{
        margin-left: 9.7rem! important;
        margin-bottom: 0!important;
        bottom: 0! important;
    }
</style>
