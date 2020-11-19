const nav =  [
  {
    text: 'Guide',
    link: '/guide/',
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
    text: 'Partners',
    link: '/partners/'
  },
  {
    text: 'GitHub',
    link: 'https://github.com/scbd/action-agenda-components'
  }
]


module.exports = nav