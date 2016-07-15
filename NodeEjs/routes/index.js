var express = require('express');
var router = express.Router();
var request = require('request');
var JSONStream = require('JSONStream');
var es = require('event-stream');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
	
	var tempData = ['123', '456', '789', '11223', '11111111', '22222222222'];
	var data_url = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=55ec6d6e-dc5c-4268-a725-d04cc262172b";
	console.log(data_url);
	
	
	
	var JSONStream = require('JSONStream');
	var fs = require('fs');

	fs.createReadStream('data.json')
	.pipe(JSONStream.parse('rows.*.data.resource'))
	.on('data', console.log.bind(console));
	
	
	
	var JSONStream2 = require('JSONStream');
	var fs2 = require('fs');

//	fs2.createReadStream('apiAccess.json', 'utf8')
//	.pipe(JSONStream.parse('*.results.*.Station'))
//	.on('data', console.log.bind(console));
	
	var parser = JSONStream.parse('*.results') ;//emit parts that match this path (any element of the rows array)
	
	var req = request({url: data_url});
	
	var logger = es.mapSync(function (data) {  //create a stream that logs to stderr,
	    for(i=0 ; i<data.length ; i++) {
	    	console.log('XXXXXXXXXXXXxx' + data[i].Station);
	    	tempData.push(data[i].Station);
	    	
	    }
	    
	    var render =   res.render('index', {
			title : 'Express',
			items : tempData
		});
	  
	    return data  
	  });

	
	
	req.pipe(parser);
	parser.pipe(logger);
//	request.get(data_url, function (error, response, body) {
//	    if (!error && response.statusCode == 200) {
//	        var csv = body;
//	        console.log(body);
//	        
//	        var fs3 = require('fs');
//
//	        
//	        
//	    }
//	});
	
	
	console.log('AAAAAAAAAAAAAAA');
	
//	res.render('index', {
//		title : 'Express',
//		items : tempData
//	});
});

module.exports = router;
