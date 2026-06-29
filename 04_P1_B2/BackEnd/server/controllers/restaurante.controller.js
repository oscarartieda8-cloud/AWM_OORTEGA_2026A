const Restaurante = require('../models/restaurante.model')

module.exports.obtenerTodosResutarantes = (_,res) =>{
    Restaurante.find({})
    .then(resultado => res.status(200).json(resultado))
    .catch(error => res.status(400).json({msg: "Error al Obtener lista", error})) 
} 
module.exports.eliminarUnRestaurante = (req, res) =>{
    const {id} = req.params;
    Restaurante.deleteOne({_id: id})
    .then(respuesta => res.status(200).json({msg: "borrado correctamente"}))
    .catch(error => res.status(500).json({msg: "Error de borrado", error}))
}
module.exports.agregarUnRestaurante = (req,res) =>{
    const {nombre, tipo, direccion} = req.body;
    Restaurante.create({nombre, tipo, direccion})
    .then(resultado => res.status(200).json({nombre: resultado.nombre, tipo: resultado.tipo, direccion:resultado.direccion}))
    .catch(error => res.status(500).json({msg:"Error al crear usuario", error}))
}
module.exports.actualizarUnRestaurante = (req, res) => {
    const {nombre, tipo, direccion} = req.body;
    const {id} = req.params;

    Restaurante.findOneAndUpdate({_id:id}, {nombre, tipo, direccion}, {new : true})
    .then(respuesta => res.status(200).json({respuesta}))
    .catch(error => res.status(500).json(error))
}