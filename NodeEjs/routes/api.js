var express = require('express');
var router  = express.Router();
var mysql   = require('mysql');


router.get('/', function(req, res, next) {
    console.log("Get..................");
    testMySQL();
    res.end();
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


function testMySQL() {
    
    var connection = mysql.createConnection({
        host     : '127.0.0.1',
        user     : 'root',
        password : 'q19791129',
        database : 'tsti'
    });
    
    connection.connect();
    
    
//    var sql = "SELECT * FROM ?? WHERE ?? = ?";
//    var inserts = ['users', 'id', '12'];
//    sql = mysql.format(sql, inserts);
//    console.log('SQL : ', sql);
     
    connection.query('SELECT * from product limit 100', function(err, rows, fields) {
          if (err) throw err;
         
          for(var i=0 ; i<rows.length ; i++) {
              var row = rows[i];
              console.log('Product Code : [%s] Name : [%s] ', row.product_code, row.title);
          }
          
    });
     
    connection.end();
    
}