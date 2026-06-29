const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/Prueba1_B2")
    .then(()=> console.log("Conexión Establecida"))
    .catch((err)=> console.log("Algo salio mal wa wa :/", err));