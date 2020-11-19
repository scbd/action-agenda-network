const themeConfig =  require('./configs/theme-config')
const { description } = require('../../package')

module.exports = {
  base: '/action-agenda-network/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  // title: 'Action Agenda Network',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  // description: description,

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
  locales:{
    '/':{
      lang: 'en-US',
      title: 'Action Agenda Network',
      description
    },
    '/zh/':{
      lang: 'zh-CN',
      title:'行动议程网络',
      description: '行动议程网络组件和合作伙伴协作的文档'
    }
  },
  themeConfig,

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@images': 'src/images/'
      }
    }
  }
}
