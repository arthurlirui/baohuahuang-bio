<script setup>
import { RouterLink } from 'vue-router'
import { siteConfig } from '../../data/site-config'
</script>

<template>
  <div class="home">
    <!-- Cinematic Hero -->
    <section class="hero">
      <div class="hero-content">
        <img :src="siteConfig.avatar" :alt="siteConfig.name" class="hero-avatar" />
        <h1 class="hero-name">{{ siteConfig.name }}</h1>
        <p class="hero-name-en">{{ siteConfig.nameEn }}</p>
        <h2 class="hero-headline">{{ siteConfig.hero.headline }}</h2>
        <p class="hero-sub">{{ siteConfig.hero.subheadline }}</p>
        <div class="hero-cta">
          <RouterLink :to="siteConfig.hero.ctaPrimary.to" class="btn-hero-primary">
            {{ siteConfig.hero.ctaPrimary.text }}
          </RouterLink>
          <RouterLink :to="siteConfig.hero.ctaSecondary.to" class="btn-hero-outline">
            {{ siteConfig.hero.ctaSecondary.text }}
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="section section-light">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ siteConfig.about.title }}</h2>
        </div>
        <div class="about-grid">
          <div class="about-text">
            <p v-for="(p, i) in siteConfig.about.paragraphs" :key="i">{{ p }}</p>
          </div>
          <aside class="about-sidebar">
            <div class="about-card">
              <h3>擅长领域</h3>
              <div class="skill-tags">
                <span v-for="s in siteConfig.about.skills" :key="s" class="skill-tag">{{ s }}</span>
              </div>
            </div>
            <div class="about-card" style="margin-top:16px;">
              <h3>所属机构</h3>
              <div v-for="a in siteConfig.about.affiliations" :key="a.name" class="affiliation">
                <a :href="a.url" target="_blank" rel="noopener"><strong>{{ a.name }}</strong></a>
                <p class="affiliation-role">{{ a.role }}</p>
              </div>
            </div>
            <a v-if="siteConfig.resume?.url" :href="encodeURI(siteConfig.resume.url)" class="btn btn-outline" style="display:block; margin-top:16px; text-align:center;" download>
              ⬇ {{ siteConfig.resume.label }}
            </a>
          </aside>
        </div>
      </div>
    </section>

    <!-- Works Gallery -->
    <section v-if="siteConfig.works.length" class="section section-gallery">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">个人作品</h2>
          <p class="section-sub">油画 · 数码绘图 · 名画拼贴</p>
        </div>
        <div class="works-grid">
          <div v-for="w in siteConfig.works" :key="w.id" class="work-card">
            <img :src="w.image" :alt="w.title" class="work-image" />
            <div class="work-info">
              <h3 class="work-title">{{ w.title }}</h3>
              <p class="work-meta">{{ w.year }} · {{ w.medium }} · {{ w.size }}</p>
              <p v-if="w.description" class="work-meta" style="margin-top:8px;">{{ w.description }}</p>
            </div>
          </div>
        </div>
        <div style="text-align:center; margin-top:40px;">
          <RouterLink to="/works" class="btn btn-outline">查看全部作品 →</RouterLink>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section v-if="siteConfig.projects.length" class="section section-light">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">项目</h2>
          <p class="section-sub">将艺术与技术结合的实践</p>
        </div>
        <div style="display:grid; gap:28px;">
          <div v-for="p in siteConfig.projects" :key="p.id" class="project-card">
            <img :src="p.cover" :alt="p.title" class="project-cover" />
            <div class="project-body">
              <h3 class="project-title">{{ p.title }}</h3>
              <p class="project-summary">{{ p.summary }}</p>
              <div class="project-tech">
                <span v-for="t in p.tech" :key="t" class="skill-tag">{{ t }}</span>
              </div>
              <div class="project-links">
                <RouterLink v-for="link in p.links.filter(l => l.to)" :key="link.label" :to="link.to" class="btn btn-primary">
                  {{ link.label }}
                </RouterLink>
                <a v-for="link in p.links.filter(l => l.url)" :key="link.label" :href="link.url" target="_blank" rel="noopener" class="btn btn-outline">
                  {{ link.label }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="contact-section">
      <h2 class="section-title">保持联系</h2>
      <p class="section-sub" style="color: var(--hero-text-muted);">合作 · 交流 · 委托</p>
      <a :href="`mailto:${siteConfig.contact.email}`" class="contact-email">{{ siteConfig.contact.email }}</a>
      <div class="contact-social">
        <a v-for="s in siteConfig.contact.social" :key="s.label" :href="s.url" target="_blank" rel="noopener">
          {{ s.icon }} {{ s.label }}
        </a>
      </div>
    </section>
  </div>
</template>
