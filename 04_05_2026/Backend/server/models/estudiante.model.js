const mongoose = require('mongoose')

const EstudianteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [
            true,
            "QUE NO TIENES NOMBRE?!?!?!? >:C"
        ]
    },

    edad: {
        type: Number,
        required : [
            true,
            "VERAS OE PON TU EDAD"
        ]
    },

    url: {
        type: String,
        required: [
            false
        ]
    }
},
{
    timestamps: true //opcional para auditoria
}
)

const Estudiante = mongoose.model('estudiante', EstudianteSchema);

module.exports = Estudiante;