const usuarioController = require('../controllers/usuario.controller');

module.exports = function(app){
    app.post('/usuarios/register', usuarioController.registerUsuario)
    app.post('/usuarios/login', usuarioController.loginUsuario)
}