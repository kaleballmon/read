require("dotenv").config({ path: __dirname + "/.env" })

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString: process.env.DB_KEY,
        dbName: `read`,
        collection: [`authors`, `books`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
