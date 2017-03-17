import React, { Component } from 'react'

const frontImage = 'https://photos.smugmug.com/Other/Architecture/n-fvWdJc/i-pZwKZLm/0/X2/i-pZwKZLm-X2.jpg'

export default class HomePage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			images: frontImage
		}
	}

	render() {

		const {images} = this.state;

		return (
			<div>
				<h1>Kelly Nelson Photography</h1>
				<h5>Architectural and Real Estate Photography</h5>
					<img src={images} />
			</div>
		)
	}
}