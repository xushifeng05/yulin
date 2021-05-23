<template>
    <div id="topNav">
        <van-nav-bar
                title="添加成员"
                left-text="返回"
                right-text="完成"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />
    </div>
    <div id="searchDiv">
        <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            input-align="center"
        />
    </div>
    <div id="members" >
        暂无成员信息
    </div>
</template>

<script>
    import {Dialog, Toast} from 'vant';
    import {NavBar} from 'vant';
    import { Search } from 'vant';

    export default {
        name: "findStudent",

        components:{
            [NavBar.name]:NavBar,
            [Dialog.Component.name]: Dialog.Component,
            [Search.name]:Search,
            // [Toast.name]:Toast,
        },

        data(){

        },

        setup() {
            const onClickLeft = () => Toast('返回');
            const onClickRight = () => Toast('完成');
            return {
                onClickLeft,
                onClickRight,
            };
        },

        methods:{
            onClickLeft(){
                this.$router.push({path:'/teacherPutTask'});
            }
        }
    }


</script>

<style scoped>
#members{
    text-align: center;
    padding-top: 9rem;
    color: darkgray;
}
</style>