import { createRouter, createWebHistory } from 'vue-router'

// Site (artist personal homepage) routes — root level
import HomePage from '../views/home/HomePage.vue'
import WorksGallery from '../views/home/WorksGallery.vue'
import ContactPage from '../views/home/ContactPage.vue'

// Platform (AI oil painting) routes — nested under /platform
import PlatformLayout from '../layouts/PlatformLayout.vue'
import PlatformHome from '../views/platform/PlatformHome.vue'
import Create from '../views/platform/Create.vue'
import Teaching from '../views/platform/Teaching.vue'
import Gallery from '../views/platform/Gallery.vue'
import About from '../views/platform/About.vue'

const routes = [
  // ---- Artist personal homepage ----
  { path: '/', name: 'home', component: HomePage, meta: { title: '黄宝桦 · 油画家个人主页' } },
  { path: '/works', name: 'works', component: WorksGallery, meta: { title: '个人作品 · 黄宝桦' } },
  { path: '/contact', name: 'contact', component: ContactPage, meta: { title: '联系 · 黄宝桦' } },

  // ---- AI Oil Painting Platform ----
  {
    path: '/platform',
    component: PlatformLayout,
    children: [
      { path: '', name: 'platform-home', component: PlatformHome, meta: { title: 'AI 油画艺术教学平台' } },
      { path: 'create', name: 'platform-create', component: Create, meta: { title: 'AI 油画创作' } },
      { path: 'teaching', name: 'platform-teaching', component: Teaching, meta: { title: '油画教学' } },
      { path: 'teaching/:id', name: 'platform-article', component: () => import('../views/platform/Article.vue'), meta: { title: '教学文章' } },
      { path: 'gallery', name: 'platform-gallery', component: Gallery, meta: { title: '作品画廊' } },
      { path: 'about', name: 'platform-about', component: About, meta: { title: '关于平台' } },
    ],
  },

  // 404
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || '黄宝桦 · 油画家个人主页'
})

export default router
