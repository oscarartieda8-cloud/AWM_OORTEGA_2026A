const Usuario = require("../models/usuario.model")
const bcrypt = require("bcryptjs")
const token = require("jsonwebtoken")

module.exports.registerUsuario = async (req, res) => {
    const {nombre, password, email, rol } = req.body;
    if(!nombre||!password || !email){
        return res.status(400).json({message:"Campos obligatorios incompletos!"})
    }
    else{
        const usuarioEncontrado = await Usuario.findOne({email});
        if(usuarioEncontrado){
            return res.status(400).json({message:"Usuario ya existe con ese correo"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        Usuario.create({nombre, password: hashedPassword, email, rol})
            .then(resultado => res.json({nombre:resultado.nombre, email:resultado.email, rol:resultado.rol}))
            .catch(err => res.status(500).json(err))
    }
}

module.exports.loginUsuario = async (req, res) => {
    const {email, password} = req.body;
    const usuarioEncontrado = await Usuario.findOne({email});
    if(usuarioEncontrado && (await bcrypt.compare(password, usuarioEncontrado.password))){
        return res.status(200).json({message: 'Inicio de sesion correcto', email: usuarioEncontrado.email, nombre: usuarioEncontrado.nombre,
            token: generateToken(usuarioEncontrado.id, usuarioEncontrado.rol)
         })
    }else{
        return res.status(400).json({message:"Login Fallido"})
    }
}

const generateToken = (id, rol) => {
    return token.sign({id, rol},"CLAVE", {expiresIn: '30d'})
}