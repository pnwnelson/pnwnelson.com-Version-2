// API call

const api = {
	getImages() {
		// const url = 'https://api.smugmug.com/api/v2/node/fvWdJc?APIKEY=Jw6VBLT6b6Jc7w9ShnhK82dmkJS9vVj4'
		const request = new Request('https://api.smugmug.com/api/v2/node/fvWdJc?APIKEY=Jw6VBLT6b6Jc7w9ShnhK82dmkJS9vVj4', {
			method: 'GET',
			headers: new Headers({
				'Accept': 'application/json',
				'Host': 'www.smugmug.com'
			})
		})

		return fetch(request).then((res) => res.json())
	}
}

module.exports = api