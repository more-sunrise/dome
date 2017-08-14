var mysql=require('mysql');
var connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'demo'
});

connect.connect(function(){
    console.log('mysql success');
});
module.exports = connect;
