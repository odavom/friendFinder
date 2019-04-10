// require the data from friends.js which is acting like our database
let friends = require('../data/friends');

module.exports = function (app) {
    // this route will allow us to view the friends. and this is the same route from the link on the home page and survey page
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    // this will handle requests when a user submits a form with data to the surver
    app.post('/api/friends', function(req, res) {

        // to determine who has closest answers to user. create object with name and photot and friend difference to track difference between the answers
        let bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
// user's data is stored in req.body (this is for post request, get request uses req.params)
        console.log(req.body);

        // take results of user's survey and parse
        let userData = req.body;
        // req.body and therefore userData is an object based on one we made and therefore has property of scores
        let userScores = userData.scores

        console.log(userScores);
        // this will calculate the difference between user's scores and the scores of each user in database
        let totalDifference = 0;

        // need to use nested for loop. have to go through array of friend and also loop through score array. so for loop that runs on scores and each friend
        // loop through all the friend possibilities in the database
        for (let i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDifference = 0;

            // loop through all the scores of each friend
            for (let j = 0; j < friends[i].scores[j]; j++) {

                // calculate difference bwtween the scores and put them into the total difference. math.abs will turn negative into positive
                // subtract user score & friends score with Math.abs which returns positive number in case it 12 - 15
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                
                // if total difference less then current friend difference then reassign to that best friend
                if (totalDifference <= bestMatch.friendDifference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }
        // then save Data to datbase
        friends.push(userData);
        // return JSON with user's bestMatch, used by the html. it's bestMatch object in json format that goes to front end. now go to survey.html page and have user send object formatted in same way to server thorugh post request using ajax.
        res.json(bestMatch);
    });
}
