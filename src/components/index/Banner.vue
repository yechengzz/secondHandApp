<template>
    <div class="container" :style=bannerStyle>
        
    </div>
</template>

<script>
    export default{
        data(){
            return{
                bannerStyle:{
                    backgroundImage: 'url(' + require("../../assets/images/index/banner.png") + ')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'auto',
                    backgroundPosition: 'center top'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        min-width: 1200px;
        height: 912px;
    }
</style>
