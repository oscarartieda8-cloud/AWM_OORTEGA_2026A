const { response } = require("express")
const Estudiante = require("../models/estudiante.model")

module.exports.getAllEstudiantes = (_, res) => {
    Estudiante.find({})
    .then(estudiantes => res.json(estudiantes))
    .catch(err => response.json(err))
}

module.exports.getEstudiante = (req, res) =>{
    const {id} = req.params;
    Estudiante.findOne({_id:id})
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

module.exports.postEstudiante = (req, res) => {
    const {nombre, edad, url} = req.body;
    Estudiante.create({nombre,edad,url})
        .then(res => res.json({message: "QUE BIEN SI SE INGRESO"}))
        .catch(err => res.json(err))
}