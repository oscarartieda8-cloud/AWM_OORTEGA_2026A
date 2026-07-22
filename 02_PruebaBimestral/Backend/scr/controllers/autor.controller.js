const Autor = require('../models/autor.model')

module.exports.ListaDeAutores = async (_, res) => {
    try{
        const listaAutores = await Autor.findAll();
        res.status(200).json(listaAutores)
    }
    catch(err)
    {
        res.status(500).json({msg: "CTRL: Error interno Lista Autores"})
    }
}

module.exports.AutorEspecifico = async (req, res) =>{
    const { id } = req.params;
    try{
        const autor = await Autor.findOne({
            where: { id : id}
        });

        if(autor){
            res.status(200).json(autor)
        }
        else
        {
            res.status(404).json({msg : "CTRL: Autor no encontado"})
        }
    }
    catch(err)
    {
        res.status(500).json({msg : "CTRL: Error interno Single Autor"})
    }
}

module.exports.crearAutor = async (req, res) => {
    const { nombre } = req.body;
    try{
        const autorCreado = await Autor.create({nombre:nombre});
        res.status(200).json(autorCreado)
    }
    catch(err)
    {
        res.status(500).json({msg: "CTRL: Error interno creación"})
    }
} 

module.exports.editarAutor = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    try{
        const [filasCambiadas] = await Autor.update(
            {nombre:nombre},
            {where:{id:id}}
        )

        if(filasCambiadas > 0){
            const autorEditado = await Autor.findOne({where: {id:id}})
            res.status(200).json(autorEditado)
        }
        else
        {
            res.status(404).json({msg: "CTRL: Error al actualizar"})
        }
    }
    catch(err) 
    {
        res.status(500).json({msg: "CTRL: Error Actualización - No se encontró Autor"})    }
}

module.exports.borrarAutor = async (req, res) =>{
    const { id } = req.params;
    try
    {
        const autorBorrado = await Autor.findOne({where: {id:id}})

        if(!autorBorrado){
            return res.status(404).json({msg : "CTRL: Error al borrar - No existe el Autor"})
       }

       await Autor.destroy({where: {id:id}})

       res.status(200).json(autorBorrado)
    }
    catch(err)
    {
        res.status(500).json({msg : "CTRL: Error interno Borrado"})
    }
}