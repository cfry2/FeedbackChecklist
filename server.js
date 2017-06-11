// Remove click delay
const express = require('express');
const server = express();
var path = require('path');



server.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})
server.use('/dist', express.static('dist'))
server.use('/src', express.static('src'))
server.listen(3000, function() {
    console.log('listening on port 3000');
});