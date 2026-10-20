<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from './stores/app'
import SiteNav from './components/site/SiteNav.vue'
import SiteFooter from './components/site/SiteFooter.vue'

const store = useStore()
const route = useRoute()

// Platform pages need the backend data bootstrap
const isPlatform = computed(() => route.path.startsWith('/platform'))
onMounted(() => {
  if (isPlatform.value) store.bootstrap()
})
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
