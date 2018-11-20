var express =require('express');
var handler =require('./handler.js');
var path =require('path');
var router =express.Router();

router.get('/',handler.index);
router.get('/list',handler.list);
//实现对静态资源的托管
router.use('/css',express.static(path.join(__dirname,'css')));
module.exports = router;