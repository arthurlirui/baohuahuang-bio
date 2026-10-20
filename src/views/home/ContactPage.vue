<script setup>
import { siteConfig } from '../../data/site-config'
</script>

<template>
  <section class="contact-section" style="padding-top: 140px; min-height: 100vh; display:flex; flex-direction:column; justify-content:center;">
    <h2 class="section-title">保持联系</h2>
    <p class="section-sub" style="color: var(--hero-text-muted);">合作 · 交流 · 委托</p>
    <a :href="`mailto:${siteConfig.contact.email}`" class="contact-email">{{ siteConfig.contact.email }}</a>
    <div class="contact-social">
      <a v-for="s in siteConfig.contact.social" :key="s.label" :href="s.url" target="_blank" rel="noopener">
        {{ s.icon }} {{ s.label }}
      </a>
    </div>
  </section>
</template>
