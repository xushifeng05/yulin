<template>
    <div id="topNav">
        <van-nav-bar
                title="创建任务"
                left-text="返回"
                right-text="发布"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />
    </div>
    <div id="taskDiv">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="截止时间" required>
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="活动内容" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item label="添加成员" prop="region">
                <i class="el-icon-circle-plus-outline" @click="$router.push('/findStudent')"></i>
            </el-form-item>
            <br>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    import {NavBar} from 'vant';
    import { Dialog } from 'vant';

    export default {
        name: "teacherPutTask",

        components:{
            [NavBar.name]:NavBar,
            [Dialog.Component.name]: Dialog.Component,
           // [Toast.name]:Toast,
        },
        data() {
            return {
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    desc: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动内容', trigger: 'blur' }
                    ]
                }
            };
        },

        setup() {
            const onClickRight = () => Toast('按钮');
            return {
                onClickRight,
            };
        },

        methods: {
            onClickLeft(){
                this.$router.push('/LockInHeader')
            },
            //创建任务按钮
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('创建成功!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            onClickRight(){

                //弹出框，提示是否发布任务
                const beforeClose = (action) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            if (action === 'confirm') {
                                resolve(true);
                            } else {
                                // 拦截取消操作
                                resolve(false);
                            }
                        }, 1000);
                    });

                Dialog.confirm({
                    title: '发布任务',
                    message: '确定发布任务',
                    beforeClose,
                });
            },


        },
    }
</script>

<style scoped>
#taskDiv{
    margin-top: 2rem;
}
</style>
