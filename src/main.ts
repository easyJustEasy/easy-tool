import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router.js'
import '@/assets/base.css'
const hostname = window.location.href;
if (hostname === 'http://localhost:3000/#/') {
    let url = 'http://www.2u1.cn'
    window.location.replace(url)

}
if (hostname === 'http://2u1.cn/' || hostname === 'http://2u1.cn' || hostname === 'http://2u1.cn/#/') {
    let url = 'http://www.2u1.cn'
    window.location.replace(url)
}

const app = createApp(App)

app.use(ElementPlus)
app.use(router);
app.mount('#app')
