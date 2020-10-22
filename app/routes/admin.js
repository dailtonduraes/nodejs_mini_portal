const {validar_noticia, validar_colunista} = require('../shared/validation');
module.exports = function (application) {
    //form
    application.get('/add_noticia', function (req, resp) {
        application.app.controllers.admin.form_add_noticia(application, req, resp);
    })

    //form colunista
    application.get('/add_colunista', function(req, resp){
        application.app.controllers.admin.form_add_colunista(application, req, resp);
    })


    //cadastrar noticia
    application.post('/noticias/salvar', validar_noticia(),  function (req, resp) {
       application.app.controllers.admin.noticias_salvar(application, req, resp);
    })

    //cadastrar colunista
    application.post('/colunistas/salvar', validar_colunista(), function(req, resp){
        application.app.controllers.admin.colunista_salvar(application, req, resp);
    })
    
}