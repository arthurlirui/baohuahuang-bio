<script setup>
import { siteConfig } from '../../data/site-config'
</script>

<template>
  <div class="section section-gallery" style="padding-top: 120px;">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">个人作品</h2>
        <p class="section-sub">油画 · 数码绘图 · 名画拼贴</p>
      </div>
      <div v-if="siteConfig.works.length" class="works-grid">
        <div v-for="w in siteConfig.works" :key="w.id" class="work-card">
          <img :src="w.image" :alt="w.title" class="work-image" />
          <div class="work-info">
            <h3 class="work-title">{{ w.title }}</h3>
            <p class="work-meta">{{ w.year }} · {{ w.medium }} · {{ w.size }}</p>
            <p v-if="w.description" class="work-meta" style="margin-top:8px;">{{ w.description }}</p>
          </div>
        </div>
      </div>
      <div v-else class="empty-state">
        <p>作品持续更新中…</p>
      </div>
    </div>
  </div>
</template>
