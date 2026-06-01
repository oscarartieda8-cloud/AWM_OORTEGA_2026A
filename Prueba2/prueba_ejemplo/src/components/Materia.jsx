
//los props acá solamente son los valores ya mapeados en el Page
const Materia=(props)=>{
    const {nombre, nivel, duracion} = props
    return(
        <div>
            <h1>Materia: {nombre}</h1>
            <p>Nivel: {nivel}</p>
            <p>Duración: {duracion} horas</p>
        </div>
    )
}

export default Materia;