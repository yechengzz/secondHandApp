<template>
    <div class="navMenu clearFix">
        <div class="logo fl">
            <div class="clearFix">
                <div class="fl">
                    <img v-bind:src=logoSrc alt="">
                </div>
                <div class="fr">
                    <h1 v-text="logoTitle"></h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const logoRequire = require('../../assets/images/logo.png');

    export default{
        data(){
            return{
                logoSrc: logoRequire,
                logoTitle: '贰货购'
            }
        },
        components:{

        }
    }
</script>

<style lang="scss" scoped>
    .navMenu{
        width: 100%;
        min-width: 1200px;
        height: 111px;
        background: blue;
        .logo{
            margin: 24px 0 0 114px;
            h1{
                color: #099e80;
                font-weight: normal;
                font-family: fzzyjt;
            }
        }
    }
</style>
