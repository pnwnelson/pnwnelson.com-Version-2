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
			query: ""
		}),
			(this.updateQuery = this.updateQuery.bind(this));
		this.onClick = this.onClick.bind(this);
	}

	componentDidMount() {
		const script = document.createElement("script");
		script.src = "https://www.google.com/recaptcha/api.js";
		script.async = true;
		document.body.appendChild(script);
	}

	updateQuery(query) {
		this.setState({
			query: query
		});
	}

	onClick(e) {
		e.preventDefault();
		console.log("Submit button clicked");
		const email = document.getElementById("email").value;
		const name = document.getElementById("name").value;
		const message = document.getElementById("message").value;
		const captcha = document.getElementById("g-recaptcha-response").value; // Recaptcha verification
		// return
		fetch("http://localhost:5000/sendmail", {
		//fetch("https://pnwnelson-prod.herokuapp.com/sendmail", {
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
			.then(response => response.json())
			.then(responseJson => {
				console.log(responseJson);
				if (responseJson == "success") {
					return (window.location = "/thankyou");
					// 	this.setState({ formSent: true });
				} else 
					this.setState({ formSent: false });
					//alert(responseJson.msg);
					// show error div if recaptcha not checked
					document.getElementById("no-captcha-alert").style.visibility = 'visible';	
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		const { query } = this.state;

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
						<div id="no-captcha-alert" className="hidden alert alert-danger">
							Please verify you are not a robot by checking the box above the submit button.
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default ContactPage;
