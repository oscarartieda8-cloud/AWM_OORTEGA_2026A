const Matricula = require("../models/matricula.model");
const Estudiante = require("../models/estudiante.model");
const Materia = require("../models/materia.model");

// GET ALL: Traer todas las matrículas, con el estudiante y la materia ya incluidos
module.exports.getAllMatriculas = async (_, res) => {
    try {
        const matriculas = await Matricula.findAll({
            include: [Estudiante, Materia]
        });
        res.json(matriculas);
    } catch (err) {
        res.status(500).json(err);
    }
};

// GET: Traer las matrículas (con su materia incluida) de un estudiante
module.exports.getMateriasDeEstudiante = async (req, res) => {
    try {
        const matriculas = await Matricula.findAll({
            where: { EstudianteId: req.params.id },
            include: [Materia]
        });
        res.json(matriculas);
    } catch (err) {
        res.status(500).json({ msg: "Ocurrió un error al obtener las materias matriculadas" });
    }
};

// GET: Traer las matrículas (con su estudiante incluido) de una materia
module.exports.getEstudiantesDeMateria = async (req, res) => {
    try {
        const matriculas = await Matricula.findAll({
            where: { MateriaId: req.params.id },
            include: [Estudiante]
        });
        res.json(matriculas);
    } catch (err) {
        res.status(500).json({ msg: "Ocurrió un error al obtener los estudiantes matriculados" });
    }
};

// POST: Matricular a un estudiante en una materia
module.exports.postMatricula = async (req, res) => {
    try {
        const { EstudianteId, MateriaId } = req.body;
        const matricula = await Matricula.create({ EstudianteId, MateriaId });
        res.json(matricula);
    } catch (err) {
        res.status(500).json({ msg: "Ocurrió un error al registrar la matriculación" });
    }
};

// DELETE: Eliminar una matrícula (desmatricular a un estudiante de una materia)
module.exports.deleteMatricula = async (req, res) => {
    try {
        const { EstudianteId, MateriaId } = req.body;
        await Matricula.destroy({ where: { EstudianteId, MateriaId } });
        res.json({ message: "Matrícula eliminada" });
    } catch (err) {
        res.status(500).json({ msg: "Ocurrió un error al eliminar la matriculación" });
    }
};