const mongoose = require('mongoose')

const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [
            true,
            "El nombre es obligatorio"
        ]
    },
    email: {
        type: String,
        required: [
            true, "email is required"
        ],
        unique: true
    },
    password: {
        type: String,
        required: [
            true, "Password is required"
        ]
    },
    rol: {
        type: String,
        enum: ["visualizador", "Admin"],
        default: "visualizador",
        required: [
            true, "rol is required"
        ]
    }
},
{
    timestamps: true //opcional para auditoria
}
)

const Usuario = mongoose.model('usuario', UsuarioSchema);

module.exports = Usuario;   