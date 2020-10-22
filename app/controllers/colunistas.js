//all colunistas

module.exports.todos_colunistas = function (application, req, resp) {
    var connection = application.config.dbConnection();
    var colunistaModel = new application.app.models.ColunistasDAO(connection);

    colunistaModel.getAll(function (error, result) {
        resp.render('colunistas/colunistas', {
            colunistas: result
        });
    })
    
}