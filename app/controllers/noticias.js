//all noticias
module.exports.todas_noticias = function(application, req, resp) {
     //connMsql
     var connection = application.config.dbConnection();
     var noticiasModel = new application.app.models.NoticiasDAO(connection);

     //getAll
     noticiasModel.getAll(function (error, result) {
         resp.render('noticias/noticias', {
             noticias: result
         });
     });
}

//noticia id
module.exports.noticia_id = function(application, req, resp){

    id_noticia = req.query;

     //connection
     var connection = application.config.dbConnection();
     //model
     var noticiasModel = new application.app.models.NoticiasDAO(connection);

     //getId
     noticiasModel.getId(id_noticia, function (error, result) {
         resp.render('noticias/noticia', {
             noticia: result
         });
     });
}