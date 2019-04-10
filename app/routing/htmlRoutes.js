// path package that help with express
let path = require('path');

// build routes to tell router what pages to deliver based on the url and this will be put in module.exports package so the path can be included in the server
// pass the variable app through the function (app is express()) and when user hits url /survey then deliver the survey.html

module.exports = function(app) {

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });
// no exact url but says if using app and not on predefined url then bring to home page
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

};