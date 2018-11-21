var fs =require("fs");
// 异步读取
// fs.readFile('input.txt', function (err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("异步读取: " + data.toString());
//  });
 
//  // 同步读取
//  var data = fs.readFileSync('input.txt');
//  console.log("同步读取: " + data.toString());
 
//  console.log("程序执行完毕。");

//  fs.open("input.txt",'r+',function(err,fd){
//      if(err){
//          return console.error(err)
//      }
//      console.log("文件打开成功"+fd.toString())
//  })

console.log("准备写入文件");
fs.writeFile('input.txt', '哈哈sdcsdss',{flag:"a"},function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
   console.log("--------我是分割线-------------")
   console.log("读取写入的数据！");
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("异步读取文件数据: " + data.toString());
   });
});