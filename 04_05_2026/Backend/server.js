const express = require("express");
const app = express();
const puerto = 8000;

require('./server/config/mongoose.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const allEstudiantesRoutes = require('./server/routes/estudiante.routes');
allEstudiantesRoutes(app);

app.listen(puerto, () => {
    console.log("Server listening at port", puerto)
})


/*
//ponemos _ si no necesitaras el req o el res jaja
app.get("/", (req,res)=>{
    res.json({"mensaje" : "Hola mundo!"})// este es un json
    //res.send("Hola Mundo! Soy Oscar") //texto plano
})

app.get("/estudiantes", (req,res)=>{
    res.json({
        "mensaje":"Endpoint para obtener lista de estudiantes",
    })
})

app.get("/estudiantes/:id", (req,res)=>{
    const {id} = req.params //FIJATE QUE DEBES USAR {}
    res.json({
        "mensaje":`Endpoint para obtener estudiante con id: ${id}`
    })
})

app.delete("/estudiantes/:id", (req,res)=>{
    const {id} = req.params //FIJATE QUE DEBES USAR {}
    res.json({
        "mensaje":`Endpoint para eliminar estudiante con id: ${id}`
    })
})

app.listen(puerto, ()=>console.log("El servidor está escuchando en el puerto: ", puerto))*/