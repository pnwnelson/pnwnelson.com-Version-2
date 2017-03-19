import app from 'ampersand-app'
import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'ampersand-router'
import HomePage from './pages/home'
import ArchPage from './pages/exteriors'
import InteriorsPage from './pages/interiors'
import KellyPage from './pages/kelly'
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
		'architecture': 'architecture',
		'interiors': 'interiors',
		'kelly': 'kelly',
		'contact': 'contact'
	},

	home () {
		this.renderPage(HomePage)
	},

	architecture () {
		this.renderPage(ArchPage)
	},

	interiors () {
		this.renderPage(InteriorsPage)
	},

	kelly () {
		this.renderPage(KellyPage)
	},

	contact () {
		this.renderPage(ContactPage)
	}
})