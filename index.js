var request = require('request')

module.exports = function (refreshToken, clientID, clientSecret, next) { 
  var opts = {
    uri: 'https://accounts.spotify.com/api/token',
    json: {
      'grant_type': 'refresh_token', 
      'refresh_token': refreshToken
    },
    headers: { 
      'Authorization': 'Basic ' +  clientID+clientSecret
    }
  } 
  return request(opts, next)
}
