var request = require('request')

module.exports = function (refreshToken, clientID, clientSecret, next) { 
  var opts = {
    uri: 'https://accounts.spotify.com/api/token',
    json: {
      grant_type: 'refresh_token', 
      refresh_token: refreshToken
      client_id: clientID, 
      client_secret: clientSecret
    }
  } 
  return request(opts, next)
}
