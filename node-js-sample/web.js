var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
fs = require('fs');
fs.readFile('bitstarter/node-js-sample/index.html', 'utf8', function(err,data){
  if (err) { return console.log(err);}
  response.send(data);
 }
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
