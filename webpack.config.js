var config = require('hjs-webpack')

module.exports = config({
	in: 'src/app.js',
	out: 'public',
	clearBeforeBuild: '!(images|favicon.ico|index.html)',
	isDev: process.env.NODE_ENV !== 'production',
	hostname: '192.168.86.237',
	html: true,
	module: {
      loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel", query: {presets:['react','es2015']}}
      ]
  }
})