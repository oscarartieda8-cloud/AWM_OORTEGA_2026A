const express = require("express");
const app = express();
const puerto = 8000;

const cors = require('cors');

require('./server/config/mongoose.config');


app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json()); //ESTE ES NUESTRO MIDDLEWARE PARA QUE EXPRESS PUEDA ENTENDER LOS JSONS QUE LE ENVIAMOS DESDE EL FRONTEND - NO ESTA EN LA CARPETA DE MIDDLEWARES PORQUE ES UNA FUNCION QUE YA VIENE INCLUIDA EN EXPRESS, NO ES ALGO QUE HAYAMOS CREADO NOSOTROS

const allEstudiantesRoutes = require('./server/routes/estudiante.routes');
allEstudiantesRoutes(app);


const allUsuariosRoutes = require('./server/routes/usuario.routes');
allUsuariosRoutes(app);

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