var path =require('path');

module.exports.index =function(req,res){
   // res.send('index');
   //   要使用模板引擎  不使用  res.sendFile 
    res.sendFile(path.join(__dirname,'public','html','index.html'));

    // 使用 res.render    但是默认的不能使用 需要配置一个模板引擎才能使用 ejs
    res.render(path.join(__dirname,'public','html','index.html'));
};
module.exports.list =function(req,res){
    //res.send('list');
    res.sendFile(path.join(__dirname,'public','html','list.html'));
};