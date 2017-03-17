import React from 'react'

export default React.createClass ({

	displayName: 'AboutPage',

	render() {
		return (
			<div>
				<h3>About Me</h3>
				<div className='grid-flex-container'>
					<div className='grid-flex-cell-1of3'>
						<img src='./images/websiteprofilepic.gif' className='profilephoto' />
					</div>
					<div className='grid-flex-cell'>
						|<b> My background </b>|
						<p>
							I was brought into this world in the great Pacific Northwest and currently reside in Richland, Washington. 
							I’ve had a camera since 8 years old and I used to get upset when I ran out of those <a href='https://en.wikipedia.org/wiki/Flash_(photography)#/media/File:Flashcube_on_Kodak_Instamatic.jpg' target='bob_dole'>cube flashes</a>. 
							As I ventured into adult life I tried other things to earn a living, 
							but the camera was something that I kept coming back to so I decided to finally embrace my love for crafting beautiful images.
							I chose to document buildings; they are beautiful, they are amazing. 
						</p>
						|<b> My purpose </b>|
						<p>
							I’m here to bring light to your project; literally. Light is so essential to creating effective imagery. 
							I use a mix of artificial and natural (ambient) light in the images I produce to bring a perfect balance. 
							Professional documentation of your hard work is my specialty. 
							Choosing a great photographer is an <i>investment</i>, not an expense. 
							I will help create your resume in a visual way that generates <i>more</i> business for you - a return on your investment. 
							A bad photographer won't have this effect.
						</p>
						|<b> My side project </b>|
						<p>
							When I’m not working with clients, I’m working with the land. Sometimes I’ve succeeded with the camera, other times I failed 
							(there’s a camera at the bottom of a crevasse on Mt. Rainier – if anyone finds it, please let me know – watch out for it on the Emmons Glacier). 
							I love the outdoors and documenting the perspectives I see while out there and sharing those images on <a href='https://www.instagram.com/pnwnelson/' target='bob_dole'>my Instagram</a>. 
							Feel free to experience the trails as I see them.
						</p>
					</div>
				</div>
			</div>
		)
	}
})