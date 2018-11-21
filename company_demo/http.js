var http = require('http');

http.createServer(
     function(req,res){
                
        if(req.url == '/' || req.url == '/index'){
            res.end('Hello,Index');
        }else if(req.url == '/qjh'){
            res.end('ddd');
        }else{
            res.end('404 Not Found');
        }



       }).listen(8899,function(){

       })