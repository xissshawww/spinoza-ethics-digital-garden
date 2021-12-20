module.exports = {
  siteMetadata: {
    title: 'spinoza',
    description: `spinoz-`,
    siteUrl: 'https://deep-swarm.xyz/spinoza',
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        basePath: `/spinoza`,
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/spinoza/hello`,
      },
    },
  ],
}
