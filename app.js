
// 1. Import Express
var express = require('express');

var customers = require('./customers.json');

// 2. Load Express
var app = express();
var path = require('path');

// 3. Map Request and Response
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

// serving static contents - libs and assets
app.use(express.static('node_modules'));
app.use(express.static('src'));

app.get('/api/customers', function(req, res) {
	res.send(customers);
});

// 4. Bind server with Port
app.listen(3000, function() {
	console.log('Express started on localhost:3000');
});
