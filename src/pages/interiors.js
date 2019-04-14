import React, { Component } from 'react'
import Model from 'ampersand-model'

//import api from '.././models/api'

const flickrImages = [];

export default class IntPage extends Component {


	constructor(props) {
		super(props);
		this.state = {
			images: flickrImages,
			selectedImage: flickrImages[0]
		}
	}

	componentDidMount() {
		const API_KEY = process.env.REACT_APP_FLICKR_API_KEY
		const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${API_KEY}&photoset_id=72157684641469940&format=json&nojsoncallback=1`

		fetch(API_ENDPOINT).then((response) => {
			return response.json().then((json) => {
				const images = json.photoset.photo.map(({farm, server, id, secret}) => {
					return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
				})
				this.setState({images, selectedImage: images[0]})
			})
		})

	}

	handleThumbClick(selectedImage) {
		this.setState({
			selectedImage
		})
	}

	render() {
		console.log("Images: ", this.state.images)
		const {images, selectedImage } = this.state;
		return (
			<div>
				<h1>Interiors</h1>
				<div className='image-gallery'>
					<div className='row'>
					<hr/>
						<div className='image-scroller'>
							{images.map((image, index) => (
								<div key={index} onClick={this.handleThumbClick.bind(this,image)}>
									<img src={image} />
								</div>
							))}
						</div>
						<hr/>
					</div>
					<div className='row-fluid gallery-image'>
						<div>
							<img src={selectedImage} />
						</div>
					</div>
					
				</div>
			</div>
		)
	}
}