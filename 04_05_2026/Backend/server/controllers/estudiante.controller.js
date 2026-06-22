const { response } = require("express")
const Estudiante = require("../models/estudiante.model")
const  bcrypt = require("bcryptjs")
const token = require("jsonwebtoken")

module.exports.getAllEstudiantes = (_, res) => {
    Estudiante.find({})
    .then(estudiantes => res.json(estudiantes))
    .catch(err => response.json(err))
}

module.exports.getEstudiante = (req, res) =>{
    const {id} = req.params;
    Estudiante.findOne({_id:id})
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err))
}

module.exports.postEstudiante = async (req, res) => {
    const {nombre, edad, url, password, email } = req.body;
    if(!nombre||!edad||!password || !email){
        return res.status(400).json({message:"Campos obligatorios incompletos!"})
    }
    else{
        const estudianteEcnontrado = await Estudiante.findOne({email});
        if(estudianteEcnontrado){
            return res.status(400).json({message:"Usuario ya existe con ese correo"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        Estudiante.create({nombre,edad,url, password: hashedPassword, email})
            .then(resultado => res.json({nombre:resultado.nombre, edad:resultado.edad, url: resultado.url, email:resultado.email}))
            .catch(err => res.status(500).json(err))
    }
}

module.exports.loginEstudiante = async (req, res) => {
    const {email, password} = req.body;
    const estudianteEncontrado = await Estudiante.findOne({email});
    if(estudianteEncontrado && (await bcrypt.compare(password, estudianteEncontrado.password))){
        return res.status(200).json({message: 'Inicio de sesion correcto', email: estudianteEncontrado.email, nombre: estudianteEncontrado.nombre,
            token: generateToken(estudianteEncontrado.id)
         })
    }else{
        return res.status(400).json({message:"Login Fallido"})
    }
}

module.exports.putEstudiantes = (req, res) => {
    const {id} = req.params;
    const {nombre, edad, url} = req.body;
    Estudiante.findOneAndUpdate({_id:id}, {nombre, edad, url}, {new:true})
        .then(resultado => res.json(resultado))
        .catch(err => res.status(500).json(err))
}

module.exports.deleteEstudiante = (req, res) => {
    const {id} = req.params;
    Estudiante.deleteOne({_id:id})
        .then(resultado => res.json({message: "ESTUDIANTE ELIMINADO"}))
        .catch(err => res.status(500).json(err))
}

const generateToken = (id) => { //los parametros que pongamos aquí son cosas que irán en el Payload del Token 
    // debe ser info reelevante para mi proposito: id, rol, email, lo que requiera - !!!van en texto plano!!!
    return token.sign({id}, "CLAVE", {expiresIn: '30d'}) //se llama token donde yo lo importé xd
}