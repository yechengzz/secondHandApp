import Vue from 'vue'
import VueRouter from 'vue-router'
import Axios from 'axios'

import Home from '@/components/Home'
import AboutUs from '@/components/aboutus/Aboutus'
import Search from '@/components/search/Search'
import My from '@/components/my/My'
import Login from '@/components/login/Login'
import ShopCart from '@/components/shopcart/Shopcart'
import Detail from '@/components/detail/Detail'
import AdminLogin from '@/components/admin/Login'
import Admin from '@/components/admin/Admin'
import User from '@/components/admin/User'
import EditUser from '@/components/admin/Edituser'
import Product from '@/components/admin/Product'
import EditProduct from '@/components/admin/Editproduct'
import Order from '@/components/admin/Order'
import EditOrder from '@/components/admin/Editorder'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            name: ['1']
        },
        {
            path: '/aboutus',
            component: AboutUs,
            name: ['2']
        },
        {
            path: '/search',
            component: Search,
            name: ['3']
        },
        {
            path: '/my',
            component: My,
            name: ['4'],
            beforeEnter: (to, from, next) => {
                let token  = sessionStorage.getItem('accessToken');
                Axios.post('http://localhost:3000/api/isLogin', {access_token: token})
                .then(res => {
                    if(res.data.code === 0){
                        next();
                    }
                    else{
                        next({name: 'Login'});
                    }
                })
                .catch(err => {
                    console.log(err);
                })
            }
        },
        {
            path: '/login',
            component: Login,
            name: 'Login'
        },
        {
            path: '/shopcart',
            component: ShopCart,
            name: ['5'],
            beforeEnter: (to, from, next) => {
                let token  = sessionStorage.getItem('accessToken');
                Axios.post('http://localhost:3000/api/isLogin', {access_token: token})
                .then(res => {
                    if(res.data.code === 0){
                        next();
                    }
                    else{
                        next({name: 'Login'});
                    }
                })
                .catch(err => {
                    console.log(err);
                })
            }
        },
        {
            path: '/detail/:id',
            component: Detail,
            name: ['0'],
            beforeEnter: (to, from, next) => {
                let token  = sessionStorage.getItem('accessToken');
                Axios.post('http://localhost:3000/api/isLogin', {access_token: token})
                .then(res => {
                    if(res.data.code === 0){
                        next();
                    }
                    else{
                        next({name: 'Login'});
                    }
                })
                .catch(err => {
                    console.log(err);
                })
            }
        },
        {
            path: '/adminlogin',
            component: AdminLogin
        },
        {
            path: '/admin',
            component: Admin,
            children: [
                { path: '/user', component: User },
                { path: '/edituser', component: EditUser },
                { path: '/product', component: Product },
                { path: '/editproduct', component: EditProduct },
                { path: '/order', component: Order },
                { path: '/editorder', component: EditOrder }
            ]
        }
    ]
})