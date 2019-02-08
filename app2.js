var express = require('express');
var app = express();

app.get('/:name', function (req, res) {
  console.log(req,query);
  console.log(req,params);
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
//app.listen(3000,() => console.log('app listening on port 3000'))