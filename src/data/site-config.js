/**
 * 艺术家个人主页配置
 *
 * 灵感来自 ArtistPass：所有展示内容集中在一个配置文件中，
 * 修改这个文件即可更新主页，无需改动组件代码。
 * 未来可扩展为从后端 API 加载（Vercel Blob / 后端接口）。
 */
export const siteConfig = {
  // ---- 基础信息 ----
  name: '黄宝桦',
  nameEn: 'Baohua Huang',
  namePronunciation: 'Baohua Huang',
  role: '油画家 · 艺术学硕士',
  tagline: '学院派油画技艺 × 数字制造技术 × AIGC 辅助创作',
  avatar: '/uploads/avatar.jpg',

  // ---- Hero 区 ----
  hero: {
    headline: '用画笔与代码，探索油画的当代语言',
    subheadline:
      '广西艺术学院艺术学硕士，擅长油画、数码绘图与名画拼贴。' +
      '研究方向聚焦学院派油画技艺与数字制造技术的融合创新，' +
      '尤其关注三维打印在浮雕设计、油画立体化呈现及 AIGC 辅助创作中的应用。',
    ctaPrimary: { text: '浏览作品', to: '/works' },
    ctaSecondary: { text: 'AI 油画平台 →', to: '/platform' },
  },

  // ---- 关于 ----
  about: {
    title: '关于我',
    paragraphs: [
      '本人毕业于广西艺术学院 20 级艺术学美术教育专业油画班，硕士亦就读于此。',
      '作为艺术学专业在读硕士，本人擅长油画、数码绘图、名画拼贴、素描和中国画等，研究方向聚焦于学院派油画技艺与数字制造技术的融合创新，尤其关注三维打印在浮雕设计、油画立体化呈现及 AIGC 辅助创作中的应用可能。',
      '在学院期间，我掌握了基础的 AIGC 三维建模（3D Diffusion Model）、AI 辅助创作及数字美学分析能力，并持续探索如何将敦煌壁画、侗族刺绣等传统艺术语言通过增材制造技术进行当代转译。',
      '曾主导开发"非遗纹样三维重构"课题，完成从二维图案到可打印模型的完整工作流实践。结合我的艺术理论素养与数字创作技能，我希望能够参与三维打印在文化创意领域的前沿项目，特别是在传统艺术数字化保存、生成式 AI 与实体打印结合等方向贡献跨学科视角。',
    ],
    skills: [
      '油画', '数码绘图', '名画拼贴', '素描', '中国画',
      'AIGC 三维建模', '3D Diffusion Model', 'AI 辅助创作',
      '数字美学分析', '增材制造', '浮雕设计',
    ],
    affiliations: [
      { name: '广西艺术学院', url: 'https://www.gxau.edu.cn/', role: '艺术学硕士在读' },
    ],
  },

  // ---- 个人作品（手工油画等） ----
  works: [
    {
      id: 'w1',
      title: '作品一',
      year: 2023,
      medium: '布面油画',
      size: '80 × 100 cm',
      image: '/uploads/works/work-1.jpg',
      description: '',
    },
    {
      id: 'w2',
      title: '作品二',
      year: 2023,
      medium: '布面油画',
      size: '60 × 80 cm',
      image: '/uploads/works/work-2.jpg',
      description: '',
    },
  ],

  // ---- 项目入口 ----
  projects: [
    {
      id: 'oil-platform',
      title: 'AI 油画艺术教学平台',
      summary:
        '集成主流视觉大模型的油画创作与教学平台，支持文生图油画生成、12 种艺术风格预设、油画教学课程与作品画廊。',
      tech: ['Vue 3', 'FastAPI', 'DALL·E 3', '通义万相', '智谱 CogView', 'Stable Diffusion'],
      cover: '/uploads/projects/oil-platform-cover.jpg',
      links: [
        { label: '进入平台', to: '/platform' },
        { label: '源代码', url: 'https://github.com/arthurlirui/baohuahuang-bio/tree/main/OilPaintingPlatform' },
      ],
    },
  ],

  // ---- 简历 / 作品集下载 ----
  resume: {
    label: '下载个人作品集',
    url: '/uploads/黄宝桦个人作品集.pdf',
  },

  // ---- 联系方式 ----
  contact: {
    email: '1305838559@qq.com',
    social: [
      { label: '邮件', icon: '✉', url: 'mailto:1305838559@qq.com' },
    ],
  },

  // ---- 站点元信息 ----
  site: {
    title: '黄宝桦 · 油画家个人主页',
    footer: '© 2024 黄宝桦 Baohua Huang · 油画创作 · AIGC 艺术研究',
  },
}

export default siteConfig
