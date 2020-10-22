module.exports = function (application) {
    
    //get formulario
    application.get('/colunistas', function (req, resp) {
        application.app.controllers.colunistas.todos_colunistas(application, req, resp);
    })


}