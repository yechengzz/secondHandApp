<template>
    <div class="container">
        <NavMenu></NavMenu>
        <Banner></Banner>
        <FixedTools></FixedTools>
    </div>
</template>

<script>
    import NavMenu from './common/Navmenu.vue'
    import Banner from './index/Banner.vue'
    import FixedTools from './common/Fixedtools.vue'
    import axios from 'axios'

    export default{
        data () {
            return{

            }
        },
        components: {
            NavMenu,
            Banner,
            FixedTools
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        padding: 0 0 56px 0;
        background: #ffffff;
    }
</style>
