<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="用户名" prop="username" style="width: 300px">
            <el-input v-model="ruleForm.username" ></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password" style="width: 300px">
            <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" >登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>

</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码不能为空', trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                // const _this = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post('http://download.lijinghua.club:8068/login', this.ruleForm).then(function (resp) {

                            console.log(resp)
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>