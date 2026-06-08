const { response } = require("express")
const Estudiante = require("../models/estudiante.model")

module.exports.getAllEstudiantes = (_, res) => {
    Estudiante.find({})
    .then(estudiantes => res.json(estudiantes))
    .catch(err => response.json(err))
}