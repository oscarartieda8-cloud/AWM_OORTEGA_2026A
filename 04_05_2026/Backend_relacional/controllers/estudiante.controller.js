const { Model } = require("sequelize");
const Estudiante = require("../models/estudiante.model");

// Única función: Traer la lista
module.exports.getAllEstudiantes = (_, res) => {
    Estudiante.findAll() 
        .then(estudiantes => res.json(estudiantes))
        .catch(err => res.status(500).json(err))
}


