const { application } = require('express');
const {check, validationResult} = require('express-validator');

module.exports.form_add_noticia = function (application, req, resp) {
    resp.render('admin/form_add_noticia', {
        'validacao': {},
        noticia: {}
    });
}

module.exports.form_add_colunista = function(application, req, resp){
    resp.render('admin/form_add_colunistas', {
        validacao:{},
        colunista:{}
    })
}


//salvar noticia
module.exports.noticias_salvar = function (application, req, resp) {
    //req
    var noticia = req.body;

    //connMsql
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    //validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        resp.render('admin/form_add_noticia', {
            'validacao': errors.errors,
            'noticia': noticia
        });
        console.log(errors);
        return;
    }

    //salvarNoticia
    noticiasModel.salvarNoticia(noticia, function (error, result) {
        resp.redirect('/noticias');
    });
}

//salvar colunista
module.exports.colunista_salvar = function(application, req, resp){
    var colunista = req.body;
    var connection = application.config.dbConnection();
    var colunistaModel = new application.app.models.ColunistasDAO(connection);

    //validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        resp.render('admin/form_add_colunistas', {
            'validacao': errors.errors,
            'colunista': colunista
        });
        console.log(errors);
        return;
    }

    //salvarNoticia
    colunistaModel.salvarColunista(colunista, function (error, result) {
        resp.redirect('/colunistas');
    });


}
