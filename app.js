var express = require('express');
var fs = require('fs');
var app = express();

app.get('*', function(req, res) {
  fs.readFile('public' + req.originalUrl, function(err, data) {
    if (err) {
      res.send('File not found ' + req.originalUrl);
    } else {
      res.contentType('application/json');
      res.send(data);
    }
    res.end();
  });
});

app.listen(3000);
