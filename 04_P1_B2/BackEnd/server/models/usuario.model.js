const mongoose = require ("mongoose")

const UsuarioSchema = new mongoose.Schema({
    email : {
        type: String,
        required : [true, "Email requerido!"]
    },
    contrasenia : {
        type: String,
        required: [true, "Contraseña Requeridisima!"]
    },
    rol : {
        type: String,
        enum: ["admin", "gestor", "visitante"],
        default: "visitante",
        required: [true, "Rol Requerido!"]
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model("Usuario", UsuarioSchema);
