import Vue from 'vue'
import VueRouter from 'vue-resource'

import App from './app.vue'
import router from './router'

// var app = new Vue(require('./app.vue')).$mount('#app');

Vue.use(VueRouter)


const requireAll = requireContext => {
    return requireContext.keys().map(requireContext);
}
const modules = requireAll(require.context('./components', true, /\.vue$/));
modules.forEach(item => {
    Vue.component(item.name, item)
});

// var infiniteScroll =  require('./fn/infinite-scroll');


// import Toast from './fn/toast.vue';
// const Toast = Vue.extend(require('./fn/toast.vue'));


router.start(App, '#app')
