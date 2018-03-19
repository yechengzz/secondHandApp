import Vue from 'vue'
import VueRouter from 'vue-router'

/*liuxk*/
import Home from '@/components/Home'

/*member*/
import Member from '@/components/member/Index.vue'
import Account from '@/components/member/account/Account.vue'
import Recharge from '@/components/member/recharge/Index.vue'
import RechargePage from '@/components/member/recharge/Recharge.vue'
import BindBankCard from '@/components/member/recharge/BindCard.vue'
import WithdrawPage from '@/components/member/account/Withdraw.vue'
import InvestRecord from '@/components/member/record/InvestRecord.vue'
import FundRecord from '@/components/member/record/FundRecord.vue'




/*yec*/
import Information from '@/components/information/Index.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            name: ['1']
        }
    ]
})