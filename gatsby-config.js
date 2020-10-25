module.exports = {
	plugins: [
		{
			resolve: `gatsby-source-mongodb`,
			options: {
				connectionString: `mongodb+srv://shell:ddcsg0HPzlVRf4mb@kluster.flfaf.mongodb.net`,
				dbName: `read`,
				collection: `authors`,
			}
		},
	],
}
