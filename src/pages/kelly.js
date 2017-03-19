import React from 'react'

export default React.createClass ({

	displayName: 'KellyPage',

	render() {
		return (
			<div>
				<h1>Hi. I'm Kelly.</h1>
				<hr/>
				<div className='row'>
					<div className='col-xs-12 col-sm-4 col-md-4'>
						<img src='./images/websiteprofilepic.gif' className='profilephoto img-responsive' />
					</div>
					<div className='col-xs-12 col-sm-8 col-md-8'>
						<h4>| My Background |</h4>
						<p>
							I was brought into this world in the great Pacific Northwest and currently reside in Richland, Washington. 
							I’ve had a camera since 8 years old and I used to get upset when I ran out of those <a href='https://en.wikipedia.org/wiki/Flash_(photography)#/media/File:Flashcube_on_Kodak_Instamatic.jpg' target='bob_dole'>cube flashes</a>. 
							As I ventured into adult life I tried other things to earn a living, 
							but the camera was something that I kept coming back to so I decided to finally embrace my love for crafting beautiful images.
							I chose to document buildings; they are beautiful, they are amazing. 
						</p>
						<h4>| My Purpose |</h4>
						<p>
							I’m here to bring light to your project; literally. Light is so essential to creating effective imagery. 
							I use a mix of artificial and natural (ambient) light in the images I produce to bring a perfect balance. 
							Professional documentation of your hard work is my specialty. 
							Choosing a great photographer is an <i>investment</i>, not an expense. 
							I will help create your resume in a visual way that generates <i>more</i> business for you - a return on your investment. 
							A bad photographer won't have this effect.
						</p>
						<h4>| My Side Project |</h4>
						<p>
							When I’m not working with clients, I’m working with the land. Sometimes I’ve succeeded with the camera, other times I failed 
							(there’s a camera at the bottom of a crevasse on Mt. Rainier – if anyone finds it, please let me know – watch out for it on the Emmons Glacier). 
							I love the outdoors, I love the Pacific Northwest and documenting the perspectives I see while out there and sharing those images on <a href='https://www.instagram.com/pnwnelson/' target='bob_dole'>my Instagram</a>. 
							Feel free to experience the trails as I see them.
						</p>
					</div>
				</div>
			</div>
		)
	}
})