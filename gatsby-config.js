/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `DM Sans`,
            variants: [`500`, `700`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`, `800`],
          },
        ],
      },
    },
  ],
}
