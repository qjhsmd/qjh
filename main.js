var fs = require("fs");
//var data =fs.readFileSync('qjh.txt');
//console.log(data.toString());
fs.readFile('qjh.txt',function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
})
console.log('好神奇');