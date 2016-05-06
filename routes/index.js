var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    //res.render('test');
});

router.get('/testJson', function(req, res, next) {
  res.end('{"movies":[{"id":"11494","title":"Chain Reaction","year":1996,"posters":{"thumbnail":"http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg"}}]}');
});

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