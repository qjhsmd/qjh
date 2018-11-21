console.log(__filename);
console.log(__dirname);
var i=0;
function printHello(){
         i+=1;
        console.log("hello,world"+i);
        
        if(i >=10){
            clearInterval(sss);
          }
}
 var sss = setInterval(printHello,500);


 