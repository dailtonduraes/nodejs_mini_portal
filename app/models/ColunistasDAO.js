function ColunistasDAO(connection){
    this._connection = connection;
}



ColunistasDAO.prototype.getAll = function(callback){
    this._connection.query('select *, date_format(data_cadastro, \'%d-%m-%Y\') as data_cadastro from tb_colunistas order by nome', callback);
}

ColunistasDAO.prototype.salvarColunista = function(colunista, callback){
    console.log(colunista);
    this._connection.query('insert into tb_colunistas set ?', colunista, callback)
}


module.exports = function () {
    return ColunistasDAO
}