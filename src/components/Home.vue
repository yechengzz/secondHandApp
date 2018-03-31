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

    export default{
        components: {
            NavMenu,
            Banner,
            FixedTools
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        padding: 0 0 56px 0;
        background: #ffffff;
    }
</style>
