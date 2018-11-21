var path =require('path');
var mysql  = require('mysql');
var dbConfig =require('./DBConfig.js');
//连接数据库
var connection = mysql.createConnection(dbConfig.mysql);
  connection.connect();

 

module.exports.index =function(req,res){
   // res.send('index');
   //   要使用模板引擎  不使用  res.sendFile 
   var sql = "SELECT * FROM user";
   
   connection.query(sql, function (error, results, fields) {
     if (error) throw error;
     console.log('The solution is: ', results);
     res.send(results);
   }); 

    //res.sendFile(path.join(__dirname,'public','html','index.html'));
    // 使用 res.render    但是默认的不能使用 需要配置一个模板引擎才能使用 ejs
    //res.render(path.join(__dirname,'public','html','index.html'));
};
module.exports.list =function(req,res){
    //res.send('list');
    res.sendFile(path.join(__dirname,'public','html','list.html'));
};