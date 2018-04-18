<template>
    <div class="container">
        <div class="title">
            <span>订单id</span>
            <span>卖家id</span>
            <span>买家id</span>
            <span>单价</span>
            <span>购买数量</span>
        </div>
        <ul>
            <li v-for="order in orders" :key="order.id">
                <span>{{ order.order_id }}</span>
                <span>{{ order.seller_id }}</span>
                <span>{{ order.buyer_id }}</span>
                <span>{{ order.product_price }}</span>
                <span>{{ order.num }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'

    export default{
        data(){
            return{
                orders: [

                ]
            }
        },
        mounted(){
            this.setorders();
        },
        methods: {
            setorders(){
                axios.post('http://localhost:3000/api/orderInfo')
                .then(res => {
                    this.orders = res.data;
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
            width: 19.6%;
            text-align: center;
            margin: 0 0 10px 0;
        }
    }
    .container{
        li{
            width: 900px;
            border-bottom: 1px solid #000000;
            margin: 0 0 10px 0;
            span{
                display: inline-block;
                width: 19.6%;
                text-align: center;
                margin: 0 0 10px 0;
            }
        }
    }
</style>
