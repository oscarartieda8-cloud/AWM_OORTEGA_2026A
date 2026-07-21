const mongoose = require("mongoose"); //importamos nuestro orm 

mongoose.connect("mongodb://127.0.0.1/autores",
    {
    }
)
    .then(()=> console.log("Established conection with db"))
    .catch((err)=> console.log("Something went wrong wa wa :/", err));