const { plugins } = require('@spraoi/gatsby-config');

module.exports = {
  plugins: [
    ...plugins,
    {
      options: {
        background_color: '#f8fbfe',
        display: 'browser',
        icon: 'static/images/favicon.png',
        name: 'Shockmouse Media',
        short_name: 'Shockmouse Media',
        start_url: '/',
        theme_color: '#f8fbfe',
      },
      resolve: 'gatsby-plugin-manifest',
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: 'mg2wKxlJlnGBbLO6Vs9PoJhavypol3uu',
        devKey: 'mg2wKxlJlnGBbLO6Vs9PoJhavypol3uu',
        trackPage: true,
        trackPageDelay: 50,
        delayLoad: false,
        delayLoadTime: 1000,
        manualLoad: false,
      }
    },
    {
      options: { name: 'data', path: 'src/data' },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: { name: 'images', path: 'src/images' },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        plugins: [
          {
            options: { maxWidth: 684, quality: 100, withWebp: true },
            resolve: 'gatsby-remark-images',
          },
          {
            options: { inlineCodeMarker: null },
            resolve: 'gatsby-remark-prismjs',
          },
          'gatsby-remark-numbered-footnotes',
          'gatsby-remark-reading-time',
          'gatsby-remark-dropcap',
        ],
      },
      resolve: 'gatsby-transformer-remark',
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-extract-image-colors',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    'gatsby-plugin-meta-redirect',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `63n4orvvac54`,
        accessToken: `F4QHqWzR4PT-8iCzc0MT9dmp7nWVZXinNW-mVkQlBnA`,
      },
    },
  ],
  siteMetadata: {
    banner: '/images/banner-1200x628.png',
    datePublished: '2018-01-01',
    facebook: 'shockmousemedia',
    instagram: 'shockmousemedia',
    linkedIn: 'shockmousemedia',
    logo: '/images/favicon.png',
    siteLanguage: 'en',
    siteLocal: 'en_US',
    siteName: 'Shockmouse Media',
    siteUrl: 'https://shockmouse.com',
    twitter: 'shockmousemedia',
  },
};
