require('./bootstrap');

window.Vue = require('vue');

import App from './App.vue';
import router from './router/index.js';
import axios from 'axios'
import qs from 'qs'
import storage from 'good-storage'


Vue.prototype.$axios = axios;   //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs;
Vue.prototype.storage= storage;

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
