var request = require('request')

module.exports = function (refreshToken, clientID, clientSecret, next) { 
  var opts = {
    uri: 'https://accounts.spotify.com/api/token',
    json: {
      'grant_type': 'refresh_token', 
      'refresh_token': refreshToken
    },
    headers: { 
      'Authorization': 'Basic ' +  new Buffer(clientID + ':' clientSecret).toString('base64')
    }
  } 
  return request(opts, next)
}
