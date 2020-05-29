
var mysql = require('mysql')
var mysqlConfig = {
    host     : '192.168.198.130',
    port     :'3306',
    user     : 'root',
    password : '123456',
    database : 'pet'
}

module.exports.connection = mysql.createConnection(mysqlConfig)
