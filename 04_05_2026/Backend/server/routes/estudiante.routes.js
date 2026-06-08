const estudianteController = require('../controllers/estudiante.controller');

module.exports = function(app){
    app.get('/estudiantes', estudianteController.getAllEstudiantes)
}