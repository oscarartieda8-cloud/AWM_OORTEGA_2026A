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
    const { onLogin } = props
    const navegar = useNavigate();

    const handlerSubmit = async (e) => {
        e.preventDefault();

        const resultado = await onLogin(nuevoEstudiante);

        if (resultado.status == true) {
            navegar("/estudiantes");
        }
        else {
            console.log(resultado.message);
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
            </form>
        </div>

    );
}

export default EstudianteLogin;