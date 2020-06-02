
module.exports.login = function (req, res) {
    req.session.user = req.body.username;
    var sql = 'SELECT * FROM user  WHERE userName="'+ req.body.username + '"'; //查
    req.app.locals.connection.query(sql, function (err, result) {
      if (err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
      }
  
      console.log('--------------------------SELECT----------------------------');
      console.log(result);
      if(result.length === 0){
        res.json( 
            req.app.locals.result('',-1,'账号不存在')
                );

      }else if(result.length === 1){

        res.json(  req.app.locals.result(result) );

      }else if(result.length >1){

        res.json( 
            req.app.locals.result({},1,'账号异常')
                );
                
      }
     
      console.log('------------------------------------------------------------\n\n');
    });
  };