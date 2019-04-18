var friends = require('../data/friends.js');

module.exports = function(app) {

  app.get('/api/friends', (req, res) => {

    res.json(friends);

  });

  app.post("/api/friends", (req, res) => {

    var newFriend = req.body;

    console.log(newFriend);

    friends.push(newFriend);

  });

};
