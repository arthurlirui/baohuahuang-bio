<script setup>
import { RouterLink } from 'vue-router'
import { siteConfig } from '../../data/site-config'
</script>

<template>
  <nav class="site-nav">
    <div class="site-nav-inner">
      <RouterLink to="/" class="site-nav-brand">{{ siteConfig.name }}</RouterLink>
      <div class="site-nav-links">
        <RouterLink to="/">主页</RouterLink>
        <RouterLink to="/works">作品</RouterLink>
        <RouterLink to="/platform">AI 平台</RouterLink>
        <RouterLink to="/contact">联系</RouterLink>
      </div>
    </div>
  </nav>
</template>
