const mongoose = require ('mongoose')

const AutorSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: [
            true,
            "Nombre Requerido"
        ]
    }

})

const Autor = mongoose.model('autor', AutorSchema);

module.exports = Autor;