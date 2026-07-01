const estudianteController = require('../controllers/estudiante.controller');
const autorizacion = require('../middlewares/Autorization.middleware')
const rol = require('../middlewares/Rol.middleware')

module.exports = function(app){
    app.get('/estudiantes', autorizacion.autenticate, rol.tieneRol("Admin", "visualizador"), estudianteController.getAllEstudiantes)
    app.get('/estudiantes/:id', autorizacion.autenticate, rol.tieneRol("Admin", "visualizador"), estudianteController.getEstudiante)
    app.post('/estudiantes', autorizacion.autenticate, rol.tieneRol("Admin"), estudianteController.postEstudiante)
    app.put('/estudiantes/:id', autorizacion.autenticate, rol.tieneRol("Admin"), estudianteController.putEstudiantes)
    app.delete('/estudiantes/:id', autorizacion.autenticate, rol.tieneRol("Admin"), estudianteController.deleteEstudiante)
}