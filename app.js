var express =require('express');
var app =express();
var config =require('./config');
var router =require('./router');
app.use('/',router);
app.listen(config.port,function(){
    console.log('http://localhost:'+config.port)
})