var {
  join
} = require("path");

var publicFolderPath = join(__dirname + "./../public");

module.exports = function(app, path) {

  app.get('/', (req, res) => {
    res.sendFile(publicFolderPath + "/home.html");
  });

  app.get('/survey', (req, res) => {
    res.sendFile(publicFolderPath + "/survey.html");
  });

};
