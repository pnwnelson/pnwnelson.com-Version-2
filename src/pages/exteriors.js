import React, { Component } from 'react'

const smugmugImages = [
	'https://photos.smugmug.com/Other/Architecture/n-fvWdJc/i-pZwKZLm/0/X2/i-pZwKZLm-X2.jpg',
	'https://photos.smugmug.com/Other/Architecture/n-fvWdJc/i-zxgXQw9/0/X2/i-zxgXQw9-X2.jpg',
	'https://photos.smugmug.com/Other/Architecture/n-fvWdJc/i-JJ5NvtQ/0/X2/i-JJ5NvtQ-X2.jpg',
	'https://photos.smugmug.com/Other/Architecture/n-fvWdJc/i-bhmwKg3/0/X2/i-bhmwKg3-X2.jpg',
	'https://photos.smugmug.com/Other/Architecture/n-fvWdJc/i-PBDrPF3/0/X2/i-PBDrPF3-X2.jpg',
	'https://photos.smugmug.com/Other/Architecture/n-fvWdJc/i-fJn5rVH/0/X2/i-fJn5rVH-X2.jpg',
	'https://photos.smugmug.com/Other/Architecture/n-fvWdJc/i-Cm8whcr/0/X2/i-Cm8whcr-X2.jpg'
];

export default class ExteriorsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: smugmugImages,
			selectedImage: smugmugImages[0]
		}
	}

	componentDidMount() {
		const API_KEY = 'Jw6VBLT6b6Jc7w9ShnhK82dmkJS9vVj4'
		const API_ENDPOINT = 'http://api.smugmug.com/services/api/rest/1.3.0/'
	}

	handleThumbClick(selectedImage) {
		this.setState({
			selectedImage
		})
	}

	render() {
		const {images, selectedImage } = this.state;
		return (
			<div>
				<h3>Exteriors</h3>
				<div className="image-gallery">
					<div className="image-scroller">
						{images.map((image, index) => (
							<div key={index} onClick={this.handleThumbClick.bind(this,image)}>
								<img src={image} />
							</div>
						))}
					</div>
					<div className="gallery-image">
						<div>
							<img src={selectedImage} />
						</div>
					</div>
					
				</div>
			</div>
		)
	}
}