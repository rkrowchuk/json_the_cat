const request = require('request');
const input = process.argv.slice(2);
const breed = input[0].substring(0,4);


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
  } else {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log("Requested breed not found");
    } else {
      console.log(data[0].description);
    }
  }
});

