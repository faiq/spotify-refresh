#Spotify-refresh
Use this module to obtain a new refresh and accessToken from spotfiy

##Example 
```javascript 
var refresh = require('spotify-refresh)

refresh(refreshToken, clientID, clientSecret, function (err, res, body) { 
  if (err) return
  body = json.parse(body)
  console.log(JSON.stringify(body)  
})
```
Which will log something like this 

```
}
   "access_token": "NgCXRK...MzYjw",
   "token_type": "Bearer",
   "expires_in": 3600,
   "refresh_token": "NgAagA...Um_SHo"
}
```
