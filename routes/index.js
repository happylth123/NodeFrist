var express = require('express');
var router = express.Router();
var db = require('../db');
var sql = 'SELECT * FROM `mysql` WHERE 1';

var name ='';
db.query(sql, function(err, rows, fields){ 
  if (err) { 
    console.log(err); 
    return; 
  } 
  name=rows[0].name;
  console.log('用户名称 : ', rows[0].name); 
}); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: name });

});

module.exports = router;
