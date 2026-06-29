const mongoose = require("mongoose");

const RestauranteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required : [true, "Nombre requerido"]
    },
    tipo : {
        type: String,
        required : [true, "Tipo de Restaurante Requerido!"]
    },
    direccion: {
        type: String,
        required : [false]
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model('Restaurante', RestauranteSchema);