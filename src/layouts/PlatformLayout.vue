<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div style="padding-top: 0;">
    <!-- Platform sub-navigation -->
    <nav class="platform-nav">
      <div class="platform-nav-inner">
        <RouterLink to="/platform" class="platform-nav-brand">🎨 AI 油画平台</RouterLink>
        <div class="platform-nav-links">
          <RouterLink to="/platform">首页</RouterLink>
          <RouterLink to="/platform/create">AI 创作</RouterLink>
          <RouterLink to="/platform/teaching">油画教学</RouterLink>
          <RouterLink to="/platform/gallery">作品画廊</RouterLink>
          <RouterLink to="/platform/about">关于</RouterLink>
          <RouterLink to="/" class="platform-nav-back">← 返回主站</RouterLink>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>
