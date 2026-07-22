import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";

const Login = () => {
    const [usuario, setUsuario] = useState({
        correo: "",
        contraseña: ""
    });
    const [error, setError] = useState("");
    const navegar = useNavigate();

    const handlerLogin = (e) => {
        e.preventDefault();
        api.post("/usuarios/login", usuario)
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("rol", res.data.rol);
                navegar("/autores");
            })
            .catch((err) => {
                setError("Correo o contraseña incorrectos");
                console.log(err);
            });
    };

    return (
        <div>
            <h2>Iniciar Sesion</h2>
            <div>{error}</div>
            <form onSubmit={handlerLogin}>
                <div>
                    <label htmlFor="log_correo">Correo: </label>
                    <input
                        type="text"
                        name="correo"
                        id="log_correo"
                        value={usuario.correo}
                        onChange={(e) => setUsuario(prev => ({ ...prev, correo: e.target.value }))}
                    />
                </div>
                <div>
                    <label htmlFor="log_pass">Contraseña: </label>
                    <input
                        type="password"
                        name="contraseña"
                        id="log_pass"
                        value={usuario.contraseña}
                        onChange={(e) => setUsuario(prev => ({ ...prev, contraseña: e.target.value }))}
                    />
                </div>
                <div>
                    <input type="submit" value="Ingresar" />
                </div>
            </form>
            <br />
            <button onClick={() => navegar("/registro")}>Registrarse</button>
        </div>
    );
};

export default Login;
