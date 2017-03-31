import app from 'ampersand-app'
import React from 'react'
import localLinks from'local-links'
import ampersandMixin from 'ampersand-react-mixin'
import { Nav, Navbar, NavItem, Footer } from 'react-bootstrap'

export default React.createClass({
	mixins: [ampersandMixin],

	onClick (event) {
		const pathname = localLinks.getLocalPathname(event)

		if (pathname) {
			event.preventDefault()
			app.router.history.navigate(pathname, {trigger:true})
		}
	},

	render () {
		// const {me} = this.props // this is ES6 and is called destructuring. ES5 is: const me = this.props.me
		// 												// this will populate the {me.name} when it becomes available, since the DOM is
		// 												// rendered before the data is available.

		return (
			<div onClick={this.onClick}>
				<Navbar collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<a href='/'><img src='./images/logo.jpg' alt='logo' className='nav-bar-logo pull-left'/></a>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem eventKey={1} href='/'>| Kelly Nelson Photography |</NavItem>
							<NavItem eventKey={2} href='/architecture'>Architecture</NavItem>
							<NavItem eventKey={4} href='/kelly'>Kelly</NavItem>
							<NavItem eventKey={5} href='/contact'>Contact</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<div className='container main-children-container'>
					{this.props.children} 
				</div>
				<footer>
					<div className='row'>
						<div className='col-xs-12'>
							<p className='copyright'>&copy; 2017 KELLY NELSON PHOTOGRAPHY. ALL RIGHTS RESERVED.</p>
						</div>
					</div>
				</footer>
			</div>
		)
	}
})
					// <nav className='top-nav top-nav-light cf' role='navigation' onSelect={() => null}>
					// 	<input id='menu-toggle' className='menu-toggle' type='checkbox'/>
					// 	<label htmlFor='menu-toggle'>Menu</label>
					// 	<ul className='list-unstyled list-inline cf'>
					// 		<a href='/'><img src='./images/logo.jpg' alt='logo' className='nav-bar-logo pull-left'/></a>
					// 		<li>| Kelly Nelson Photography |</li>
					// 		<li ><a href='/exteriors'>Exteriors</a></li>
					// 		<li><a href='/interiors'>Interiors</a></li>
					// 		<li><a href='/about'>About</a></li>
					// 		<li><a href='/contact'>Contact</a></li>
					// 	</ul>
					// </nav>


					// <ul className='list-unstyled list-inline cf'>
					// 	<li><a href='/'><img src='./images/logo.jpg' alt='logo' className='nav-bar-logo pull-left'/></a></li>
					// </ul>
					// <ul className='list-unstyled list-inline cf' >
					// 	<li><a className='nav-bar-name' href='/'>| Kelly Nelson Photography |</a></li>
					// </ul>