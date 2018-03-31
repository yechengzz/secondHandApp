<template>
    <div class="container">
        <NavMenu></NavMenu>
        <FixedTools></FixedTools>
        <div class="main">
            
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
        components:{
            NavMenu,
            FixedTools,
            Footer
        }
    }
</script>

<style lang="scss" scoped>

</style>
