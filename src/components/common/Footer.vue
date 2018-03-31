<template>
    <div class="footer">
        <ul>
            <li><router-link>关于我们</router-link></li>
            <li><router-link>帮助中心</router-link></li>
            <li><router-link>客服专线</router-link></li>
            <li><router-link>加入我们</router-link></li>
            <li><router-link>官方公告</router-link></li>
            <li><router-link>XXX-XXX-XXXX</router-link></li>   
        </ul>
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
    .footer{
        width: 100%;
        min-width: 1200px;
        background: #099e80;
        ul{
            width: 1200px;
            margin: 0 auto;
            li{
                display: inline-block;
                width: 33%;
                text-align: center;
                font-size: 28px;
                color: #ffffff;
                a{
                    display: block;
                    cursor: pointer;
                    &:hover{
                    transition: all 0.5s;
                    transform: scale(1.2);
                    }
                }
            }
        }
    }
</style>