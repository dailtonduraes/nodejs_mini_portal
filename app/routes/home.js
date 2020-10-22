module.exports = function (application) {
    //
    application.get('/', function (req, resp) {
        application.app.controllers.home.index(application, req, resp);
    })
}