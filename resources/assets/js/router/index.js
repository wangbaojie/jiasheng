import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
export default new VueRouter({
    saveScrollPosition: true,
    routes: [
        {
            name: 'hello',
            path: '/',
            component: resolve => void(require(['../components/Hello.vue'], resolve))
        },
        {
            name: 'list',
            path: '/list',
            component: resolve => void(require(['../components/List.vue'], resolve))
        },
        {
            name: 'details',
            path: '/details',
            component: resolve => void(require(['../components/Details.vue'], resolve))
        }
    ]
});
