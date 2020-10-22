var mysql = require('mysql');

var connMyql = function(){
    return  mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'db_noticias'
    });
} 

module.exports = function(){
    return connMyql;
}