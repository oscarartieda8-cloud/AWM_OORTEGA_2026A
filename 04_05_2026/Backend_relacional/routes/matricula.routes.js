const matriculaController = require('../controllers/matricula.controller');
const autorizacion = require('../middlewares/Autorization.middleware')
const rol = require('../middlewares/Rol.middleware')

module.exports = function(app){
    app.get('/matriculas', autorizacion.autenticate, rol.tieneRol("Admin", "visualizador"), matriculaController.getAllMatriculas);
    app.get('/estudiantes/:id/materias', autorizacion.autenticate, rol.tieneRol("Admin", "visualizador"), matriculaController.getMateriasDeEstudiante);
    app.get('/materias/:id/estudiantes', autorizacion.autenticate, rol.tieneRol("Admin", "visualizador"), matriculaController.getEstudiantesDeMateria);
    app.post('/matriculas', autorizacion.autenticate, rol.tieneRol("Admin"), matriculaController.postMatricula);
    app.delete('/matriculas', autorizacion.autenticate, rol.tieneRol("Admin"), matriculaController.deleteMatricula);
}   