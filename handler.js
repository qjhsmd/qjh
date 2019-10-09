var path =require('path');
var mysql  = require('mysql');
var dbConfig =require('./DBConfig.js');



// app.use(bodyparser.urlencoded({extende:true}));
// app.use(bodyparser.json())
//连接数据库

var connection = mysql.createConnection(dbConfig.mysql);
  connection.connect();

 

module.exports.index =function(req,res){
   // res.send('index');
   //   要使用模板引擎  不使用  res.sendFile 
//    var sql = "SELECT * FROM user";
//    connection.query(sql, function (error, results, fields) {
//      if (error) throw error;
//      console.log('The solution is: ', results);
//      res.send(results);
//    }); 

    res.sendFile(path.join(__dirname,'public','html','index.html'));
    // 使用 res.render    但是默认的不能使用 需要配置一个模板引擎才能使用 ejs
    //res.render(path.join(__dirname,'public','html','index.html'));
};

module.exports.list =function(req,res){
    //res.send('list');
    res.sendFile(path.join(__dirname,'public','html','list.html'));
};

module.exports.demo =function(req,res){
var  sql = 'SELECT * FROM user';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       res.json(result);
       console.log('------------------------------------------------------------\n\n');  
});
    // connection.end();
};

// module.exports.result =function(req,res){
//         var   username = req.body.username;
//         var   password = req.body.password;
//         var   open_id = req.body.open_id;
//         // 输出 JSON 格式
//         var response = [
//             username,
//             password,
//             open_id,
//             ];
           
//         var sql = " INSERT INTO user(username,password,open_id) VALUES(?,?,?)";
//         connection.query(sql, response ,function (error, results, fields) {
//                 if (error) throw error;
//                     console.log('The solution is: ', results);
//                    res.send('请求成功');
//                 }); 
// };