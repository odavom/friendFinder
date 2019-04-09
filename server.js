
// dependencies
let express = require('express');
let bodyParser = require('body-parser')

let app = express();
// let path = require('path');

// Set initial port
let PORT = process.env.PORT || 9000;

// create application/json parser
let jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false });
// parse various differnt custon JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));
// parse some custon thing into a buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));


// bodyParser to interpret data sent to server
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: ''}))


// ROUTER - points server to a series of route files.

// uncomment the below when I have module expots in the files
// require('./app/routing/apiRoutes.js')(app);
// require file like require node modules and pass in app in this file into module.exports function
require('./app/routing/htmlRoutes.js')(app);

// LISTENER - this effectively starts the server

app.listen(PORT, function() {
    console.log('App listening on PORT http://localhost:' + PORT)
})