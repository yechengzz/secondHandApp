<template>
    <div class="navMenu">
        <div class="logo">
            <img :src=logoSrc alt="">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
                <el-menu-item index="2"><router-link to="/aboutus">关于我们</router-link></el-menu-item>
                <el-menu-item index="3" disabled>用户须知</el-menu-item>
                <el-menu-item index="4" disabled>找贰货</el-menu-item>
                <el-menu-item index="5" disabled>我的贰货</el-menu-item>
                <el-menu-item index="6" disabled>贰货圈</el-menu-item>
                <el-menu-item index="7" disabled>贰货鉴定</el-menu-item>
            </el-menu>
            <img :src="languageSrc" alt="">
        </div>
    </div>
</template>

<script>
    const logoRequire = require('../../assets/images/logo.png');
    const languageRequire = require('../../assets/images/language.png'); 

    export default{
        data(){
            return{
                logoSrc: logoRequire,
                activeIndex: '',
                languageSrc: languageRequire
            }
        },
        created(){
            this.fetchData();
        },
        watch:{
            '$route': 'fetchData'
        },
        methods:{
            fetchData(){
                this.activeIndex = this.$route.name[0];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navMenu{
        width: 100%;
        min-width: 1200px;
        height: 111px;
        .logo{
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 24px 0 0 0;
            img{
                &:nth-child(1){
                    width: 227px;
                    height: 58px;
                }
                &:nth-child(3){
                    width: 87px;
                    height: 26px;
                    position: relative;
                    top: 20px;
                }
            }
            ul{
                position: relative;
                top: 26px;
                li{
                font-size: 16px;
                height: 40px;
                line-height: 40px;
                padding: 0;
                margin: 0 20px;
                }
            }
        }
    }
    .el-menu--horizontal>.el-menu-item.is-active{
        border-bottom: 4px solid #099e80;
    }
    .el-menu--horizontal{
        border-bottom: none;
    }
</style>
