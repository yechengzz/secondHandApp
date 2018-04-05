<template>
    <div class="container">
        <NavMenu></NavMenu>
        <FixedTools></FixedTools>
        <div class="main">
            <h1>懂你的贰货</h1>
            <input type="text" placeholder="请输入想要搜索的商品名">
        </div>
        <div class="type">
            <ul>
                <li></li>
                <li></li>
            </ul>
            <video :src=videoSrc controls="controls"></video>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import NavMenu from '../common/Navmenu.vue'
    import FixedTools from '../common/Fixedtools.vue'
    import Footer from '../common/Footer.vue'
    const videoRequire = require('../../assets/images/search/ns.mp4');

    export default{
        data(){
            return{
                videoSrc: videoRequire
            }
        },
        components:{
            NavMenu,
            FixedTools,
            Footer
        }
    }
</script>

<style lang="scss" scoped>
    .main{
        min-width: 1200px;
        background: url('../../assets/images/search/bg.png') no-repeat center 100%;
        padding: 140px 0 290px 0;
        h1{
            font-size: 56px;
            text-align: center;
            color: #099e80;
        }
        input{
            display: block;
            width: 558px;
            margin: 35px auto 0 auto;
            border: none;
            box-sizing: border-box;
            border-radius: 8px;
            font-size: 16px;
            padding: 20px;
            background: url('../../assets/images/search/icon.png') no-repeat #ffffff;
            background-position: center right;
            background-size: 7% 66%;
        }
    }
    .type{
        width: 1000px;
        margin: 0 auto;
        padding: 0 0 60px 0;
        li{
            position: relative;
            top: -42px;
            width: 128px;
            height: 84px;
            display: inline-block;
            &:nth-child(1){
                background: url('../../assets/images/search/ns.png') no-repeat;
                background-size: 100% 100%;
                top: -62px;
                cursor: pointer;
            }
            &:nth-child(2){
                background: url('../../assets/images/search/lego.png') no-repeat;
                background-size: 100% 100%;
                left: -4px;
                cursor: not-allowed;
            }
        }
        video{
            display: block;
            width: 100%;
        }
    }
</style>
