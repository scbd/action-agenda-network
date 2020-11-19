const nav                   = require('../nav')
const en = require('./en')
const zh = require('./zh')

const themeConfig = {
  repo: 'scbd/action-agenda-network',
  docsDir: 'src',
  lastUpdated: true,
  editLinks: true,
  
  // lastUpdated: 'Last Updated', // string | boolean
  smoothScroll: true,
  locales: {
    '/': en,
    '/zh/': zh,
  }
}

module.exports = themeConfig
