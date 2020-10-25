require('dotenv').config({path: __dirname + '/.env'})

module.exports = {
	plugins: [
		{
			resolve: `gatsby-source-mongodb`,
			options: {
				connectionString: `mongodb+srv://shell:${process.env.DB_KEY}@kluster.flfaf.mongodb.net`,
				dbName: `read`,
				collection: `authors`,
			}
		},
	],
}
