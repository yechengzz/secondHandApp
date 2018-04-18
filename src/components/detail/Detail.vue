<template>
    <div class="container">
        <NavMenu></NavMenu>
        <div class="line"></div>
        <FixedTool></FixedTool>
        <div class="clearFix">
            <div class="fl">
                <img :src="imgSrc" alt="">
            </div>
            <div class="fr">
                <h1>{{ title }}</h1>
                <h2>￥{{ price }}</h2>
                <p>（库存剩余 {{ num }} 件）</p>
                <el-input-number v-model="one" :min="min" :max="max" size="small"></el-input-number>
                <p>{{ intro }}</p>
                <el-button type="success" :disabled="btnState" @click="addShopMart">添加至购物车</el-button>
                <el-button type="danger" :disabled="btnState" @click="buy">购买</el-button>
            </div>
        </div>
        <el-tabs v-model="activeName" type="card" style="width: 1200px;margin: 0 auto;">
            <el-tab-pane label="商品详情" name="first">商品详情</el-tab-pane>
            <el-tab-pane label="规格参数" name="second">规格参数</el-tab-pane>
            <el-tab-pane label="评论区" name="third">评论区</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import NavMenu from '../common/Navmenu.vue';
    import FixedTool from '../common/Fixedtools.vue';
    import axios from 'axios'

    export default{
        data(){
            return{
                imgSrc: require('../../assets/images/products/ns.jpg'),
                title: '',
                price: '',
                num: '',
                intro: '',
                one: 1,
                numState: false,
                activeName: 'first',
                min: 1,
                max: 1,
                btnState: false
            }
        },
        components:{
            NavMenu,
            FixedTool
        },
        mounted(){
            this.getDetail();
        },
        methods:{
            getDetail(){
                const id = this.$route.path.split('/'); // 根据当前路由获取商品id
                axios.post('http://localhost:3000/api/detail',{
                    product_id: id[2]
                })
                .then(res => {
                    this.title = res.data[0].product_title;
                    this.price = res.data[0].product_price;
                    this.num = res.data[0].stock_num;
                    this.intro = res.data[0].product_intro;
                    switch(res.data[0].product_state){
                        case 0:
                            alert('该商品已售完！');
                            this.mix = 0;
                            this.max = 0;
                            this.num = '0';
                            this.btnState = true;
                            break;
                        case 1:
                            this.max = res.data[0].stock_num;

                            break;
                        case 2:
                            alert('该商品已下架！');
                            this.btnState = true;
                            break;
                        default:
                            break;
                    }
                })
            },
            buy(){
                const id = this.$route.path.split('/'); // 根据当前路由获取商品id
                axios.post('http://localhost:3000/api/buy',{
                    num: this.one,
                    product_id: id[2]
                })
                .then(res => {
                    if(res.data.code === 1){
                        alert('购买成功');
                        axios.post('http://localhost:3000/api/order',{
                            product_id: id[2],
                            product_price: this.price,
                            num: this.one
                        });
                        location.reload();
                    }
                    else{
                        alert('购买失败，请联系客服');
                        location.reload();
                    }
                })
            },
            addShopMart(){
                const id = this.$route.path.split('/'); // 根据当前路由获取商品id
                axios.post('http://localhost:3000/api/addShopMart',{
                    product_id: id[2],
                    product_price: this.price,
                    num: this.one,
                    product_title: this.title
                })
                .then(res => {
                    if(res.data.code === 1){
                        alert('添加成功，请前往购物车进行查看');
                    }
                    else{
                        alert('添加失败，请联系客服');
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .line{
        width: 100%;
        height: 1px;
        background: #f6f6f6;
        margin: 0 0 80px 0;
    }
    .clearFix{
        width: 1200px;
        margin: 0 auto;
        .fl{
            width: 400px;
            img{
                display: block;
            }
        }
        .fr{
            width: 770px;
            min-height: 400px;
            h1{
                font-size: 32px;
                color: #000000;
            }
            h2{
                color: red;
                font-size: 28px;
                margin: 10px 0;
            }
            p{
                font-size: 20px;
                color: #666666;
                margin: 10px 0;
            }
        }
    }
</style>