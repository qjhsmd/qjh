module.exports.result = function (data,code,message) {
 return {
    code:code?code:0, //0 表示成功 
    message:message?message:'请求成功',
    data:data?data:{}
 }   
}