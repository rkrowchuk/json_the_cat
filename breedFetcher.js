const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    let desc;
    if (data[0] === undefined) {
    desc = "The requested breed does not exist."
    } else {
    desc = data[0].description;
    }
    callback(error, desc);
  });
};

module.exports = { fetchBreedDescription };




