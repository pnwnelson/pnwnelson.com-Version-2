require('babel-core/register')
var getConfig = require('hjs-webpack')
var React = require('react')
var HomePage = require('./src/pages/home')
var Layout = require('./src/layout')

module.exports = getConfig({
	in: 'src/app.js',
	out: 'public',
	clearBeforeBuild: '!(images|favicon.ico)',
	//hostname: 'Kellys-MacBook-Air.local',
	isDev: true,
	html: function (data) {
		return {
			'index.html': template(data, React.renderToString(React.createElement(HomePage))),
			'200.html': template(data, React.renderToString(React.createElement(Layout)))
		}
	},
	module: {
      loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel", query: {presets:['react','es2015']}}
      ]
  }
})

function template (buildData, html) {
	return [
		'<!doctype>',
		'<html>',
			'<head>',
				'<meta charset="utf-8"/>',
				'<meta name="viewport" content="width=device-width, initial-scale=1">',
				'<link rel="stylesheet" href="/' + buildData.css + '"/>',
			'</head>',
			'<body>',
				html,
			'</body>',
			'<script src="/' + buildData.main + '"></script>',
		'<html>'
	].join('')
}

// const babelrc = JSON.parse(fs.readFileSync('./.babelrc'))
// babelrc.env - {development: {presets: ['react-hmre']}}
// config.module.loaders[0].query = babelrc