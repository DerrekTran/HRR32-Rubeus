//Add dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');

app.use(express.static(__dirname + '/../client/dist'));
//app.use(bodyParser.text()) this is an alternative to json
const db = require('../db/index.js');
const apiHelpers = require('../lib/apiHelper.js');

const apiSearch = require('../lib/apiSearch.js')

app.use(bodyParser.json()); //This should be adjusted towards the type of req.body we will get
//app.use(bodyParser.text()); //or some other type
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//app.use(bodyParser.text()) this is an alternative to json
app.use(session({
  secret: 'trump2030',
  resave: true,
  saveUninitialized: true
}));

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on ${port}`)
})

//////******route requests*********///


//DESCRIPTION: This will repond to get requests and send back the appropriate data. We may need to use the database.
//STATUS: to be integrated with front-end
app.get('/', (req, res) => {

    // console.log('GET / to server', res);

});

app.post('/login', (req, res, next) => {
  console.log(req.body)
})
//DESCRIPTION: This will respond to user input on the front-end and send back the appropriate data. req.body will be our friend here.
//STATUS: to be integrated with front end

app.post('/saveUser', (req, res, next) => {

    // console.log('POST to /saveUser, req.body is:', req.body.zip)
    // console.log('response to / from server', res);
    console.log(typeof(req.body))
    let zip = req.body.zip;

    apiSearch.searchByZip(zip, (response) => {
      if (response.error) {
        console.log(response.error)
        res.send(JSON.stringify('Please enter valid ZIP code.'))
      } else {
      console.log(response)
      res.status(201);
      res.send(apiHelpers.getOfficials('state', response))
      }
    });

    //uday will add the thing here

    //db.insertData(data, cb);

});


//DESCRIPTION: This post will grab the user form data (zip code currently)
//             and insert it into the database along with some temporary dummy data

//STATUS:      Still in progress - will be finalized upon oauth implementation
app.post('/', (req, res) => {
    //console.log the data that has been received
    // console.log(req.body);



    // console.log('response to / from server', res);

});


//DESCRIPTION: This feature has yet to be claimed
//STATUS:
app.post('/', (req, res, next) => {

    //console.log('POST to /SOMEOTHERROUTE, req.body is:', req.body)
  });


//DESCRIPTION:This feature has yet to be claimed
//STATUS:
app.put('/', (req, res) => {

    // console.log('PUT to /, req.body is:', req.body)
    // console.log('PUT to /, res is:', res)


    // console.log('response to / from server', res);
})