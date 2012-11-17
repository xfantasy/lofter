
/*
 * GET home page.
 */

exports.index = function(req, res){
    var mongodb = require('mongodb');
    var mongodbServer = new mongodb.Server('localhost', 27017, { auto_reconnect: true, poolSize: 10 });
    var db = new mongodb.Db('mydb', mongodbServer);

    res.render('index', { title: 'Lofter' });
};