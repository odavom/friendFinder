
// dependencies
let express = require('express');
let bodyParser = require('body-parser')

let app = express();
let path = require('path');

// Set initial port
let PORT = process.env.PORT || 9000;


// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));
// parse various differnt custon JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));
// parse some custon thing into a buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));





// ROUTER - points server to a series of route files.

// require file and pass in app
require('./app/routing/apiRoutes.js')(app);
// require file like require node modules and pass in app in this file into module.exports function
require('./app/routing/htmlRoutes.js')(app);

// LISTENER - this effectively starts the server

app.listen(PORT, function() {
    console.log('App listening on PORT http://localhost:' + PORT)
})