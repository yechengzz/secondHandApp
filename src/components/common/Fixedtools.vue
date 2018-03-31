<template>
    <div class="container">
        <el-popover
            ref="popover1"
            placement="left-start"
            title="联系电话"
            width="50"
            trigger="hover"
            content="XXX-XXX-XXX">
        </el-popover>
        <el-popover
            ref="popover2"
            placement="left-start"
            title="微信公众号"
            width="50"
            trigger="hover"
            content="erhuogouXXXXXX">
        </el-popover>
        <el-popover
            ref="popover3"
            placement="left-start"
            title="客服QQ"
            width="50"
            trigger="hover"
            content="XXXXXXXXX">
        </el-popover>
        
        <el-button v-popover:popover1 class="phone"><img :src="phoneIconSrc" alt=""></el-button>
        <el-button v-popover:popover2 class="wechat"><img :src="wechatIconSrc" alt=""></el-button>
        <el-button v-popover:popover3 class="qq"><img :src="qqIconSrc" alt=""></el-button>
        <div class="toTop"><img :src="toTopIconSrc" alt="" @click="scrollTop()"></div>
    </div>
</template>

<script>
    const phoneIconRequire = require('../../assets/images/tools/phone.png');
    const qqIconRequire = require('../../assets/images/tools/qq.png');
    const wechatIconRequire = require('../../assets/images/tools/wechat.png');
    const toTopIconRequire = require('../../assets/images/tools/top.png');

    export default{
        data(){
            return{
                phoneIconSrc: phoneIconRequire,
                qqIconSrc: qqIconRequire,
                wechatIconSrc: wechatIconRequire,
                toTopIconSrc: toTopIconRequire
            }
        },
        methods: {
            scrollTop(){
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .el-button{
        width: 52px;
        height: 52px;
        padding: 0;
        border-radius: 0;
        border: none;
        background: #099e80;
        position: fixed;
        right: 40px;
        z-index: 10000;
        img{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
        }
    }
    .phone{
        top: 600px;
        img{
            width: 27px;
            height: 29px;
        }
    }
    .wechat{
        top: 660px;
        img{
            width: 33px;
            height: 33px;
        }
    }
    .qq{
        top: 720px;
        img{
            width: 30px;
            height: 30px;
        }
    }
    .toTop{
        position: fixed;
        right: 40px;
        top: 780px;
        z-index: 10000;
        img{
            width: 52px;
            cursor: pointer;
        }
    }
</style>