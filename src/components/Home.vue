<template>
    <div class="container">
        <NavMenu></NavMenu>
        <Banner></Banner>
    </div>
</template>

<script>
    import NavMenu from './common/Navmenu.vue'
    import Banner from './index/Banner.vue'

    export default{
        components: {
            NavMenu,
            Banner
        }
    }
</script>

<style lang="scss" scoped>

</style>
