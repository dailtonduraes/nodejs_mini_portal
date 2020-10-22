//server
var app = require('./config/server')


//requires routes 
//home = require('./app/routes/home')(app);
//noticias = require('./app/routes/noticias')(app);
//form_add = require('./app/routes/form_add_noticia')(app)


//listen
app.listen(3000, function () {
    console.log('Servidor ON');
})