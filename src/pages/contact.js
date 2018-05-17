import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ContactPage extends Component {

	// static propTypes = {
	// 	query: PropTypes.string.isRequired
	// }

	constructor() {
		super()
		this.state = {
			query: ''
		},
		this.onClick = this.onClick.bind(this)
	}

	updateQuery (query) {
		this.setState({ 
			query: query.trim() 
		})
	}

	onClick (e) {
		e.preventDefault()
		console.log('Submit button clicked')
		// return
		fetch('https://pnwnelson-prod.herokuapp.com/sendmail', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: this.state.email,
				name: this.state.name,
				text: this.state.text
			})
		})
		console.log('finished kinda')
		console.log('fetch fired off')
		.then((response) => response.json())
		.then((responseJson) => {
			if (responseJson.success) {
				this.setState({formSent: true})
			}
			else this.setState({formSent: false})
		})
		.catch((error) => {
			console.log(error)
		})
	}

	render() {

		const { query } = this.state

		return (
			<div className='row'>
				<div className='col-xs-12 col-lg-8'>
					<h1>Hire Quality</h1>
					<hr />
					<p>
					I am based out of the Tri-Cities, Washington (Richland, Pasco Kennewick) but am available to work in the Pacific Northwest and beyond. 
					</p>
					<p>If you like my photography work, let's talk. Just let me know some details about your project and
					I'll get back with you as soon as I can.  
					</p>

					<form onSubmit={this.onClick}>
						<div className='row'>
							<div className='col-xs-6'>
								<div className='input-field'>
									<label htmlFor='name'>Name</label>
									<input className='form-control' type='text' id='name' name='name' placeholder='Enter Name' />
								</div>
							</div>
							<div className='col-xs-6'>
								<div className='form-group'>
									<label htmlFor='email'>Email</label>
									<input className='form-control' type='email' id='email' name='email' placeholder='Enter Email Address' />
								</div>
							</div>
						</div>
						<div className='form-group'>
							<label htmlFor='text'>How can I help?</label>
							<textarea 
								className='form-control' 
								rows='4' 
								id='text' 
								name='text' 
								placeholder='Tell me about your project'
								value={query}
								onChange={(event) => this.updateQuery(event.target.value)} 
							/>
						</div>
						<button type='submit' className='btn btn-primary'>Send</button>
					</form>

				</div>
			</div>
		)
	}
}

export default ContactPage
