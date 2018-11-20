//
var fs = require('fs');
var msg ="jhuheufheirfe09rfu09er";
fs.writeFile('./hello.txt',msg,'utf8',function(err){
          if(err){
              console.log("处理文件出错")
          }else{
              console.log('ok');
          }
})