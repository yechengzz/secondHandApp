<template>
    <div class="container">
        <NavMenu></NavMenu>
        <FixedTools></FixedTools>
        <div class="main">
            <h1>懂你的贰货</h1>
            <input type="text" placeholder="请输入想要搜索的商品名">
        </div>
        <div class="products">
            <ul>
                <li v-for="product in products" :key="product.product_id">
                    <router-link :to="`detail/${product.product_id}`">
                        <img :src="src" alt="">
                        <h2>{{ product.product_title }}</h2>
                        <p>{{ product.product_intro }}</p>
                        <h4>￥{{ product.product_price }}</h4>
                    </router-link>
                </li>
            </ul>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import NavMenu from '../common/Navmenu.vue'
    import FixedTools from '../common/Fixedtools.vue'
    import Footer from '../common/Footer.vue'
    import axios from 'axios'
    

    export default{
        data(){
            return{
                products: [],
                src: require('../../assets/images/products/ns.jpg')
            }
        },
        components:{
            NavMenu,
            FixedTools,
            Footer
        },
        mounted(){
            this.getProducts();
        },
        methods:{
            getProducts(){
                axios.post('http://localhost:3000/api/productList')
                .then(res => {
                    this.products = res.data;
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main{
        min-width: 1200px;
        background: url('../../assets/images/search/bg.png') no-repeat center 100%;
        padding: 110px 0 290px 0;
        h1{
            font-size: 56px;
            text-align: center;
            color: #099e80;
        }
        input{
            display: block;
            width: 558px;
            margin: 35px auto 0 auto;
            border: none;
            box-sizing: border-box;
            border-radius: 8px;
            font-size: 16px;
            padding: 20px;
            background: url('../../assets/images/search/icon.png') no-repeat #ffffff;
            background-position: center right;
            background-size: 7% 66%;
        }
    }
    .products{
        ul{
            width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            position: relative;
            top: -120px;
            li{
                width: 290px;
                height: 340px;
                margin-bottom: 10px;
                padding-top: 10px;
                background: #f6f6f6;
                img{
                    width: 90%;
                    display: block;
                    margin: 0 auto;
                }
                h2{
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 90%;
                    margin: 10px auto;
                    font-size: 28px;
                    color: #000000;
                }
                p{
                    font-size: 20px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 90%;
                    margin: 0 auto;
                    color: #666666;
                }
                h4{
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 90%;
                    margin: 10px auto;
                    font-size: 28px;
                    text-align: right;
                    color: red;
                }
            }
        }
    }
</style>
