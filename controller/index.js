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
module.exports.chicken = function (req, res) {
    var sql = 'SELECT count(*) FROM chicken_soup'; //查询鸡汤数量
    // 获取随机数
    var num = 0 
    req.app.locals.connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }

        num =  Math.round(Math.random()*result[0]['count(*)'])
        var sql = 'SELECT chicken_name FROM chicken_soup WHERE id= "'+ num + '"'; //查询鸡汤数量
        req.app.locals.connection.query(sql, function (err, result) {
            if (err) {
                console.log('[SELECT ERROR] - ', err.message);
                return;
            }
    
            console.log('--------------------------SELECT----------------------------');
            console.log(result[0]);
            res.json(result[0]);
            console.log('------------------------------------------------------------\n\n');
        });

    
    });
};
module.exports.poisonous_chicken = function (req, res) {
    var sql = 'SELECT count(*) FROM poisonous_chicken_soup'; //查询毒鸡汤数量
    // 获取随机数
    var num = 0 
    req.app.locals.connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }

        num =  Math.round(Math.random()*result[0]['count(*)'])
        var sql = 'SELECT chicken_name FROM poisonous_chicken_soup WHERE id= "'+ num + '"'; //查询鸡汤数量
        req.app.locals.connection.query(sql, function (err, result) {
            if (err) {
                console.log('[SELECT ERROR] - ', err.message);
                return;
            }
    
            console.log('--------------------------SELECT----------------------------');
            console.log(result[0]);
            res.json(result[0]);
            console.log('------------------------------------------------------------\n\n');
        });

    
    });
};