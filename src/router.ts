import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Files from '@/views/tools/Files.vue'
import JsonToExcel from '@/views/tools/JsonToExcel.vue'
import ParseExcel from '@/views/tools/ParseExcel.vue'
import ResumeIndex from '@/views/resume/Index.vue'
const routes = [{
  path: '/',
  name: 'index',
  component: Index
},
{
  path: '/file',
  name: 'file',
  component: Files
},
{
  path: '/excel',
  component: ParseExcel
}, {
  path: '/toExcel',
  component: JsonToExcel
}, {
  path: '/res',
  component: ResumeIndex
}
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router