var express = require("express");

var {
  urlencoded,
  json,
  static
} = express;

var {
  join
} = require("path");

var app = express();
var PORT = process.env.PORT || 3001;

app.use(urlencoded({
  extended: true
}));
app.use(json());

var folderPath = join(__dirname + "/app/public");

app.use(static(folderPath));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, () => {
  console.log(`Express app listening on ${PORT}.`);
});
