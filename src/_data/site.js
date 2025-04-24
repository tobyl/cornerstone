module.exports = {
	"title": "Cornerstone Family Care",
	"description": "Minimal boilerplate for new projects built with Eleventy, Tailwind, PostCSS and esbuild",
	"url": "https://cornerstonecare.ca",
	"baseurl": "/cornerstone",
	"author": "Toby Leftly",
	"meta_data": {
		"twitter": "@chrissy_dev",
		"opengraph_default": "/static/img/opengraph-default.webp"
	},
	env: isProd ? 'prod' : 'dev',
  baseurl: isProd ? '/cornerstone' : '',
}
