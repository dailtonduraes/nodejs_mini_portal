function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getAll = function (callback) {
    this._connection.query('select *, date_format(data_criacao, \'%d-%m-%Y\') as dt_criacao from tb_noticias order by id desc', callback);
}

NoticiasDAO.prototype.getId  = function(id_noticia, callback){
    this._connection.query(`select *, date_format(data_criacao, \'%d-%m-%Y\') as dt_criacao from tb_noticias where id = ${id_noticia.id}`, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('select *, date_format(data_criacao, \'%d-%m-%Y\') as dt_criacao from tb_noticias order by id desc LIMIT 5', callback)
}


NoticiasDAO.prototype.salvarNoticia = function(noticia, callback ) {
    console.log(noticia);
    this._connection.query('insert into tb_noticias set ?', noticia, callback);
}




module.exports = function () {
    return NoticiasDAO;
}