const nav = require('../nav')

module.exports = {
  label:        'English',
  selectText:   'Languages',
  editLinkText: 'Edit this page',
  lastUpdated:  'Last Updated',
  title:        'Action Agenda Network',
  description:'Documents for the Action Agenda Network components and partner collaboration',
  nav:nav.en,
  sidebar: {
    '/guide/': [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '',
          'contribute.md',
        ]
      }
    ],
    '/partners/': [
      {
        title: 'Partners',
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