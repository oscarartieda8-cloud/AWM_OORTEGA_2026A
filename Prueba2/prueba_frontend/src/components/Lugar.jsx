import { useState } from "react"
const Lugar = (props) => {
    const {id, nombre, ciudad, pais, descripcion} = props
    return(
        <div>
            <h1 id="Nombre">{nombre}</h1>
            <h2>Ciudad: {ciudad}</h2>
            <h2>Pais: {pais}</h2>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa_Xm3hoDMILjOo0w9oSlQRizeImTU81tXow&s" alt="" />
            <br />
            <br />
        </div>
    )

}

export default Lugar;