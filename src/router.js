import app from 'ampersand-app'
import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'ampersand-router'
import HomePage from './pages/home'
import ExteriorsPage from './pages/exteriors'
import InteriorsPage from './pages/interiors'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import Layout from './layout'

export default Router.extend({
	
	renderPage(Page, options) { // Rendering the layout component and then routing each individual page into that layout "view".
		const Main = (
			<Layout>
				<Page {...options} />
			</Layout>
		)

		ReactDOM.render(Main, document.getElementById('root'))
	},

	routes: {
		'': 'home',
		'exteriors': 'exteriors',
		'interiors': 'interiors',
		'about': 'about',
		'contact': 'contact'
	},

	home () {
		this.renderPage(HomePage)
	},

	exteriors () {
		this.renderPage(ExteriorsPage)
	},

	interiors () {
		this.renderPage(InteriorsPage)
	},

	about () {
		this.renderPage(AboutPage)
	},

	contact () {
		this.renderPage(ContactPage)
	}
})