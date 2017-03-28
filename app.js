
// 1. Import Express
var express = require('express');

var customers = require('./customers.json');

// 2. Load Express
var app = express();
var path = require('path');

// 3. Map Request and Response
app.get('/', function(req, res) {
	res.send("Hello World");
	//res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('node_modules'));

app.get('/api/customers', function(req, res) {
	res.send(customers);
});

// 4. Bind server with Port
app.listen(3000, function() {
	console.log('Express started on localhost:3000');
});
