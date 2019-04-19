var friends = require('../data/friends.js');

module.exports = function(app) {

  app.get('/api/friends', (req, res) => {

    res.json(friends);

  });

  app.post("/api/friends", (req, res) => {

    var newHomie = req.body;

    // console.log(newHomie.scores);

    for (var i = 0; i < newHomie.scores.length; i++) {
      newHomie.scores[i] = parseInt(newHomie.scores[i]);
    };

    var bestMatch = 0;
    var minDiff = 40;

    for (var i = 0; i < friends.length; i++) {
      var totalDiff = 0;
      for (var j = 0; j < friends[i].scores.length; j++) {
        var diff = Math.abs(newHomie.scores[j] - friends[i].scores[j]);
        totalDiff += diff;
      }

      if (totalDiff < minDiff) {
        bestMatch = i;
        minDiff = totalDiff;
      }
    }

    friends.push(newHomie);

    res.json(friends[bestMatch]);

  });
};
