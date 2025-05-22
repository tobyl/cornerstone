module.exports = () => {
	const isProd = process.env.ELEVENTY_ENV === 'production'

	return {
		"title": "Cornerstone Family Care",
		"description": "Welcome to Cornerstone Family Care, a new concept in providing clients with the support they need within a warm and confidential environment.",
		"url": "https://cornerstonefamilycare.ca",
		"author": "Toby Leftly",
		"meta_data": {
			"twitter": "@tobyleftly",
			"opengraph_default": "/static/img/opengraph-default.webp"
		},
		env: isProd ? 'prod' : 'dev',
	}
}
