import qs from 'qs'

const config = {
	authUrl: '',
	codeUrl: ''
}

function buildAuthUrl (clientId) {
	return 'https://github.com/login/oauth/authorize?' + qs.stringify({
		scope: 'user,repo', //this only to get the basic info that is needed from the github account.
		redirect_uri: window.location.origin + '/auth/callback',
		client_id: clientId
		})
}

switch (window.location.hostname) {
	case 'pnwlabelr.surge.sh':
		config.authUrl = buildAuthUrl('d79de22efa1c83e559c0')
		config.codeUrl = 'http://pnwlabelr-prod.herokuapp.com/authenticate'
		break
		default:
		config.authUrl = buildAuthUrl('88ecabe9f7a9f862b85f')
		config.codeUrl = 'http://pnwlabelr-dev.herokuapp.com/authenticate'
		break
}

export default config
