var request = require('request')

module.exports = function (refreshToken, clientID, clientSecret, next) { 
  var auth = 'Basic ' +  new Buffer(clientID + ':' + clientSecret).toString('base64')
    , opts = {
    uri: 'https://accounts.spotify.com/api/token',
    method: 'POST',
    json: {
      'grant_type': 'refresh_token', 
      'refresh_token': refreshToken
    },
    headers: { 
      'Authorization': auth
    }
  } 
  return request(opts, next)
}
