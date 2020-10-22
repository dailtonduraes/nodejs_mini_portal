module.exports.index = function(application, req, resp){
    var connection  = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.get5UltimasNoticias(function (error, result) {
        //  console.log(result)
        resp.render('home/index', {
            noticias: result
        });
    });
}