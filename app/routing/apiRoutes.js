// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
    console.log(res);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    var scores1=[];
    var poop = req.body;
    var pooper = poop.scores
    scores1.push(pooper);
    console.log("scores1: "+pooper);

    var scores2 = [];
    // for (var i = 0; i<friendData.length; i++){
    //   var scoresPossible = friendData[i].scores;
      scores2.push(friendData[0].scores);
console.log("scores2: "+scores2);
    // }
    var questionDiff = scores1.map(Math.sqrt);
    console.log(questionDiff);
      friendData.push(req.body);
    });
};
