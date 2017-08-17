import Dashboard from './components/Bookmark.vue'
import ProductsList from './components/products/List.vue'
import ProductForm from './components/products/Form.vue'

import VueRouter from 'vue-router'
export var router = new VueRouter({
    history: true,
    linkActiveClass: 'is-active',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
        },
        {
            path: '/products',
            name: 'productsList',
            component: ProductsList,
        },
        {
            path: '/products/:product_id/edit',
            name: 'productEdit',
            component: ProductForm,
        },
        {
            path: '/products/new',
            name: 'productNew',
            component: ProductForm,
        },
        { path: '*', redirect: '/dashboard' }
    ]
});