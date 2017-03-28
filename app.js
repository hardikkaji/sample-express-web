var express = require('express');
var customers = require('./customers.json');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('node_modules'));

app.get('/api/customers', function(req, res) {
	res.send(customers);
});

app.listen(3000, function() {
	console.log('Express started on localhost:3000');
});
