const estudianteController = require('../controllers/estudiante.controller');

module.exports = function(app){
    app.get('/estudiantes', estudianteController.getAllEstudiantes)
    app.get('/estudiantes/:id', estudianteController.getEstudiante)
    app.post('/estudiantes', estudianteController.postEstudiante)
    app.put('/estudiantes/:id', estudianteController.putEstudiantes)
    app.delete('/estudiantes/:id', estudianteController.deleteEstudiante)
    app.post('/estudiantes/login', estudianteController.loginEstudiante)
}


