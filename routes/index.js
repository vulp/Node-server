var express = require('express');
var router = express.Router();

router.get('/movielist', function(req, res) {
	var db = req.db;
	var collection = db.get('movies');
	collection.find({},{},function(e,data){
		var movies = {
			'movies':data
		}		
		res.json(movies);		
	});
});	

module.exports = router;