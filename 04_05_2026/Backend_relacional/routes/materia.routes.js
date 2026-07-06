const materiaController = require('../controllers/materia.controller');
const autorizacion = require('../middlewares/Autorization.middleware')
const rol = require('../middlewares/Rol.middleware')

module.exports = function(app){
    app.get('/materias', autorizacion.autenticate, rol.tieneRol("Admin", "visualizador"), materiaController.getAllMaterias);
    app.get('/materias/:id', autorizacion.autenticate, rol.tieneRol("Admin", "visualizador"), materiaController.getMateria);
    app.post('/materias', autorizacion.autenticate, rol.tieneRol("Admin"), materiaController.postMateria);
    app.put('/materias/:id', autorizacion.autenticate, rol.tieneRol("Admin"), materiaController.putMateria);
    app.delete('/materias/:id', autorizacion.autenticate, rol.tieneRol("Admin"), materiaController.deleteMateria);
}