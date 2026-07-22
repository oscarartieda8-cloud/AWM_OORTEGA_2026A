const usuarioController = require('../controllers/usuario.controller');


module.exports = function(app){
    app.post('/usuarios/register',usuarioController.Registro);
    app.post('/usuarios/login', usuarioController.Login);
}