const { DataTypes } = require('sequelize');
const { createSequelize } = require('../config/sequelize.config');
const Estudiante = require('../models/estudiante.model');
const Materia = require('../models/materia.model');

const sequelize = createSequelize();

const Matricula = sequelize.define('matriculas', {
    fechaMatricula: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // fecha actual será el valor por default
        allowNull: false
    }
});

// Definición de relación muchos a muchos
Estudiante.belongsToMany(Materia, { through: Matricula }); //poner el fk acá!
Materia.belongsToMany(Estudiante, { through: Matricula });

// Definición de relaciones uno a muchos para cargar con `include` en el controlador
Matricula.belongsTo(Estudiante, { foreignKey: 'EstudianteId' });
Matricula.belongsTo(Materia, { foreignKey: 'MateriaId' });

module.exports = Matricula;