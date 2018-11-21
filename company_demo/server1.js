var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'blog'
});
 
connection.connect();
    // 创建 application/x-www-form-urlencoded 编码解析
    var urlencodedParser = bodyParser.urlencoded({ extended: false })
   app.use(express.static('public'));

    app.get('/index.html', function (req, res) {
      res.sendFile( __dirname + "/" + "index.html" );
    })
    app.locals.title = 'My App';
    app.post('/process_get',urlencodedParser, function (req, res) {
        var   username = req.body.first_name;
        var   password = req.body.last_name;
        var   open_id = '25';
        // 输出 JSON 格式
        var response = [
            username,
            password,
            open_id,
            ];
        var sql = " INSERT INTO user(username,password,open_id) VALUES(?,?,?)";
        connection.query(sql, response ,function (error, results, fields) {
                if (error) throw error;
                    console.log('The solution is: ', results);
                }); 
        
        console.log(response);
        res.end(JSON.stringify(response));
    })
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})