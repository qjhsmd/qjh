var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'blog'
});
 
connection.connect();
var sql = "SELECT * FROM user";
 
connection.query(sql, function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
}); 