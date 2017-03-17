import React from 'react'
//import nodemailer from 'nodemailer'

export default React.createClass ({

	displayName: 'ContactPage',

	onClick() {

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'nelson20@gmail.com',
				pass: 'Indy!@34'
			}
		});

		const mailOptions = {
			from: '"PNWNelson" <nelson20@gmail.com>',
			to: 'nelson20@gmail.com',
			subject: 'From PNWNelson Contact Form',
			text: '',
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
			}
			console.log('Message %s sent: %s', info.messageId, info.response);
		});
	},

	render() {
		return (
			<div className='grid-flex-container'>
			<div className='grid-flex-cell'>
				<h3>Hire Me</h3>
				<p>
				Not much to my website. Pretty simple. If you like my work, let's talk. Just let me know some details about your project and
				I'll get back with you as soon as I can.  
				</p>
				<p>
				Just shoot me an email at the address below until I code up a more elegant contact form. I look forward to hearing from you. 
				</p>
				<p>

				<a href='mailto:kelly@pnwnelson.com'>kelly[at]pnwnelson[dot]com</a>

				</p>

			</div>
			<div className='grid-flex-cell grid-flex-cell-1of3'></div>
			</div>
		)
	}
})

				// <form>
				// 		<div className='form-element'>
				// 			<label htmlFor='name'>Name</label>
				// 			<input type='text' id='name' placeholder='Your name' className='form-input' />
				// 		</div>
				// 		<div className='form-element'>
				// 			<label htmlFor='business-name'>Business Name</label>
				// 			<input type='text' id='business-name' placeholder='Business Name' className='form-input' />
				// 		</div>
				// 		<div className='form-element'>
				// 			<label htmlFor='email'>Email Address</label>
				// 			<input type='text' id='email' placeholder='Email Address' className='form-input' />
				// 		</div>
				// 		<div className='form-element'>
				// 			<label htmlFor='details'>Details</label>
				// 			<textarea id='details' placeholder='Let me know some light details' className='form-input' />
				// 		</div>
				// 		<button type='submit' className='button button-primary' onClick={this.onClick}>Send</button>
				// </form>