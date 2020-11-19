const nav = require('../nav')

module.exports =  {
    label:        '简体中文',
    selectText:   '选择语言',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated:  '最近更新时间',
    title:        '行动议程网络',
    description: '行动议程网络组件和合作伙伴协作的文档',
    nav:nav.zh,
    sidebar: {
      '/zh/guide/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            '',
            'contribute.md',
          ]
        }
      ],
      '/zh/partners/': [
        {
          title: '伙伴',
          collapsable: false,
          children: [
            '',
            'scbd/',
            'wcmc/',
          ]
        }
      ],
    }
  }