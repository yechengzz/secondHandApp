<template>
    <div class="container">
        <div class="title">
            <span>用户id</span>
            <span>账号</span>
            <span>密码</span>
            <span>用户名</span>
            <span>地址</span>
        </div>
        <ul>
            <li v-for="user in users" :key="user.id">
                <span>{{ user.user_id }}</span>
                <span>{{ user.user_account }}</span>
                <span>{{ user.password }}</span>
                <span>{{ user.user_name }}</span>
                <span>{{ user.address }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'

    export default{
        data(){
            return{
                users: [

                ]
            }
        },
        mounted(){
            this.setUsers();
        },
        methods: {
            setUsers(){
                axios.post('http://localhost:3000/api/userInfo')
                .then(res => {
                    this.users = res.data;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .title{
        width: 900px;
        border-bottom: 1px solid #000000;
        margin: 0 0 10px 0;
        span{
            display: inline-block;
            width: 19.6%;
            text-align: center;
            margin: 0 0 10px 0;
        }
    }
    .container{
        li{
            width: 900px;
            border-bottom: 1px solid #000000;
            margin: 0 0 10px 0;
            span{
                display: inline-block;
                width: 19.6%;
                text-align: center;
                margin: 0 0 10px 0;
            }
        }
    }
</style>
