<template>
    <div class="block">
        <el-carousel height="912px">
            <el-carousel-item v-for="item in 2" :key="item"></el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                timeStyle:{
                    backgroundImage: 'url(' + require("../../assets/images/index/time.png") + ')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .block{
        min-width: 1200px;
    }
    .time{
        width: 130px;
        height: 161px;
        position: absolute;
        top: 168px;
        left: 100px;
        z-index: 10000;
    }
    .el-carousel__item:nth-child(2n+1) {
        background: url("../../assets/images/index/banner.png") no-repeat center 100%;
    }
    .el-carousel__item:nth-child(2n) {
        background: url("../../assets/images/index/banner1.png") no-repeat center 100%;
    }
</style>
