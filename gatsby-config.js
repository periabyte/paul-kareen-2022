module.exports = {
	pathPrefix: '/paul-kareen-2022',
	siteMetadata: {
		title: `Paul Kareen 2022`,
		siteUrl: `https://periabyte.github.io`,
	},
	plugins: [
		'gatsby-plugin-postcss',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
	],
};
