const matriculaController = require('../controllers/matricula.controller');

module.exports = function(app){
    app.get('/matriculas', matriculaController.getAllMatriculas);
    app.get('/estudiantes/:id/materias', matriculaController.getMateriasDeEstudiante);
    app.get('/materias/:id/estudiantes', matriculaController.getEstudiantesDeMateria);
    app.post('/matriculas', matriculaController.postMatricula);
    app.delete('/matriculas', matriculaController.deleteMatricula);
}