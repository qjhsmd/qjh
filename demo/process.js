// process.on('exit',function(code){
//     setTimeout(function(){
//         console.log("nonono");
//     },0);
//     console.log('退出码：',code);
// })
// console.log("程序执行结束");

process.stdout.write('和耦合哦');
// 通过参数读取
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
 });
 
 // 获取执行路径
 console.log(process.execPath);
 
 
 // 平台信息
 console.log(process.platform);