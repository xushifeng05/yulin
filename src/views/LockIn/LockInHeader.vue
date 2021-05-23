<template>
    <div><!-- 导航栏 -->
        <el-affix :offset="0">
        <div>
        <van-nav-bar
                title="打卡"
                right-text="+"
                @click-right="onClickRight"
        />
        </div>
        </el-affix>
    <div class="ListAll" v-for="List in notices" :key="List">
        <div class="Listdecorate" style="display: inline-block" @click="openActDetails">
            <div class="imagestyle">
                <img class="imagestyle" src="../../assets/1.png"/>
            </div>
            <!--活动列表内部内容开始-->
            <div class="ListInnerText">
                <div class="ListInnerText-p">{{List.notice1}}</div>
                <div class="adv" @click="openActDetails">
                    <li class="adv-li" @click="openActDetails">查看详情></li>
                </div>
            </div>
        </div>
        <div class="Listdecorate" style="display: inline-block" @click="openActDetails">
            <div class="imagestyle">
                <img class="imagestyle" src="../../assets/1.png"/>
            </div>
            <!--活动列表内部内容开始-->
            <div class="ListInnerText">
                <div class="ListInnerText-p">{{List.notice2}}</div>
                <div class="adv">
                    <li class="adv-li">查看详情></li>
                </div>
            </div>
        </div>
        <div class="Listdecorate" style="display: inline-block" @click="openActDetails">
            <div class="imagestyle">
                <img class="imagestyle" src="../../assets/1.png"/>
            </div>
            <div class="ListInnerText">
                <div class="ListInnerText-p">{{List.notice3}}</div>
                <div class="adv">
                    <li class="adv-li" @click="openActDetails">查看详情></li>
                </div>
            </div>
        </div>
        <div class="Listdecorate" style="display: inline-block" @click="openActDetails">
            <div class="imagestyle">
                <img class="imagestyle" src="../../assets/1.png"/>
            </div>
            <div class="ListInnerText">
                <div class="ListInnerText-p">{{List.notice4}}
                </div>
                <div class="adv">
                    <li class="adv-li" @click="openActDetails">查看详细</li>
                </div>
            </div>
            <!--商品列表内部内容结束-->
        </div>
    </div>
    </div>
</template>

<script>
    import {NavBar, Toast} from 'vant';
    export default {
        name: 'LockInHeader',
        components:{
            [NavBar.name]:NavBar,
            [Toast.name]:Toast,
        },
        data() {
            return {
                active: 0,
                value: '',
                images: [],
                notices: [
                    {
                        notice1: '活动公告1',
                        notice2: '活动公告2',
                        notice3: '活动公告3',
                        notice4: '活动公告4',
                    }
                ]
            }
        },

        methods: {
            onClick() {
                this.$router.push('/LockInPage')
            },
            openActDetails() {
                this.$router.push('/ActDetails')
            },
            onClickRight() {
                this.$router.push('/teacherPutTask')  //右边更多
            },
        }
    }
</script>

<style scoped>
    .ListAll {
        margin: -0.46rem auto;
    }

    .Listdecorate {
        width: 10.6rem;
        height: 22rem;
        background-color: white;
        margin: 0.43rem;
        border: 1px solid gainsboro;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

    .imagestyle {
        width: 10.6rem;
        height: 13rem;
        float: right;
    }

    .ListInnerText {
        width: 10rem;
        height: 11rem;
        margin-left: 0.3rem;
    }

    .ListInnerText-p {
        font-size: small;
        margin-top: 0.4rem;
    }

    .adv {
        width: 10rem;
        height: 1rem;
        margin-top: 0.6rem;
    }

    .adv-li {
        float: right;
        font-size: 10px;
        color: darkgray;
        list-style-type: none;
    }
</style>
