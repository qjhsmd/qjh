var express =require('express');
var bodyParser = require('body-parser'); //用于处理 post请求
var path =require('path');

var handler =require('./handler.js');
var router =express.Router();
   // 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/',handler.index);
router.get('/list',handler.list);
router.get('/demo',handler.demo);
// router.post('/result',urlencodedParser,handler.result);
//实现对静态资源的托管
router.use('/css',express.static(path.join(__dirname,'css')));
module.exports = router;