const path = require('path')

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    pathPrefix: "/Archon-group",
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: "images",
                path: path.join(__dirname, `src`, `images`),
            }
        },
        {
            resolve: 'gatsby-plugin-page-transitions',
        },
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        /* 'gatsby-plugin-image', */
    ]
}