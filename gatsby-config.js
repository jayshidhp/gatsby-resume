/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Jayshidh Patel`,
    author: `Jayshidh Patel`,
    description: `I am an ambitious IT consultant, Business System Analyst and a Certified Data Science Professional. I help corporations find business solutions and I have experience working in Healthcare and Banking industry. I am passionate about how technology can open new possibilities endlessly and keep inspiring the world. My goal in life is continuous learning and to keep finding those 'ahaan moments' along the way.`,
    siteUrl: `https://localhost`,
    social: {
      twitter: `jayshidh`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jayshidh Patel`,
        short_name: `CV`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#38B2AC`,
        display: `standalone`,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    'gatsby-plugin-netlify-cms',
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true, // Enable tailwindcss support
      },
    },
  ],
};
