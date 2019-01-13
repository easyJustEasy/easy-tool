import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'index',
        component: () =>
      import('@/views/Index.vue')
    },
    {
        path: '/file',
        name: 'file',
        component: () =>
      import('@/views/tools/Files.vue')
    },
    {
        path: '/excel',
        component: () =>
      import('@/views/tools/ParseExcel.vue')
    }, {
        path: '/toExcel',
        component: () =>
      import('@/views/tools/JsonToExcel.vue')
    }
    ]
})
