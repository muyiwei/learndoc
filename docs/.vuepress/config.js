const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '学习例子',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    docsDir: "docs",
    editLinks: true,
    nav: [
      {
        text: '前端面试',
        link: '/interview/',
      },
      {
        text: '学习例子',
        link: '/learn/'
      }
    ],
    sidebar: {
      '/interview/':[ {
        title:"eventlop理解",
        path:"eventlop.md",
      
      },["jinks.md", "jinkins"]
    ]

    },
    "learn":[
      {
        title:"从 0到 1 jinks vue项目自动构建",
        path:"jinks.md"
      }

    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
