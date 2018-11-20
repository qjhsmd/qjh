var http =require('http');
var fs  = require('fs');
var fs =require('url');
http.createServer(function(request,response){
    var pathname =url.parse(request.url).pathname;
    console.log()
})