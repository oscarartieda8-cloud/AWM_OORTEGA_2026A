const materiaController = require('../controllers/materia.controller');

module.exports = function(app){
    app.get('/materias', materiaController.getAllMaterias);
    app.get('/materias/:id', materiaController.getMateria);
    app.post('/materias', materiaController.postMateria);
    app.put('/materias/:id', materiaController.putMateria);
    app.delete('/materias/:id', materiaController.deleteMateria);
}