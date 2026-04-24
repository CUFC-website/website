/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Bright Studio`,
    description: `A clean Gatsby starter website for a modern digital studio.`,
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bright Studio`,
        short_name: `Bright`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#111827`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
