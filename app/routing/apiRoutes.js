module.exports = function(app) {

  app.get('/api/friends', (req, res) => {

  });

  app.post("/api/friends", (req, res) => {

    var newFriend = req.body;

    console.log(newFriend);

    friends.push(newFriend);

    friends.json(friends);
  });

};
