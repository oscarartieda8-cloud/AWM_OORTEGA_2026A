const { response } = require("express")
const Estudiante = require("../models/estudiante.model")

module.exports.getAllEstudiantes = (_, res) => {
    Estudiante.find({})
    .then(estudiantes => res.json(estudiantes))
    .catch(err => res.json(err))
}

module.exports.getEstudiante = (req, res) =>{
    const {id} = req.params;
    Estudiante.findOne({_id:id})
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err))
}

module.exports.postEstudiante = async (req, res) => {
    const {nombre, edad, url } = req.body;
    if(!nombre||!edad){
        return res.status(400).json({message:"Campos obligatorios incompletos!"})
    }
    else{
        Estudiante.create({nombre, edad, url})
            .then(resultado => res.json(resultado))
            .catch(err => res.status(500).json(err))
    }
}

module.exports.putEstudiantes = (req, res) => {
    const {id} = req.params;
    const {nombre, edad, url} = req.body;
    Estudiante.findOneAndUpdate({_id:id}, {nombre, edad, url}, {new:true})
        .then(resultado => res.json(resultado))
        .catch(err => res.status(500).json(err))
}

module.exports.deleteEstudiante = (req, res) => {
    const {id} = req.params;
    Estudiante.deleteOne({_id:id})
        .then(resultado => res.json({message: "ESTUDIANTE ELIMINADO"}))
        .catch(err => res.status(500).json(err))
}