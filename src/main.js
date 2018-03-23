import 'babel-polyfill'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/common.css'
import './assets/css/iconfont.css'

import router from './router/router'
import App from './App.vue'

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});
