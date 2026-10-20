<script setup>
import { onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from './stores/app'
import SiteNav from './components/site/SiteNav.vue'
import SiteFooter from './components/site/SiteFooter.vue'

const store = useStore()
const route = useRoute()

// Platform pages need the backend data bootstrap.
// Watch route changes so navigating from site → /platform triggers it,
// not just a hard load directly onto a platform page.
const isPlatform = computed(() => route.path.startsWith('/platform'))

function ensureBootstrap() {
  if (isPlatform.value) store.bootstrap()
}

onMounted(ensureBootstrap)
watch(isPlatform, ensureBootstrap)
</script>

<template>
  <div class="app-layout">
    <SiteNav />
    <main class="app-main">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>
