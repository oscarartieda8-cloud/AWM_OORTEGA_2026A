const { DataTypes } = require('sequelize')
const { createSequelize } = require("../config/sequelize.config");

const sequelize = createSequelize

const Usuario = sequelize.define('usuarios', {
    id: {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    correo : {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
            notNull : { msg : "MODEL: Correo falta"}
        }
    },
    contraseñañ : {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
            notNull : { msg : "MODEL: Contraseña falta"}
        }
    }
});

module.exports = Usuario;

