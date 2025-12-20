import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "星云境 | Astral Nebula",
  description: "星云境 合成文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '快速开始', link: 'docs/总览.md' }
    ],

    sidebar: [
      {
        text: '合成文档',
        items: [
          { text: '武器', link: 'docs/合成文档/武器' },
          { text: '装备', link: 'docs/合成文档/装备' },
          { text: '材料', link: 'docs/合成文档/材料' },
          { text: '工具', link: 'docs/合成文档/工具' },
          { text: '食物', link: 'docs/合成文档/食物' },
        ]
      },
      {
        text: '其他',
        items: [
          { text: '更新日志', link: 'docs/其他文档/更新日志' },
        ]
      },
      {
        text: '社区文档',
        items: [
          { text: '编写规范', link: 'docs/社区文档/编写规范' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cat-Baka/AstralNebula-docs' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/3494372901390823?'},
      { icon: 'qq', link:'https://qm.qq.com/q/x7PfCIi8uI'}
    ]
  }
})
