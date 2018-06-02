import React from 'react'
import QualityCheckPhoto from './qualitycheckphoto'


export default React.createClass ({

	displayName: 'QualityCheck',

	render() {
		return (
			<div>
				<h1>Are your portfolio images great quality?</h1>
				<hr/>
				<div className='row'>
					<div className='col-xs-12 col-sm-12 col-md-12'>
						<h4>Check your current portfolio images against the following common mistakes to make sure your project is being put out there in the best way possible.</h4>
						<ul className='quality-list'>
							<li><strong>Is there too much parking lot? </strong><br/>Sometimes a focal length is too wide and puts too much parking lot in the foreground. Parking lots are boring and ugly.</li>
							<li><strong>Is there too much sky?</strong><br/>Similar to the above reason, sometimes there's too much sky showing. Bring the focus on your structure, not the sky!</li>
							<li><strong>Are the vertical lines of the structure straight? </strong><br/>They also need to be parallel with the edges of the image. Perspective distortions are easy to correct so there's no excuse for them to exist.</li>
							<li><strong>Are electrical lines, light poles, blocking objects, etc. cleaned up?</strong><br/>A cleaner image looks better. Removing unneccessary clutter keeps the viewer's focus on the structure.</li>
							<li><strong>Are the shadows from direct sunlight too harsh?</strong><br/>High contrast has it's place in more artistic architecture images, but not usually in images that are being used in proposals, SOQ's or other B2B publications.</li>
						</ul>
						<hr />
					</div>

				</div>
				<div className='row text-center before-after'>
					<div className='col-xs-2'></div>
					<div className='col-xs-8 text-center'>
						<span>Use the before and after slider on the following image to see how I polish up my images. </span>
						<QualityCheckPhoto className='img-responsive'/>
					</div>
					<div className='col-xs-2'></div>
				</div>
			</div>
		)
	}
})

