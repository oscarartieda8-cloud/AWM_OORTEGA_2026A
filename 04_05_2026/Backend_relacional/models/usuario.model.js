const { DataTypes } = require('sequelize');
const { createSequelize } = require('../config/sequelize.config');

const sequelize = createSequelize();

const Usuario = sequelize.define('usuarios', {
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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: { msg: "El email es obligatorio" },
            isEmail: { msg: "Debe ser un email válido" }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "La contraseña es obligatoria" }
        }
    },
    rol: {
        type: DataTypes.ENUM("visualizador", "Admin"),
        allowNull: false,
        defaultValue: "visualizador"
    }
});

module.exports = Usuario;