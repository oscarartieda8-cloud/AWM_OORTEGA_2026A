const RestauranteController = require('../controllers/restaurante.controller')

module.exports = function(app){
    app.get("/restaurantes",RestauranteController.obtenerTodosResutarantes)
    app.post("/restaurantes", RestauranteController.agregarUnRestaurante)
    app.delete("/restaurantes/:id", RestauranteController.eliminarUnRestaurante)
    app.put("/restaurantes/:id", RestauranteController.actualizarUnRestaurante)
}


