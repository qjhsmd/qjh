var path = require('path')
var login =require('./controller/login.js')
var view =require('./controller/view.js')
var index =require('./controller/index.js')
// app.use(bodyparser.urlencoded({extende:true}));
// app.use(bodyparser.json())



// 前后端分离的
module.exports.demo = index.demo
module.exports.menu = index.menu
module.exports.login = login.login
module.exports.chicken = index.chicken
module.exports.poisonous_chicken = index.poisonous_chicken
// 前后端不分离的
module.exports.index = view.index
module.exports.result = view.result
module.exports.list = view.list