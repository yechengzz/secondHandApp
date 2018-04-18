<template>
    <div class="container">
        <h1>贰货购后台系统登录</h1>
        <el-form ref="form" :model="form" label-width="80px"
        style="width: 600px;margin: 0 auto;border: 1px solid #f6f6f6;border-radius: 8px;padding: 20px 35px 20px 0; position: absolute; top: 0; bottom: 0;
        left: 0; right: 0;margin: auto;height: 110px;">
            <el-form-item label="用户名">
                <el-input v-model="form.account"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-button type="primary" style="position: absolute; right: 30px; bottom: -60px;" @click="adminLogin">登录</el-button>
        </el-form>
    </div>
</template>

<script>
    import axios from 'axios'

    export default{
        data(){
            return{
                form: {
                    account: '',
                    password: ''
                }
            }
        },
        methods: {
            adminLogin(){
                axios.post('http://localhost:3000/api/adminLogin', {
                    account: this.form.account,
                    password: this.form.password
                })
                .then(res => {
                    if(res.data.code === 1){
                        this.$router.push({path: '/admin'});
                    }
                    else{
                        alert('登录失败，请确认账号和密码');
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        min-width: 1200px;
        height: 974px;
        position: relative;
        background: url('../../assets/images/admin/adminbg.png') no-repeat center 100% #FFFEEF;
        h1{
            font-size: 54px;
            text-align: center;
            position: relative;
            top: 280px;
        }
    }
</style>
