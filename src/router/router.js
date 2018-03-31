import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import AboutUs from '@/components/aboutus/Aboutus'
import Search from '@/components/search/Search'

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
        }
    ]
})