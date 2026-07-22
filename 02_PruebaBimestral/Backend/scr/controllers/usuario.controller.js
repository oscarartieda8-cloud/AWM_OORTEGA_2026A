const Usuario = require('../models/usuario.model')
const bcrypt = require('bcryptjs');
const token = require("jsonwebtoken");

module.exports.Registro = async (req, res) => {
    const { correo, contraseña, rol } = req.body;
    if (!contraseña || !correo) {
        return res.status(400).json({ message: "CTRL: Campos obligatorios incompletos!" });
    }
    try {
        const usuarioEncontrado = await Usuario.findOne({ where: { correo } });
        if (usuarioEncontrado) {
            return res.status(400).json({ message: "CTRIL: Usuario ya existe con ese correo" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(contraseña, salt);

        const resultado = await Usuario.create({ correo, contraseña: hashedPassword, rol });
        res.json({ correo: resultado.correo, rol: resultado.rol });
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports.Login = async (req, res) => {
    const { correo, contraseña } = req.body;
    try {
        const usuarioEncontrado = await Usuario.findOne({ where: { correo } });
        if (usuarioEncontrado && (await bcrypt.compare(contraseña, usuarioEncontrado.contraseña))) {
            return res.status(200).json({
                message: 'Inicio de sesion correcto',
                email: usuarioEncontrado.correo,
                rol: usuarioEncontrado.rol,
                token: generateToken(usuarioEncontrado.id, usuarioEncontrado.rol)
            });
        } else {
            return res.status(400).json({ message: "Login Fallido" });
        }
    } catch (err) {
        res.status(500).json(err);
    } 
}

const generateToken = (id, rol) => {
    return token.sign({ id, rol }, "CLAVE", { expiresIn: '30d' });
};
