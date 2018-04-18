<template>
    <div class="container">
        <header>
            欢迎，超级管理员
            <router-link to="/adminlogin">退出</router-link>
        </header>
        <div class="clearFix">
            <div class="fl">
                <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <span>用户管理</span>
                        </template>
                        <el-menu-item-group>
                            <router-link to="/user"><el-menu-item index="1-1">用户信息</el-menu-item></router-link>
                            <router-link to="/edituser"><el-menu-item index="1-2">用户信息修改</el-menu-item></router-link>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <span>商品管理</span>
                        </template>
                        <el-menu-item-group>
                            <router-link to="/product"><el-menu-item index="2-1">商品信息</el-menu-item></router-link>
                            <router-link to="/editproduct"><el-menu-item index="2-2">商品信息修改</el-menu-item></router-link>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <span>订单管理</span>
                        </template>
                        <el-menu-item-group>
                            <router-link to="/order"><el-menu-item index="3-1">订单信息</el-menu-item></router-link>
                            <router-link to="/editorder"><el-menu-item index="3-2">订单信息修改</el-menu-item></router-link>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </div>
            <div class="fr">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        min-width: 1200px;
        position: relative;
        header{
            width: 100%;
            font-size: 16px;
            background: #f5f5f5;
            border-bottom: 1px solid #eee;
            text-align: right;
            padding: 5px 0;
            a{
                text-decoration: underline;
            }
        }
        .clearFix{
            width: 1200px;
            margin: 30px auto;
            .fl{
                width: 300px;
            }
            .fr{
                width: 900px;
                min-height: 800px;
                background: #f6f6f6;
                padding: 20px 0 0 0;
            }
        }
    }
</style>

<style lang="scss">
    .el-menu-item-group__title{
        display: none;
    }
</style>

