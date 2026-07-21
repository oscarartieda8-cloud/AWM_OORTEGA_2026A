const { response } = require("express")
const Autor = require("../models/autor.model")

module.exports.getAllAutores = (_, res) => {
    Autor.find({})
    .then(autores => res.status(200).json(autores))
    .catch(error => res.status(404).json({msg:"Error al conseguir lista de Autores"}))
}

module.exports.getAutor = (req, res) => {
    const {id} = req.params; 
    Autor.findOne({_id:id})
    .then(autor => res.status(200).json(autor))
    .catch(error => res.status(400).json({msg: "Error obtener autor"}))
}

module.exports.crearAutor = (req, res) => {
    const {nombre} = req.body;
    Autor.create({nombre})
    .then(autor => res.status(200).json(autor))
    .catch(error => res.status(400).json(error))
}

module.exports.editarAutor = (req, res) => {
    const {id} = req.params;
    const {nombre} = req.body;

    if(nombre == null){
        res.status(404).json({msg:"Autor no encontrado"})
        //con el 404 es que vamos a validad cuando el id sea incorrecto
    }

    Autor.findOneAndUpdate({_id:id}, {nombre}, {new:true})
    .then(autor => res.status(200).json(autor))
    .catch(error => res.status(400).json(error)) 
}

module.exports.borrarAutor = (req, res) => {
    const {id} = req.params;
    
    Autor.deleteOne({_id:id})
    .then(()=> res.status(200).json({msg : "Autor eliminado correctamente"}))
    .catch(error => res.status(200).json({msg: "Error al borrar"}))
}