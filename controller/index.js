module.exports.demo = function (req, res) {
    console.log('======session========')
    console.log(req.app.locals)
    console.log('========session======')
    var sql = 'SELECT * FROM user';
    //查
    req.app.locals.connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }

        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        res.json(result);
        console.log('------------------------------------------------------------\n\n');
    });
};

module.exports.menu = function (req, res) {
    var sql = 'SELECT * FROM menu'; //查菜单
    req.app.locals.connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }

        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        res.json(result);
        console.log('------------------------------------------------------------\n\n');
    });
};