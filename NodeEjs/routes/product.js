var express = require('express');
var router  = express.Router();
var mysql   = require('mysql');
var dbUtil = require('./db-util');


router.get('/', function(req, res, next) {
    console.log("Get..................");
    
    dbUtil.dataCenter("select * from product", function(data) {  
        var render = res.render('product', {
            productList : data
        });
    });  
    
});

router.post('/', function(req, res, next) {
    console.log("Post..................");
    res.end();
});

router.put('/', function(req, res, next) {
    console.log("Put..................");
    res.end();
});

router.delete('/', function(req, res, next) {
    console.log("delete..................");
    res.end();
});


module.exports = router;

