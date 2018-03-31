<template>
    <div class="footer">
        <ul>
            <li><router-link to="/aboutus">关于我们</router-link></li>
            <li><router-link to="/aboutus">帮助中心</router-link></li>
            <li>客服专线</li>
            <li>微信公众号</li>
            <li>官方微博</li>
            <li><router-link to="/aboutus">加入我们</router-link></li>
            <li><router-link to="/aboutus">官方公告</router-link></li>
            <li>XXX-XXX-XXXX</li>
            <li><img :src="wechatSrc" alt=""></li>
            <li><img :src="weiboSrc" alt=""></li>  
            <li><router-link to="/aboutus">联系我们</router-link></li>
            <li><router-link to="/aboutus">贰货圈</router-link></li>
            <li><font>服务时间(9:00-18:00)</font></li>
        </ul>
    </div>
</template>

<script>
    const wechatRequire = require('../../assets/images/footer/wechat.png');
    const weiboRequire = require('../../assets/images/footer/weibo.png');

    export default{
        data(){
            return{
                wechatSrc: wechatRequire,
                weiboSrc: weiboRequire
            }
        }
    }
</script>

<style lang="scss" scoped>
    .footer{
        width: 100%;
        min-width: 1200px;
        background: #099e80;
        padding: 40px 0;
        ul{
            width: 1200px;
            margin: 0 auto;
            li{
                display: inline-block;
                width: 19.5%;
                text-align: center;
                color: #ffffff;
                font-size: 24px;
                margin: 20px 0;
                position: relative;
                a{
                    display: block;
                    cursor: pointer;
                    font-size: 24px;
                    color: #ffffff;
                    &:hover{
                    transition: all 0.5s;
                    transform: scale(1.1);
                    }
                }
                img{
                    width: 150px;
                    position: absolute;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    top: -30px;
                }
                font{
                    font-size: 16px;
                }
            }
        }
    }
</style>