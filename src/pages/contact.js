import React, { Component } from "react";
import PropTypes from "prop-types";
import MessagePage from "./message";
import ThankyouPage from "./thankyou";
import Recaptcha from "react-recaptcha";

class ContactPage extends Component {
	// static propTypes = {
	// 	query: PropTypes.string.isRequired
	// }

	constructor() {
		super();
		(this.state = {
			query: "", // empty state for the text field.
			captchaShowError: false // setting the initial state that will change if the user doesn't check the Recaptcha box
		}),
			(this.updateQuery = this.updateQuery.bind(this));
		this.onClick = this.onClick.bind(this);
	}

	componentDidMount() {
		// putting the Google Recaptcha script in the index page file
		const script = document.createElement("script");
		script.src = "https://www.google.com/recaptcha/api.js";
		script.async = true;
		document.body.appendChild(script);
	}

	updateQuery(query) {
		this.setState({
			query: query // user typing in text field will update
		});
	}

	onClick(e) {
		e.preventDefault();
		console.log("Submit button clicked");
		// variables for  Nodemailer
		const email = document.getElementById("email").value;
		const name = document.getElementById("name").value;
		const message = document.getElementById("message").value;
		const captcha = document.getElementById("g-recaptcha-response").value; // Recaptcha verification
		//fetch("http://localhost:5000/sendmail", { // temporary for development
		// API connection for Nodemailer	
		fetch("https://pnwnelson-prod.herokuapp.com/sendmail", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				name: name,
				message: message,
				captcha: captcha
			})
		})
			// .then(function(response) {
			// 	response
			// 		.text()
			// 		.then(function(text) {
			// 			console.log(text);
			// 		})
			// 		.catch(error => {
			// 			console.log("this was the error: " + error);
			// 		});
			// });
			.then(response => response.json())
			.then(responseJson => {
				console.log(responseJson);
				// If the email was sent, send a success response
				if (responseJson == "success") {
					return (window.location = "/thankyou"); // if response was success, redirect to the Thank You page
					//this.renderPage(ThankyouPage)
					// 	this.setState({ formSent: true });
				} else 
				this.setState({ captchaShowError: true }) // if the Recaptcha box wasn't checked, change state and re-render to show hidden error div
				this.setState({ formSent: false });
				
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		const { query } = this.state; // for the text field

		return (
			<div className="row">
				<div className="col-xs-12 col-lg-8">
					<h1>Hire Quality</h1>
					<hr />
					<p>
						I am based out of the Tri-Cities, Washington (Richland, Pasco
						Kennewick) but am available to work in the Pacific Northwest and
						beyond.
					</p>
					<p>
						If you like my photography work, let's talk. Just let me know some
						details about your project and I'll get back with you as soon as I
						can.
					</p>

					<form onSubmit={this.onClick}>
						<div className="row">
							<div className="col-xs-6">
								<div className="input-field">
									<label htmlFor="name">Name</label>
									<input
										className="form-control"
										type="text"
										id="name"
										name="name"
										placeholder="Enter Name"
									/>
								</div>
							</div>
							<div className="col-xs-6">
								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input
										className="form-control"
										type="email"
										id="email"
										name="email"
										placeholder="Enter Email Address"
									/>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="message">How can I help?</label>
							<textarea
								className="form-control"
								rows="4"
								id="message"
								name="message"
								placeholder="Tell me about your project"
								value={query}
								onChange={event => this.updateQuery(event.target.value)}
							/>
						</div>
						<div className="form-group">
							<div className="g-recaptcha" data-sitekey="6LfAwSgTAAAAAEUQy9O23Tea2_VPvTac1S3YZOWN"></div>
						</div>
						<button type="submit" className="btn btn-primary">
							Send
						</button>
						{ this.state.captchaShowError ? 
						<div className="error-box alert alert-danger">
							Please verify you are not a robot by checking the box above the Send button.
						</div>
						: null }
					</form>
				</div>
			</div>
		);
	}
}

export default ContactPage;
