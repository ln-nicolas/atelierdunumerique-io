module.exports = {
  siteMetadata: {
    title: "atelierdunumerique",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "fake-id",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
