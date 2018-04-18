<template>
    <div class="container">
        <NavMenu></NavMenu>
        <FixedTool></FixedTool>
        <div class="line"></div>
        <div class="main">
            <ul>
                <li v-for="product in lists" :key="product.product_id">
                    <div class="clearFix">
                        <router-link :to="`detail/${product.product_id}`">
                            <div class="fl">
                                <img :src="imgSrc" alt="">
                            </div>
                            <div class="fr">
                                <h1>{{ product.product_title }}</h1>
                                <h2>￥{{ product.product_price }}</h2>
                                <p>购买数量：{{ product.num }}</p>
                            </div>
                        </router-link>
                        <el-button type="danger" @click="buy(product.sc_id, product.product_id, product.num, product.product_price)" style="position: absolute; top: 50px; right: 80px;">购买</el-button>
                    </div>
                </li>
            </ul>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import NavMenu from '../common/Navmenu.vue'
    import FixedTool from '../common/Fixedtools.vue'
    import Footer from '../common/Footer.vue'
    import axios from 'axios'

    export default{
        data(){
            return{
                imgSrc: require('../../assets/images/products/ns.jpg'),
                lists: []
            }
        },
        components:{
            NavMenu,
            FixedTool,
            Footer
        },
        mounted(){
            this.shopCartList();
        },
        methods:{
            shopCartList(){
                axios.post('http://localhost:3000/api/shopCartList')
                .then(res => {
                    this.lists = res.data;
                })
            },
            buy(scId, productId, productNum, productPrice){
                axios.post('http://localhost:3000/api/buy',{
                    product_id: productId,
                    num: productNum
                })
                .then(res => {
                    if(res.data.code === 1){
                        alert('购买成功');
                        axios.post('http://localhost:3000/api/updateShopCart',{
                            SC_id: scId
                        });
                        axios.post('http://localhost:3000/api/order',{
                            product_id: productId,
                            product_price: productPrice,
                            num: productNum
                        });
                        location.reload();
                    }
                    else{
                        alert('购买失败，请联系客服');
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
    }
    .line2{
        margin-bottom: 10px;
    }
    .main{
        width: 1200px;
        margin: 60px auto;
        min-height: 500px;
        border: 1px solid #f6f6f6;
        ul{
            li{
                position: relative;
                margin-bottom: 10px;
                background: #f6f6f6;
                .clearFix{
                    width: 1000px;
                    height: 150px;
                    .fl{
                        width: 200px;
                        img{
                            width: 100%;
                        }
                    }
                    .fr{
                        width: 760px;
                        height: 150px;
                        h1{
                            margin-top: 20px;
                            font-size: 36px;
                            color: #000000;
                        }
                        h2{
                            font-size: 28px;
                            color: red;
                        }
                        p{
                            font-size: 20px;
                            color: #666666;
                        }
                    }
                }
            }
        }
    }
</style>