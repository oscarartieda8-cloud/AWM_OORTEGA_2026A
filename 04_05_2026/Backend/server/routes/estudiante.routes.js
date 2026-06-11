const estudianteController = require('../controllers/estudiante.controller');

module.exports = function(app){
    app.get('/estudiantes', estudianteController.getAllEstudiantes)
    app.get('/estudiantes/:id', estudianteController.getEstudiante)
    app.post('/estudiante/nuevo', estudianteController.postEstudiante)
}


