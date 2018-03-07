// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
var jwt = require('express-jwt');
var cors = require('cors');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

app.use(morgan('dev'));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
// initialize express-session to allow us track the logged-in user across sessions.

app.use(cors());

// Authentication middleware provided by express-jwt.
// This middleware will check incoming requests for a valid
// JWT on any routes that it is applied to.
var authCheck = jwt({
  secret: new Buffer('ebJW03hjDIx-Dourgwy9ImIWv5F4GT6yloWJTkwPotb9BuLZHZ6lT9MFtyn3DSIG', 'base64'),
  audience: 'https://employeemgr.auth0.com/api/v2/'
});

var users = [
  { id: 1, name: 'Todd Motto', image: 'image-1.jpg' },
  { id: 2, name: 'Brad Green', image: 'image-2.jpg' },
  { id: 3, name: 'Igor Minar', image: 'image-3.jpg' }
];

app.get('/api/users', authCheck, function(req, res) {
  res.json(users);
});
/**
// route for user signup
app.get('/signup', sessionChecker, (req, res) => {
    res.sendFile(__dirname + '/src/signup.html');
});

// route for user Login
app.get('/login',sessionChecker, (req, res) => {
  res.sendFile(__dirname + '/dist/login.html');
});
/**

// route for user's dashboard
app.get('/employees', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.sendFile(__dirname + '/src/index.html');
  } else {
    res.redirect('/login');
  }
});


// route for user logout
app.get('/logout', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.clearCookie('user_sid');
    res.redirect('/');
  } else {
    res.redirect('/login');
  }
});


// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});

**/
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
require('./server/routes')(app);
// Catch all other routes and return the index file
app.get('*', (req, res) => res.status(200).sendFile(path.join(__dirname, 'dist/index.html')));

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
