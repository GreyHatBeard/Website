const path = require('path');

const feedOptions = {
  title: 'GreyHatBeard',
  description: 'A Modern Workplace Podcast',
  feed_url: 'https://www.greyhatbeard.com/podcast.xml',
  site_url: 'https://www.greyhatbeard.com',
  image_url: 'https://www.greyhatbeard.com/GreyHatBeard-large.png',
  docs: 'http://www.greyhatbeard.com/rss/docs.html',
  managingEditor: 'Kevin McDonnell',
  webMaster: 'Kevin McDonnell',
  copyright: '2020 GreyHatBeard',
  language: 'en',
  categories: ['Modern Workplace','Microsoft 365','Office 365'],
  pubDate: 'Jan 24, 2020 04:00:00 GMT',
  ttl: '60',
  custom_namespaces: {
    'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'
  },
  custom_elements: [
    {'itunes:subtitle': 'A podcast about Microsoft Modern Workplace topics'},
    {'itunes:author': 'Kevin McDonnell'},
    {'itunes:summary': 'Al Eardley, Garry Trinder and Kevin McDonnell chat about the latest news and pick topics to discuss.'},
    {'itunes:owner': [
      {'itunes:name': 'Kevin Mconnell'},
      {'itunes:email': 'kevin@mcd79.com'}
    ]},
    {'itunes:image': {
      _attr: {
        href: 'https://www.greyhatbeard.com/GreyHatBeard-large.png'
      }
    }},
    {'itunes:category': [
      {_attr: {
        text: 'Technology'
      }}
    ]}
  ]
}


module.exports = {
  siteMetadata: {
    title: 'GreyHatBeard',
    description: 'A Modern Workplace Podcast',
    siteUrl: 'https://www.greyhatbeard.com',
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: path.join(__dirname, 'src', 'content'),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-abbr',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1170,
              quality: 90,
            },
          },
        ],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.greyhatbeard.com',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('postcss-color-function'), require('cssnano')()],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-156922990-1',
        // Puts tracking script in the head instead of the body
        head: true,
        // IP anonymization for GDPR compliance
        anonymize: true,
        // Disable analytics for users with `Do Not Track` enabled
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**'],
        // Specifies what percentage of users should be tracked
        sampleRate: 100,
        // Determines how often site speed tracking beacons will be sent
        siteSpeedSampleRate: 10,
      },
    },
    {
      resolve: `gatsby-plugin-podcast-rss-feed`,
      options: {
          feedOptions
      },
    },
  ],
};
