
var mysql = require('mysql')
var mysqlConfig = {
    host     : '106.53.251.59',
    port     :'3306',
    user     : 'root',
    password : '123456',
    database : 'pet'
}

module.exports.connection = mysql.createConnection(mysqlConfig)
