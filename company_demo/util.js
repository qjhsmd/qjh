var util =require('util');

function Person(){
    this.name ="jhq";
    this.toString =function(){
        return this.name;
    }
}
var obj =new Date();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true));