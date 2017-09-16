var mysql  = require('mysql');  //调用MySQL模块

//创建一个connection
var connection = mysql.createConnection({    

    host     : '127.0.0.1',       //主机
    user     : 'root',            //MySQL认证用户名
    password:'123',
    port:   '3306',
    database: 'mysql'

});

//创建一个connection
connection.connect(function(err){

    if(err){       

        console.log('[query] - :'+err);

        return;

    }

    console.log('[connection connect]  succeed!');

}); 

//执行SQL语句
connection.query('SELECT * FROM `user` WHERE 1', function(err, rows, fields) {

    if (err) {

        console.log('[query] - :'+err);

        return;

    }

    console.log('The solution is: ', rows[0].solution); 

}); 

connection.query('SELECT * FROM `user` WHERE 1', function(error, results, fields){
    if (error) {
        throw error;
    }
    if (results) {
        for(var i = 0; i < results.length; i++)
        {
            console.log('%s\t%s',results[i].User,results[i].Password);
        }
    }
});

//关闭connection
connection.end(function(err){
    
        if(err){       
    
            return;
    
        }
    
        console.log('[connection end] succeed!');
    
    });