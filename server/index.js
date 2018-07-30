// Add dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const utils = require('./utils.js');
const server = require('http').createServer(app);
const socket = require('socket.io');
const io = socket(server);

//Database Dependences Below
const db = require('../db/users.js');
const townhalls = require('../db/townhalls.js');
//**********************************************

const apiHelpers = require('../lib/apiHelper.js');
const dataHelpers = require('../lib/dataHelpers.js')
const apiSearch = require('../lib/apiSearch.js');
const config = require('../config/civic.js');
const path = require("path");
/************************************************
Passport Related (Below)
************************************************/

app.use(session({
  secret: config.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

const passport = require('passport');
const passportSetup = require('../config/passport-setup.js');

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser(config.SESSION_SECRET));

/************************************************/

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json()); // This should be adjusted towards the type of req.body we will get
// app.use(bodyParser.text()); //or some other type
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(bodyParser.text()) this is an alternative to json
app.use(session({
  secret: 'americaisthebest',
  resave: true,
  saveUninitialized: true,
}));


const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log(`Hello from ${port}!`);
// });
//*********live-chat ***********//
io.on('connection', (client) => {
  //emitting evnets to client
  console.log(client.id);
  console.log('socket io connection online!');
  client.on('send_message', function(data) {
    console.log('message from client received data:', data)
    io.emit('receive_message', data);
  })
});
 server.listen(port, () => {
  console.log(`server listening from ${port}!`)
});
// ////******route requests*********///

app.post('/login', (req, res, next) => {
  console.log(req.body);
});
// DESCRIPTION: This will respond to user input on the front-end and send back the appropriate data. req.body will be our friend here.
// STATUS: to be integrated with front end

app.post('/reps', (req, res, next) => {

  console.log("POST to /saveUser, req.body is", req.body);
  const locator = req.body.zip ? req.body.zip
                  : req.body.location ? dataHelpers.abbrState(req.body.location, 'name')
                  : null;
  const region = req.body.region;

  apiSearch.searchByZip(locator, (response) => {
    if (response.error) {
      console.log(response.error);
      res.send(JSON.stringify('Please enter valid ZIP code.'));
    } else {
      res.status(201);
      console.log(response);
      res.send(apiHelpers.getOfficials(region, response));
    }
  });
});

app.post('/townhall', utils.authCheck, (req, res, next) => {
  console.log('req received')
})
/******************************************************************************
Name: Passport Authentication Routes
Description:   Will determine the routes to direct user to and send them back
               upon authentication.
******************************************************************************/
app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    console.log('req.user is', req.user);
    res.redirect('/');
  });

app.get('/test', utils.authCheck, (req, res) => {
  console.log('passed authCheck');
  res.send(req.user);
});


//Temp function for Mubeen front-end prior to RR implementation
app.get('/checkuser', utils.authCheck, (req, res) => {
  console.log('passed authcheck')
  req.user ? res.send(req.user) : res.send('whoops');
});




/******************************************************************************
Name:  React Router Redirect Routes
Description:  Implements the ability to directly access a component via url
              (e.g. localhost:3000/someUrl)
*******************************************************************************/


app.get('/main', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  });
});


app.get('/townhall', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  });
});


app.get('/dashboard', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  });
});


app.get('/map', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  });
});


app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  });
});


app.get('/zip', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  });
});

/******************************************************************************
Name:  TownHall Query Routes
Description:  Implements the ability to access data from the database for the
              townhall
*******************************************************************************/
app.get('/alltownhalls', function(req, res) {
  console.log('alltownhalls GET')
  townhalls.getNames()
    .then(names => res.send(names))
    .catch(err => {res.status(500).send(err)});
});

app.post('/create', (req, res) => {
  //console.log('createtownhall posted, ', req.body.townHallName)
  const townHallName = req.body.townHallName;
  townhalls.createTownHall(townHallName)

  res.send('createtown hall POST return')
})

app.post('/question', function(req, res) {
  const question = String(req.body.question);
  const hallName = String(req.body.townHallName);
  //change the user ID to be from hard coded to user id
  const userRowId = Number(req.body.userRowId);
  //
  console.log('question posted', req.body)
  //
  townhalls.createQuestion(question, userRowId, hallName).then(results => res.status(201).send(results));
});

app.get('/questions', function(req, res) {
  const townHallName = req.query.townHall;

    townhalls.getQuestions(townHallName)
       .then(questions => {
          console.log(questions);
          res.send(questions)
        })
       .catch(() => res.status(500).send());
});