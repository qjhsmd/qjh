//express_demo.js 文件
var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
   res.send('Hell00o Wor1ld <img src="./images/zfb.jpg"/>');
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
  console.log(host);
  console.log(port);
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})