import { useState, } from "react";
import { Formik } from 'formik';
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useEffect } from "react";

const EstudianteForm = (props) => {
    const [nuevoEstudiante, setNuevoEstudiante] = useState(
        {
            nombre: "",
            edad: 0,
            url: ""
        }
    );
    const { id } = useParams();
    const navegar = useNavigate();

    const [errorNombre, setErrorNombre] = useState("");
    const [errorEdad, setErrorEdad] = useState("");

    const { onAgregar, onActualizar, estudiantes } = props;

    useEffect(() => {

        if (id) {
            const estudianteEditado = estudiantes.find(e => e.id == id)

            if (estudianteEditado) {
                setNuevoEstudiante(estudianteEditado)
            }
        }
    }, [id])

    const handlerSubmit = (e) => {
        e.preventDefault();

        // 1. Validamos el Nombre primero
        if (nuevoEstudiante.nombre.length < 8) {
            setErrorNombre("DESGRACIADO MINIMO 8 LETRAS EN LOS NOMBRES!");
            return;
        }
        setErrorNombre(""); // Si pasa la validación, limpiamos el error

        // 2. Validamos la Edad después
        if (nuevoEstudiante.edad < 18) {
            setErrorEdad("Al menos 18!!!");
            return;
        }
        setErrorEdad(""); // Si pasa, limpiamos el error

        // ¿Editamos o Creamos?
        if (id) {
            // Si hay ID en la URL, usamos la función PUT de nuestro hook
            onActualizar(id, nuevoEstudiante);
        } else {
            // Si no hay ID, es un POST normal para crear
            onAgregar(nuevoEstudiante);
        }

        // 4. Redirección final
        navegar("/estudiantes");
    };
    return (

        <div>
            <h2>{id ? "Edicion de estudiantes" : "Agregación de estudiantes"}</h2>
            <form onSubmit={handlerSubmit}>
                <div>
                    <label htmlFor="est_nombre">Nombre: </label>
                    <input
                        type="text"
                        name="nombre"
                        id="est_nombre"
                        placeholder="Ingresa tu nombre"
                        required
                        value={nuevoEstudiante.nombre}
                        onChange={(e) => setNuevoEstudiante(prev => ({ ...prev, nombre: e.target.value }))} />
                    {/*e de Event, contiene toda la info del evento - target es para obtener el elemento 
            del input pq ese genero el evento y con value saco el valor xd */}
                </div>
                <div>
                    {errorNombre}
                </div>
                <div>
                    <label htmlFor="est_edad">Edad:  </label>
                    <input
                        type="number"
                        name="edad"
                        id="est_edad"
                        placeholder="Ingresa tu edad" required
                        value={nuevoEstudiante.edad}
                        onChange={(e) => setNuevoEstudiante(prev => ({ ...prev, edad: e.target.value }))}
                    />
                    {/* FIJATE QUE AQUI SI SIRVE CON LA VERSIÓN DEL PREV PORQUE YA NO ESTAMOS USANDO REFERENCIA A SI MISMO */}
                </div>
                <div>
                    {errorEdad}
                </div>
                <div>
                    <label htmlFor="est_url">URL:  </label>
                    <input
                        type="text"
                        name="url"
                        id="est_url"
                        placeholder="URL del home page"
                        value={nuevoEstudiante.url}
                        onChange={(e) => setNuevoEstudiante({ ...nuevoEstudiante, url: e.target.value })}
                    />
                </div>
                <div>

                    <input type="submit" id="est_submit" value={id ? "Editar" : "Agregar"} />
                </div>
            </form>
        </div>

    );
}

export default EstudianteForm;