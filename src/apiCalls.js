const getAlbumByYear = () => {
  fetch ('https://api.discogs.com//users/mixtapestretch/collection/folders/6652120/releases',{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':
        OAuth oauth_consumer_key="EfqdrylBHIKqDqyHFnDo",
        oauth_nonce:Date.now(),
        oauth_signature:"TtLvAhhUXwTHVrROUcjSqRBGGIUqFFAc",
        //may need an & at the end
        oauth_signature_method:"PLAINTEXT",
        oauth_timestamp:Date.now(),
        oauth_callback:"https%3A%2F%2Foauth.pstmn.io%2Fv1%2Fcallback",
        oauth_verifier:"DocWEMoUQn",
        oauth_version:"1.0",
        oauth_token: "zAZSLZZZLWUDGxFHFCUvBzfXxVCQuqmGAWXNqSnC",
        //could be the uri localhost...
        // or https://oauth.pstmn.io/v1/callback
      User_Agent: "Mixtape Stretch"
    },
    body:JSON.stringify(newIdea),
  })
  .then(response => response.json())
  .then(data => {setAlbums(data)
  })
  
  .catch(error => setError(error))
}

/*
Content-Type: application/x-www-form-urlencoded
Authorization:
        OAuth oauth_consumer_key="your_consumer_key",
        oauth_nonce="random_string_or_timestamp",
        oauth_signature="your_consumer_secret&",
        oauth_signature_method="PLAINTEXT",
        oauth_timestamp="current_timestamp",
        oauth_callback="your_callback"
User-Agent: some_user_agent



create an api call to retrieve all albums by year w image & name
  dropdown onclick directs to api call
  create a setter fn to update state for fetching albums by year on home page (already one with a default state of false)

create an api call to retrieve album details 
  album cover onclick directs to api call -> album Detail view
  create a setter fn to update state for fetching individual album details

  process.env.
*/