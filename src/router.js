import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter()

router.map({
    '/': {
        name: 'app',
        component: function (resolve) {
            require(['./views/index.vue'], resolve)
        }
        // component: require('./views/index.vue')
    },
    '/inner': {
        name: 'toast',
        component: function (resolve) {
            require(['./views/inner.vue'], resolve)
        }
    },
})

router.beforeEach(transition => {
    document.title = transition.to.name || document.title;
    transition.next();
});

router.afterEach(() => {
    document.body.scrollTop = 0;
});

// 重定向位匹配到的
// router.redirect({
//     '*': '/'
// })

export default router
