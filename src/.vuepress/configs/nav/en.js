const nav =  [
  {
    text: 'Guide',
    link: '/guide/',
  },
  {
    text: 'Partners',
    link: '/partners/'
  },
  {
    text: 'Components',
    ariaLabel: 'Components',
    items: [
            { text: 'V1', link: 'https://scbd.github.io/action-agenda-components/components/v1/'  },
            {
              text: 'Under Development',
              ariaLabel: 'Under Development',
              items: [
                      { text: 'V2', link: '/components/v2/' }
                    ]
            }
          ]
  },
  {
    text: 'GitHub',
    link: 'https://github.com/scbd/action-agenda-components'
  }
]


module.exports = nav