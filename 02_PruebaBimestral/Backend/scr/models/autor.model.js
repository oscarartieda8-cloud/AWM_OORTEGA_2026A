const { DataTypes } = require('sequelize');
const { createSequelize } = require('../config/sequelize.config');

const sequelize = createSequelize();


const Autor = sequelize.define('autores', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "MODEL: El nombre es obligatorio" }
        }
    }
});

module.exports = Autor;