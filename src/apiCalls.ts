const collectionUrl = 'https://api.discogs.com/users/mixtapestretch/collection/folders/0/releases';

const getCollection = () => {
  return fetch(collectionUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Oauth" +
        'oauth_consumer_key=EfqdrylBHIKqDqyHFnDo' +
        'oauth_signature=TtLvAhhUXwTHVrROUcjSqRBGGIUqFFAc',
      'User-Agent': 'Mixtape Stretch'
    }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    });
};

export default getCollection;
