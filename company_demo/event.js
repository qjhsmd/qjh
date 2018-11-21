var events = require('events');
var eventsEmitter = new events.EventEmitter();
var eventHandler = function connected(){
    console.log("连接成功");

    eventsEmitter.emit('data_received');
}


eventsEmitter.on('evn',eventHandler);

// 使用匿名函数绑定 data_received 事件
eventsEmitter.on('data_received', function(){
    console.log('数据接收成功。');
 });

eventsEmitter.emit('evn');

console.log("程序执行完毕");
