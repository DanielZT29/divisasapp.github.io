module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jpg,js,png,html,json,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};