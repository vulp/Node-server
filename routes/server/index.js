var express = require('express');
var server = express.Router();

server.get('/', function(req, res,next) {		
	console.log('get');
	var db = req.db;
	var collection = db.get('servers');
	collection.find({},{},function(e,data){		
		var servers = {
			'servers':data
			}
		res.json(servers);			
	
	});
});

server.post('/add', function(req, res,next) {		
	console.log('add');
	var db = req.db;
	var collection = db.get('servers');
	//todo validate data
	collection.insert(req.body);
});

module.exports.server = server;
