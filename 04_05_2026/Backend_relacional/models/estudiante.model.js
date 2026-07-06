const { DataTypes } = require('sequelize');
const { createSequelize } = require('../config/sequelize.config');

const sequelize = createSequelize();

const Estudiante = sequelize.define('estudiantes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "El nombre es obligatorio" }
        }
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: "La edad es obligatoria" }
        }
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Estudiante;