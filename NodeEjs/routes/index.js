var express = require('express');
var router = express.Router();
var request = require('request');
var JSONStream = require('JSONStream');
var es = require('event-stream');
var fs = require('fs');

router.get('/', function(req, res, next) {
	
	var tempData = [];
	var data_url = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=55ec6d6e-dc5c-4268-a725-d04cc262172b";
	console.log(data_url);
	
	
	// JSON parse
	var parser = JSONStream.parse('*.results') ;
	
	// 取得資料
	var reqData = request({url: data_url});
	
	// Render
	var page = es.mapSync(function (data) {  
	    
	    for(var i=0 ; i<data.length ; i++) {
	        console.log(data[i]);
	    	tempData.push(data[i]);
	    }
	    
	    var render = res.render('index', {
			title : 'Express',
			items : tempData
		});
	  
	    return data  
	});
	
	reqData.pipe(parser);
	parser.pipe(page);
	
});

module.exports = router;
