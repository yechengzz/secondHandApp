<template>
    <div class="container">
        <NavMenu></NavMenu>
        <FixedTools></FixedTools>
        <div class="main">
            <div class="cat"></div>
        </div>
        <Footer></Footer>
    </div>
</template>
    
<script>
    import NavMenu from '../common/Navmenu.vue'
    import FixedTools from '../common/Fixedtools.vue'
    import Footer from '../common/Footer.vue'

    export default{
        data(){
            return{

            }
        },
        components: {
            NavMenu,
            FixedTools,
            Footer
        }
    }
</script>

<style lang="scss" scoped>
    .main{
        background: #F6F6F6;
    }
    .cat{
        background: url('../../assets/images/aboutus/cat.png') no-repeat;
        background-size: 100% 100%;
        width: 650px;
        height: 1155px;
    }
</style>