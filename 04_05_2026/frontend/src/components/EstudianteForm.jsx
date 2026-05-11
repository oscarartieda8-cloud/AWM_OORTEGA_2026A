import { useState } from "react";

const EstudianteForm = (props) => {
    const [nuevoEstudiante, setNuevoEstudiante] = useState(
        {
            id: "", /*simplemente para que los ids sean diferentes*/
            nombre: "NOMBRE",
            edad: 0,
            url: "AQUI TU URL"

        }
    );
    const { onAgregar } = props; 
    const hnadlerSubmit = (e) =>{
        e.preventDefault();
        onAgregar(nuevoEstudiante)
    }
    return (

        <form onSubmit={hnadlerSubmit}>
            <div>
                <label htmlFor="est_nombre">Nombre: </label>
                <input
                    type="text"
                    name="est_nombre"
                    id="est_nombre"
                    placeholder="Ingresa tu nombre" required
                    value={nuevoEstudiante.nombre}
                    onChange={(e) => setNuevoEstudiante({ ...nuevoEstudiante, nombre: e.target.value })} />
                {/*e de Event, contiene toda la info del evento - target es para obtener el elemento 
            del input pq ese genero el evento y con value saco el valor xd */}
            </div>
            <div>
                <label htmlFor="est_edad">Edad:  </label>
                <input
                    type="number"
                    name="est_edad"
                    id="est_edad"
                    placeholder="Ingresa tu edad" required
                    value={nuevoEstudiante.edad}
                    onChange={(e) => setNuevoEstudiante({ ...nuevoEstudiante, edad: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="est_url">URL:  </label>
                <input
                    type="text"
                    name="est_url"
                    id="est_url"
                    placeholder="URL del home page"
                    value={nuevoEstudiante.url}
                    onChange={(e) => setNuevoEstudiante({ ...nuevoEstudiante, url: e.target.value })}
                />
            </div>
            <div>

                <input type="submit" id="est_submit" value={"Agregar"} />
            </div>
        </form>

    );
}

export default EstudianteForm;