const request = require('request');
const config = require('../config/civic.js')

let searchByZip = (zip, cb) => {
  console.log('zip below:');
  console.log(zip);

  let options = {
    url: `https://www.googleapis.com/civicinfo/v2/representatives/?key=${config.CIVIC_API_KEY}&address=${zip}`,
    headers: {
      'User-Agent': 'request'
    }
  }
  console.log(options.url)
  request(options, function(err, res, body){
    if (err) {
      console.log('options below err:');
      console.log(options);
      console.log(err);
    } else {
      cb(JSON.parse(body));
    }
  })
}

module.exports = {
  searchByZip: searchByZip
}