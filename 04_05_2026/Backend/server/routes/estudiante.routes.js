const estudianteController = require('../controllers/estudiante.controller');

module.exports = function(app){
    app.get('/estudiantes', estudianteController.getAllEstudiantes)
    app.get('/estudiantes/:id', estudianteController.getEstudiante)
    app.post('/estudiantes/nuevo', estudianteController.postEstudiante)
    app.put('/estudiantes/editar/:id', estudianteController.putEstudiantes)
    app.delete('/estudiantes/eliminar/:id', estudianteController.deleteEstudiante)
}


