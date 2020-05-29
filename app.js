var express =require('express');
var app =express();
var config =require('./config');
var router =require('./router');
var session = require('express-session');
var DBConfig = require('./DBConfig.js');
var tool = require('./util/tool.js');
//配置中间件
app.use(session({
    secret: "keyboard cat",
     resave: false,
     saveUninitialized: true,
     cookie: ('name', 'value',{ maxAge:  10*60*1000,
                                secure: false,
                                name: "seName",
                                resave: false})
}));

// app.use(session({
//     secret:'secret',
//     resave:true,
//     saveUninitialized:false,
//     cookie:{
//         maxAge:1000*60*10 //过期时间设置(单位毫秒)
//     }
// }));
DBConfig.connection.connect()
app.locals.connection = DBConfig.connection
app.locals.title = '测试'
app.locals.email = 'qjh886@qq.com'
app.locals.result = tool.result
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use('/',router);
app.listen(config.port,function(){
    console.log('http://localhost:'+config.port)
})