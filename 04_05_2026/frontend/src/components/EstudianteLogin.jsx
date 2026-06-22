import { useState, } from "react";
import { Formik } from 'formik';
import { useNavigate } from "react-router";
import { useEffect } from "react";

const EstudianteLogin = (props) => {
    const [nuevoEstudiante, setNuevoEstudiante] = useState(
        {
            email: "",
            password: ""

        }
    );
    const [errorMensaje, setErrorMensaje] = useState("");
    const { onLogin } = props
    const navegar = useNavigate();

    const handlerSubmit = async (e) => {
        e.preventDefault(); // Bloquea que las credenciales se vayan a la URL

        // Esperamos la respuesta asíncrona del hook
        const resultado = await onLogin(nuevoEstudiante);

        if (resultado.status === true) {
            setErrorMensaje(""); // Limpiamos errores anteriores si los hubiera
            navegar("/estudiantes"); // Redirección exitosa
        }
        else {
            // Guardamos "Login Fallido" en el estado para mostrarlo en pantalla
            setErrorMensaje(resultado.message);
        }
    };

    return (

        <div>
            <h2>{"Inicio de Sesion para estudiantes"}</h2>
            <form onSubmit={handlerSubmit}>
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
                    <input type="submit" id="est_submit" value={"Iniciar Sesion"} />
                </div>
                <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
                    {errorMensaje}
                </p>
            </form>
        </div>

    );
}

export default EstudianteLogin;