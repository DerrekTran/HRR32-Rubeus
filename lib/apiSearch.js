const request = require('request');
const config = require('../config/civic.js')

let searchByZip = (zip, cb) => {
  let options = {
    url: `https://www.googleapis.com/civicinfo/v2/representatives/?key=${CIVIC_API_KEY}&address=${zip}`,
    headers: {
      'User-Agent': 'request'
    }
  }
  request(options, function(err, res, body){
    if (err) {
      console.log(err);
    }
    cb(JSON.parse(body));
  })
}

module.exports = searchByZip;