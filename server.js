
// dependencies
let express = require('express');
let bodyParser = require('body-parser')

let app = express();
// let path = require('path');

// Set initial port
let PORT = process.env.PORT || 9000;

// bodyParser to interpret data sent to server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: ''}))


// ROUTER - points server to a series of route files.

// uncomment the below when I have module expots in the files
// require('./app/routing/apiRoutes.js')(app);
// require('./app/routing/htmlRoutes.js')(app);

// LISTENER - this effectively starts the server

app.listen(PORT, function() {
    console.log('App listening on PORT http://localhost:' + PORT)
})