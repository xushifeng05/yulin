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
            <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="80px"
                     class="demo-ruleForm top-position labelcs" label-position="left">
                <el-form-item
                        label="签到码"
                        prop="age"
                        :rules="[
      { required: true, message: '签到码不能为空'},
      { type: 'number', message: '签到码必须为数字值'}
    ]"
                >
                    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
                </el-form-item>
                <div class="buttoncs">
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
                    </el-form-item>
                </div>

            </el-form>
</template>
<script>
    import {NavBar, Toast} from "vant";

    export default {
        components:{
            [NavBar.name]:NavBar,
            [Toast.name]:Toast,
        },
        data() {
            return {
                numberValidateForm: {
                    age: ''
                }
            };
        },
        methods: {
            onClickLeft(){
                this.$router.push('LockInHeader')
            },
            onClickRight(){
                this.$router.push('LockInHeader')
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$router.push('/LockInSuccess');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>
<style scoped>
    .top-position {
        margin-top: 4rem !important;
    }
    .labelcs{
        margin-right: 2rem!important;
        margin-left:1rem!important;
    }
    .buttoncs{
        margin-left: 4rem!important;
        margin-top: 4rem!important;
    }
</style>
