<template>
    <div class="container">
        <div class="title">
            <span>商品id</span>
            <span>标题</span>
            <span>单价</span>
            <span>库存</span>
            <span>介绍</span>
            <span>状态</span>
            <span>卖家id</span>
        </div>
        <ul>
            <li v-for="product in products" :key="product.id">
                <span>{{ product.product_id }}</span>
                <span>{{ product.product_title }}</span>
                <span>{{ product.product_price }}</span>
                <span>{{ product.stock_num }}</span>
                <span>{{ product.product_intro }}</span>
                <span>{{ product.product_state }}</span>
                <span>{{ product.user_id }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'

    export default{
        data(){
            return{
                products: [

                ]
            }
        },
        mounted(){
            this.setproducts();
        },
        methods: {
            setproducts(){
                axios.post('http://localhost:3000/api/productInfo')
                .then(res => {
                    this.products = res.data;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .title{
        width: 900px;
        border-bottom: 1px solid #000000;
        margin: 0 0 10px 0;
        span{
            display: inline-block;
            width: 13.8%;
            text-align: center;
            margin: 0 0 10px 0;
        }
    }
    .container{
        li{
            width: 900px;
            margin: 0 0 10px 0;
            border-bottom: 1px solid #000000;
            span{
                display: inline-block;
                width: 13.8%;
                text-align: center;
                margin: 0 0 10px 0;
            }
        }
    }
</style>
