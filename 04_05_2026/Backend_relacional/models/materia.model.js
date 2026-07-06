const { DataTypes } = require('sequelize');
const { createSequelize } = require('../config/sequelize.config');

const sequelize = createSequelize();

const Materia = sequelize.define('materias', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "El nombre de la materia es obligatorio" }
        }
    }
});

module.exports = Materia;