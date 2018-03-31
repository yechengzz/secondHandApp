<template>
    <div class="container">
        <NavMenu></NavMenu>
        <FixedTools></FixedTools>
        <div class="main">
            <div class="content">
                <div class="title"></div>
                <h1>贰货购</h1>
                <h2>Cheap</h2>
                <h2>&</h2>
                <h2>Cheaper</h2>
                <i></i>
                <p>贰货购是一款可以解决你无处安放闲置物品苦恼的二手商品交易网站。</p>
                <i></i>
                <p>贰货购客户端无需注册店铺就能买卖闲置，例如：</p>
                <p>为家里狗狗的幼崽找新主，旅游带回的特色小商品分享给其他驴友，宝宝不再喜爱的玩具送给别家小朋友……</p>
                <i></i>
                <p>贰货购，不只有交易，有着共同爱好、趣味相投的人们正集结起来，生成了一个全新的板块————贰货圈；</p>
                <i></i>
                <p>我们还在寻求一种更新的方式，来平衡买卖家之间不平衡的信息：</p>
                <p>通过一个中间渠道来鉴定物品的价值，需要买卖家共同协商来承担费用，目前还在准备阶段，敬请期待~</p>
                <i></i>
                <p>贰货购，不止是二手商品的交易。</p>
            </div>
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
        background: url('../../assets/images/aboutus/cat.png') no-repeat #F6F6F6;
        background-size: auto;
        background-position: top left;
        height: 1000px;
    }
    .content{
        width: 40%;
        background: #333333;
        position: relative;
        padding: 30px 30px;
        left: 700px;
        top: 60px;
        h1, h2{
            font-size: 30px;
            color: #ffffff;
        }
        h1{
            margin: 0 0 20px 0;
        }
        i{
            display: block;
            width: 85px;
            height: 4px;
            background: #ffffff;
            margin: 20px 0;
        }
        p{
            font-size: 26px;
            color: #ffffff;
        }
        .title{
            background: url('../../assets/images/aboutus/title.png') no-repeat;
            background-size: 100% 100%;
            width: 42px;
            height: 218px;
            position: absolute;
            top: 0;
            right: -60px;
        }
    }
</style>