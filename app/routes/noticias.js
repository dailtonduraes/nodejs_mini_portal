module.exports = function (application) {

    //getAll
    application.get('/noticias', function (req, resp) {
        application.app.controllers.noticias.todas_noticias(application, req, resp);
    })

    // getID
    application.get('/noticia', function (req, resp) {
       application.app.controllers.noticias.noticia_id(application, req, resp);
    })
}