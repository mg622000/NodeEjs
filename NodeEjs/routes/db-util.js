var mysql = require('mysql');
var pool = mysql.createPool({
    host     : '127.0.0.1',
    user     : 'nodeuser',
    password : 'nodepwd',
    database : 'nodedb'
});

exports.dataCenter = function(sql, fn) {
    pool.getConnection(function(err, conn) {
        if (err) {
            console.log("err : " + err);
            return fn(err);
        } else {
            conn.query(sql, function(err, res) {
                conn.release();
                return fn(res);
            });
        }
    });
};