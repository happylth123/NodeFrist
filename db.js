var db = {};
var mysql = require('mysql');  //调用MySQL模块

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'qdm161153154.my3w.com',       //主机
    user: 'qdm161153154',            //MySQL认证用户名
    password: 'tenghui123',
    port: '3306',
    database: 'qdm161153154_db',
    insecureAuth: true
});

db.query = function (sql, callback) {

    if (!sql) {
        callback();
        return;
    }
    pool.query(sql, function (err, rows, fields) {
        if (err) {
            console.log(err);
            callback(err, null);
            return;
        };

        callback(null, rows, fields);
    });
}
module.exports = db;

// // 另一种方式
// //创建一个connection
// var connection = mysql.createConnection({

//     host: 'qdm161153154.my3w.com',       //主机
//     user: 'qdm161153154',            //MySQL认证用户名
//     password: 'tenghui123',
//     port: '3306',
//     database: 'qdm161153154_db',
//     insecureAuth: true

// });

// //创建一个connection
// connection.connect(function (err) {

//     if (err) {

//         console.log('[query] - :' + err);

//         return;

//     }

//     console.log('[connection connect]  succeed!');

// });

// //执行SQL语句
// connection.query('SELECT * FROM `user` WHERE 1', function (err, rows, fields) {

//     if (err) {

//         console.log('[query] - :' + err);

//         return;

//     }

//     console.log('The solution is: ', rows[0].solution);

// });

// connection.query('SELECT * FROM `user` WHERE 1', function (error, results, fields) {
//     if (error) {
//         throw error;
//     }
//     if (results) {
//         for (var i = 0; i < results.length; i++) {
//             console.log('%s\t%s', results[i].User, results[i].Password);
//         }
//     }
// });

// //关闭connection
// connection.end(function (err) {

//     if (err) {

//         return;

//     }

//     console.log('[connection end] succeed!');

// });