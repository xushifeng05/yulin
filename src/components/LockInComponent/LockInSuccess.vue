<template>
    <el-affix :offset="0">
        <div>
            <van-nav-bar
                    title="密码签到"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
                    @click-right="onClickRight"
            />
        </div>
    </el-affix>
        <el-row class="icon-position">
            <el-button type="success" icon="el-icon-check" circle class="icon-style"></el-button>
        </el-row>
    <div class="success">
        <p style="color: #42b983">签到成功</p>
    </div>
</template>
<script>
    import {NavBar, Toast} from "vant";

    export default {
        name: "LockInSuccess",
        components:{
            [NavBar.name]:NavBar,
            [Toast.name]:Toast,
        },
        methods: {
            onClickLeft() {
                this.$router.push('/LockInHeader')  //此处返回首页面
            },
            onClickRight() {
                this.$router.push('/')
            },
        }
    }
</script>

<style scoped>
    .success {
        margin: auto;
        left: 0;
        right: 0;
        text-align: center;
    }

    .icon-style {
        width: 2.5rem;
        height: 2.5rem;
    }

    .icon-position {
        margin-left: 10.6rem;
        margin-top: 12rem;
    }

</style>