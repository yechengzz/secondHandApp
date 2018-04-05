<template>
    <div class="container">
        <NavMenu></NavMenu>
        <div class="line"></div>
        <div class="clearFix">
            <div class="fl">
                <el-tabs :tab-position="tabPosition">
                    <el-tab-pane label="用户管理">用户管理</el-tab-pane>
                    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
                    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
                </el-tabs>
            </div>
            <div class="fr">
                
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import NavMenu from '../common/Navmenu.vue';
    import Footer from '../common/Footer.vue';

    export default{
        data(){
            return{
                tabPosition: 'left'
            }
        },
        components:{
            NavMenu,
            Footer
        }
    }
</script>

<style lang="scss" scoped>
    .line{
        width: 100%;
        height: 1px;
        background: #DFDFDF;
    }
    .clearFix{
        width: 1200px;
        height: 800px;
        margin: 20px auto 60px auto;
        .fl{
            width: 30%;
            background: red;
            height: 100%;
        }
        .fr{
            width: 70%;
            background: blue;
            height: 100%;
        }
    }
</style>