require('babel-core/register');
var fs = require('fs')
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Layout = require('./src/layout').default;
var HomePage = require('./src/pages/home').default;
var getConfig = require('hjs-webpack');

var config = getConfig({
	in: 'src/app.js',
	out: 'public',
	clearBeforeBuild: '!(images|favicon.ico)',
	isDev: process.env.NODE_ENV !== 'production',
	hostname: '192.168.86.237',
	html: function (data) {
		var homePageHtmlString = ReactDOMServer.renderToString(React.createElement(HomePage))
		var layoutPageHtmlString = ReactDOMServer.renderToString(React.createElement(Layout))

		return {
			'200.html': data.defaultTemplate(
				{
					head: `<link rel="shortcut icon" href="favicon.ico">`,
					head: `<meta name="description" content="Kelly Nelson offers beautiful and professional architectural and real estate photography based in the Pacific Northwest. Photographer serving Seattle, Portland, Spokane, Tri-Cities and beyond.">`
				}),
			'index.html': data.defaultTemplate(
				{
					title: 'Kelly Nelson | Pacific Northwest Architectural Photographer',
					head: `<link rel="shortcut icon" href="favicon.ico">`,
					head: `<meta name="description" content="Kelly Nelson offers beautiful and professional architectural and real estate photography based in the Pacific Northwest. Photographer serving Seattle, Portland, Spokane, Tri-Cities and beyond.">`,
					html: `<div id='root'>${layoutPageHtmlString}</div>`
				})

			}
		}
	})

const babelrc = JSON.parse(fs.readFileSync('./.babelrc'))
babelrc.env = {development: {presets: ['react-hmre']}}
config.module.loaders[0].query = babelrc

module.exports = config


// '200.html': data.defaultTemplate(),
// 			'index.html': [
// 				'<html>',
// 					'<head>',
// 						'<link href="' + data.css + '" rel="stylesheet" type="text/css" />',
// 					'</head>',
// 					'<body>',
// 						'<script src="' + data.main + '"></script>',
// 					'</body>',
// 				'</html>'
// 				].join('')

