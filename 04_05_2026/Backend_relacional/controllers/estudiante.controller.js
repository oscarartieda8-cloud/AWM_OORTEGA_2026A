const { Model } = require("sequelize");
const Estudiante = require("../models/estudiante.model");

// GET ALL: Traer la lista
module.exports.getAllEstudiantes = async (_, res) => {
    try {
        const estudiantes = await Estudiante.findAll();
        res.json(estudiantes);
    } catch (err) {
        res.status(500).json(err);
    }
};

// GET ONE: Traer un solo estudiante
module.exports.getEstudiante = async (req, res) => {
    try {
        const { id } = req.params;
        const estudiante = await Estudiante.findOne({
            where: { id: id } 
        });
        
        if (estudiante) {
            res.json(estudiante); 
        } else {
            res.status(404).json({ message: "Estudiante no encontrado" });
        }
    } catch (err) {
        res.status(500).json(err); 
    }
};

// POST: Crear estudiante
module.exports.postEstudiante = async (req, res) => {
    try {
        const { nombre, edad, url } = req.body;
        const estudiante = await Estudiante.create({ nombre, edad, url });
        res.status(201).json(estudiante);
    } catch (err) {
        res.status(500).json(err);
    }
};

// PUT: Actualizar estudiante
module.exports.putEstudiante = async (req, res) => {
    const { id } = req.params; // Forma correcta de extraer el id
    
    try {
        const { nombre, edad, url } = req.body;
        
        const [filasCambiadas] = await Estudiante.update(
            { nombre, edad, url },
            { where: { id: id } }
        );
            
        if (filasCambiadas > 0) {
            const updateEstudiante = await Estudiante.findOne({
                where: { id: id }
            });
            res.json(updateEstudiante);
        } else {
            res.status(404).json({ message: "Error de actualización: Estudiante no encontrado" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

// DELETE: Eliminar estudiante
module.exports.deleteEstudiante = async (req, res) => {
    const { id } = req.params; // Forma correcta de extraer el id
    
    try {
        const Estudianteborrado = await Estudiante.findOne({ where: { id: id } });
        
        if (!Estudianteborrado) {
            // Se necesita el return para que no intente borrar si no existe
            return res.status(404).json({ message: "Estudiante no encontrado" });
        }
        
        await Estudiante.destroy({ where: { id: id } });
        
        // Devolvemos el estudiante borrado con el status 200 OK
        res.status(200).json(Estudianteborrado);
    } catch (err) {
        res.status(500).json(err);
    }
};