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
            url: "",
            email: "",
            password: ""

        }
    );
    const { id } = useParams();
    const navegar = useNavigate();
    const [estadoRegistro, setEstadoRegistro] = useState("");
    const [errorNombre, setErrorNombre] = useState("");
    const [errorEdad, setErrorEdad] = useState("");

    const { onAgregar, onActualizar, estudiantes } = props;

    useEffect(() => {

        if (id) {
            const estudianteEditado = estudiantes.find(e => e._id == id)

            if (estudianteEditado) {
                setNuevoEstudiante(estudianteEditado)
            }
        }
    }, [id])

    const handlerSubmit = async (e) => {
        e.preventDefault();

        // 1. Validamos el Nombre primero
        if (nuevoEstudiante.nombre.length < 8) {
            setErrorNombre("DESGRACIADO MINIMO 8 LETRAS EN LOS NOMBRES!");
            return;
        }
        setErrorNombre(""); // Si pasa la validación, limpiamos el error

        if (id) {
            onActualizar(id, nuevoEstudiante);
            navegar("/estudiantes");
        } else {
            // AQUÍ ESTÁ LA MAGIA: Esperamos la respuesta de tu Hook
            const resultado = await onAgregar(nuevoEstudiante);

            if (resultado.status === true) {
                setEstadoRegistro(""); // Limpiamos el error
                navegar("/estudiantes/login"); // Todo bien, vamos a la lista
            } else {
                // Si hubo error (status false), pintamos el mensaje en pantalla
                setEstadoRegistro(resultado.message);
            }
        }
    };
    return (

        <div>
            <h2>{id ? "Edicion de estudiantes" : "Registro de estudiantes"}</h2>
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
                    <label htmlFor="est_email">Email:  </label>
                    <input
                        type="text"
                        name="email"
                        id="est_email"
                        placeholder="Email del home page"
                        value={nuevoEstudiante.email}
                        onChange={(e) => setNuevoEstudiante({ ...nuevoEstudiante, email: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="est_password">Contraseña:  </label>
                    <input
                        type="text"
                        name="password"
                        id="est_password"
                        placeholder="Ingresa tu contraseña"
                        value={nuevoEstudiante.password}
                        onChange={(e) => setNuevoEstudiante({ ...nuevoEstudiante, password: e.target.value })}
                    />
                </div>
                <div>
                    <input type="submit" id="est_submit" value={id ? "Editar" : "Agregar"} />
                </div>
                <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
                    {estadoRegistro}
                </p>
            </form>
        </div>

    );
}

export default EstudianteForm;