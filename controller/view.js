
var path =require('path');
console.log("==========")
console.log(path.join(__dirname,'..','public', 'html', 'list.html'))
console.log("==========")
module.exports.result = function (req, res) {
    req.session.user = req.body.username;
    var userName = req.body.username;
    var password = req.body.password;
    var id = req.body.open_id;
    // 输出 JSON 格式
    var response = [
      userName,
      password,
      id,
    ];
    
    var sql = " INSERT INTO user(userName,password,id) VALUES(?,?,?)";
    req.app.locals.connection.query(sql, response, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
      res.send('请求成功');
    });
  };

  module.exports.index = function (req, res) {
    // res.send('index');
    //   要使用模板引擎  不使用  res.sendFile 
    //    var sql = "SELECT * FROM user";
    //    connection.query(sql, function (error, results, fields) {
    //      if (error) throw error;
    //      console.log('The solution is: ', results);
    //      res.send(results);
    //    }); 
  
    res.sendFile(path.join(__dirname,'..', 'public', 'html', 'index.html'));
    // 使用 res.render    但是默认的不能使用 需要配置一个模板引擎才能使用 ejs
    //res.render(path.join(__dirname,'public','html','index.html'));
  };
  
  module.exports.list = function (req, res) {
    //res.send('list');

    res.sendFile(path.join(__dirname,'..','public', 'html', 'list.html'));
  };