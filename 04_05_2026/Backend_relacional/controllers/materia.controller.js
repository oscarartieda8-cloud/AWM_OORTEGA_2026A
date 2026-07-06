const Materia = require("../models/materia.model");

// GET ALL: Traer la lista
module.exports.getAllMaterias = async (_, res) => {
    try {
        const materias = await Materia.findAll();
        res.json(materias);
    } catch (err) {
        res.status(500).json(err);
    }
};

// GET ONE: Traer una sola materia
module.exports.getMateria = async (req, res) => {
    try {
        const { id } = req.params;
        const materia = await Materia.findOne({
            where: { id: id }
        });

        if (materia) {
            res.json(materia);
        } else {
            res.status(404).json({ message: "Materia no encontrada" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

// POST: Crear materia
module.exports.postMateria = async (req, res) => {
    try {
        const { nombre } = req.body;
        const materia = await Materia.create({ nombre });
        res.status(201).json(materia);
    } catch (err) {
        res.status(500).json(err);
    }
};

// PUT: Actualizar materia
module.exports.putMateria = async (req, res) => {
    const { id } = req.params;

    try {
        const { nombre } = req.body;

        const [filasCambiadas] = await Materia.update(
            { nombre },
            { where: { id: id } }
        );

        if (filasCambiadas > 0) {
            const materiaActualizada = await Materia.findOne({
                where: { id: id }
            });
            res.json(materiaActualizada);
        } else {
            res.status(404).json({ message: "Error de actualización: Materia no encontrada" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

// DELETE: Eliminar materia
module.exports.deleteMateria = async (req, res) => {
    const { id } = req.params;

    try {
        const materiaBorrada = await Materia.findOne({ where: { id: id } });

        if (!materiaBorrada) {
            return res.status(404).json({ message: "Materia no encontrada" });
        }

        await Materia.destroy({ where: { id: id } });

        res.status(200).json(materiaBorrada);
    } catch (err) {
        res.status(500).json(err);
    }
};