<template>
    <div class="container">
        <NavMenu></NavMenu>
        <i></i>
        <div class="main">
            <el-tabs type="border-card" tab-position="bottom">
                <el-tab-pane label="登录">
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
                        <el-form-item label="账号" prop="account">
                            <el-input type="phone" v-model="ruleForm.account" auto-complete="off" maxlength="11" placeholder="请输入账号"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="pass">
                            <el-input type="password" v-model="ruleForm.pass" auto-complete="off" maxlength="16" placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')" :disabled="loginState">登录</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="注册">
                    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="80px" class="demo-ruleForm">
                        <el-form-item label="账号" prop="account">
                            <el-input type="phone" v-model="ruleForm2.account" auto-complete="off" maxlength="11" placeholder="请输入账号"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="pass">
                            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" maxlength="16" placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item label="验证码" prop="code">
                            <el-input type="phone" v-model="ruleForm2.code" auto-complete="off" maxlength="4" style="width: 200px" placeholder="请输入验证码"></el-input>
                            <el-button type="primary" @click="getCode()" :disabled="codeBtnState">{{ codeText }}</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm2('ruleForm2')" :disabled="registerState">注册</el-button>
                            <el-button @click="resetForm('ruleForm2')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import NavMenu from '../common/Navmenu.vue';
    import axios from 'axios'

    export default{
        data(){
            var validateAccount = (rule, value, callback) => {
                if(value === ''){
                    callback(new Error('账号不能为空'));
                }
                else if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(value))){
                    callback(new Error('请输入正确的手机号码'));
                }
                else if(value.length !== 11){
                    callback(new Error('请输入正确的手机号码'));
                }
                else{
                    axios.post('http://localhost:3000/api/checkAccount', {
                        account: this.ruleForm.account
                    })
                    .then(res => {
                        if(res.data.code === 1){
                            this.loginState = false;
                            callback();
                        }
                        else{
                            callback(new Error('未注册的手机号'));
                        }
                    })
                }
            }
            var validatePass = (rule, value, callback) => {
                if(value === ''){
                    callback(new Error('密码不能为空'));
                }else{
                    callback();
                }
            }
            var validateAccount2 = (rule, value, callback) => {
                if(value === ''){
                    callback(new Error('账号不能为空'));
                }
                else if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(value))){
                    callback(new Error('请输入正确的手机号码'));
                }
                else if(value.length !== 11){
                    callback(new Error('请输入正确的手机号码'));
                }
                else{
                    axios.post('http://localhost:3000/api/checkAccount', {
                        account: this.ruleForm2.account
                    })
                    .then(res => {
                        if(res.data.code === 0){
                            callback();
                            this.codeBtnState = false;
                        }
                        else{
                            callback(new Error('已注册的手机号'));
                        }
                    })
                }
            }
            var validatePass2 = (rule, value, callback) => {
                if(value === ''){
                    callback(new Error('密码不能为空'));
                }else{
                    callback();
                }
            }
            var validateCode = (rule, value, callback) => {
                if(value.length !== 4){
                    callback(new Error('验证码错误'));
                }
                else{
                    callback();
                    this.registerState = false;
                }
            }
            return{
                ruleForm: {
                    account: '',
                    pass: ''
                },
                rules: {
                    account: [
                        {validator: validateAccount, trigger: 'blur'}
                    ],
                    pass: [
                        {validator: validatePass, trigger: 'blur'}
                    ]
                },
                ruleForm2: {
                    account: '',
                    pass: '',
                    code: ''
                },
                rules2: {
                    account: [
                        {validator: validateAccount2, trigger: 'blur'}
                    ],
                    pass: [
                        {validator: validatePass2, trigger: 'blur'}
                    ],
                    code: [
                        {validator: validateCode, trigger: 'blur'}
                    ]
                },
                codeText: '获取验证码',
                codeBtnState: true,
                loginState: true,
                registerState: true
            }
        },
        components:{
            NavMenu
        },
        methods: {
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post('http://localhost:3000/api/login', 
                        {
                            account: this.ruleForm.account,
                            password: this.ruleForm.pass
                        })
                        .then(res => {
                            if(res.data.code === 1){
                                sessionStorage.setItem('accessToken', this.ruleForm.account);
                                this.$router.push({path: '/my'});
                            }
                            else if(res.data.code === 0){
                                alert('密码错误');
                                this.$refs[formName].resetFields();
                            }
                        })
                    }else{
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            submitForm2(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post('http://localhost:3000/api/register', 
                        {
                            account: this.ruleForm2.account,
                            password: this.ruleForm2.pass,
                            code: this.ruleForm2.code
                        })
                        .then(res => {
                            if(res.data.code === 0){
                                alert('验证码错误');
                                this.$refs[formName].resetFields();
                            }
                            else{
                                alert('注册成功');
                                location.reload();
                            }
                        })
                    }else{
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            getCode(){
                this.codeText = '重新获取';
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main{
        width: 600px;
        margin: 0 auto;
        position: relative;
        top: 180px;
    }
    .container{
        height: 974px;
        background: url('../../assets/images/login/login.png') no-repeat center 100%;
        i{
            display: block;
            width: 100%;
            height: 1px;
            background: #f6f6f6;
        }
    }
</style>

<style lang="scss">
    .main{
        .el-tabs__item{
            width: 300px;
            text-align: center;
        }
        .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active, .el-tabs--border-card>.el-tabs__header .el-tabs__item:hover{
            color: #099e80;
        }
        .el-button--primary{
            background: #099e80;
            border-color: #099e80;
        }
        .el-tabs--border-card>.el-tabs__content{
            padding: 50px 50px 15px 0;
        }
        .el-button--primary.is-disabled{
            background: #099e80;
            border-color: #099e80;
        }
    }
</style>

