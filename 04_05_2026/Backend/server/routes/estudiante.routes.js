const estudianteController = require('../controllers/estudiante.controller');
const autorizacion = require('../middlewares/Autorization.middleware')

module.exports = function(app){
    app.get('/estudiantes', autorizacion.autenticate, estudianteController.getAllEstudiantes)
    app.get('/estudiantes/:id', autorizacion.autenticate, estudianteController.getEstudiante)
    app.post('/estudiantes', estudianteController.postEstudiante)
    app.put('/estudiantes/:id', autorizacion.autenticate, estudianteController.putEstudiantes)
    app.delete('/estudiantes/:id', autorizacion.autenticate, estudianteController.deleteEstudiante)
    app.post('/estudiantes/login', estudianteController.loginEstudiante)
}


