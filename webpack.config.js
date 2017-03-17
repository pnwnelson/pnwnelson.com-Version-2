var config = require('hjs-webpack')

module.exports = config({
	in: 'src/app.js',
	out: 'public',
	clearBeforeBuild: '!(images|favicon.ico)',
	isDev: process.env.NODE_ENV !== 'production',
	hostname: '192.168.86.237',
	html: true
})