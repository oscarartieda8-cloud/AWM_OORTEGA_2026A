const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors());

const env = require('./scr/config/env')

const { createSequelize } = require('./scr/config/sequelize.config')
const sequelize = createSequelize();


//MODELS
require('./scr/models/autor.model');
require('./scr/models/usuario.model');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//RUTAS 
    //AUTOR
    const allAutoresRoutes = require('./scr/routes/autor.routes')
    allAutoresRoutes(app);
    //USUARIO
    const allUsuariosRoutes = require('./scr/routes/usuario.routes')
    allUsuariosRoutes(app);

//CONECTAR A LA BASE Y LEVANTAR

sequelize.sync({ force: true }).then(() => {
    console.log('Base de datos conectada.');

    app.listen(env.port, () => {
        console.log("Server listening at port", env.port);
    });
}).catch(err => {
    console.log('Error al conectar la BDD', err);
});