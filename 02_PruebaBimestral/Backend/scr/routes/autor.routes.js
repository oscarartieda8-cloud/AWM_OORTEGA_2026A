const autorController = require('../controllers/autor.controller')
const rol = require('../middlewares/autorización.middleware')
const auth = require('../middlewares/autenticación.middleware')

module.exports = function(app) {
    app.get('/autores', auth.autenticate ,rol.tieneRol("admin", "visualizador"), autorController.ListaDeAutores),
    app.get('/autores/:id', auth.autenticate ,rol.tieneRol("admin", "visualizador"), autorController.AutorEspecifico),
    app.post('/autores', auth.autenticate ,rol.tieneRol("admin"), autorController.crearAutor),
    app.put('/autores/:id', auth.autenticate ,rol.tieneRol("admin"), autorController.editarAutor),
    app.delete('/autores/:id', auth.autenticate ,rol.tieneRol("admin"), autorController.borrarAutor)
}