const autorController = require('../controllers/autor.controller');

module.exports = function(app){
    app.get('/autores', autorController.getAllAutores)
    app.get('/autores/:id', autorController.getAutor)
    app.post('/autores', autorController.crearAutor)
    app.put('/autores/:id', autorController.editarAutor)
    app.delete('/autores/:id', autorController.borrarAutor)
}
