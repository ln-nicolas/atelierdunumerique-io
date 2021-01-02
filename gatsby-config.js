module.exports = {
  siteMetadata: {
    title: "Atelier du numérique",
    description: "Expert du développement web et logiciel",
    url: "https://atelierdunumerique.io"
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "fake-id",
    //   },
    // },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
   // "gatsby-plugin-sitemap",
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
