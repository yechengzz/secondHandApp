import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import AboutUs from '@/components/aboutus/Aboutus'
import Search from '@/components/search/Search'
import My from '@/components/my/My'
import Login from '@/components/login/Login'

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
            name: ['4']
        },
        {
            path: '/my',
            component: My,
            name: ['5']
        },
        {
            path: '/login',
            component: Login
        }
    ]
})