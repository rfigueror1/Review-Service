var axios = require('axios');

const getPhotos = () => {
  var origUrls = [];

  for (var i = 0; i < 200; i++) {
    var promise = new Promise ((resolve, reject) => {
      axios.get('https://dog.ceo/api/breeds/image/random')
      .then(function(response) {
        resolve(response.data.message);
      })
      .catch(function(err) {
        reject(err);
      })
    });

    origUrls.push(promise);
  }

  Promise.all(origUrls).then(function(urlArr) {
    console.log(urlArr);
  })
}

getPhotos();