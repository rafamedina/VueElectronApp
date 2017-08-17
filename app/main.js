
var Vue = require('vue');
import VueRouter from 'vue-router'
import VueBreadcrumbs from 'vue-breadcrumbs'
import Vuelidate from 'vuelidate'

import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import 'font-awesome/css/font-awesome.css'

Vue.use(VueRouter)
Vue.use(VueBreadcrumbs)
Vue.use(Vuelidate)
Vue.use(Buefy, {
    defaultIconPack: 'fa'
})


import store from './store'
import { router } from './routes.js'
import App from './App.vue'

export default Vue;

new Vue({
    el: 'app',
    store,
    router: router,
    render: app => app(App)
});

