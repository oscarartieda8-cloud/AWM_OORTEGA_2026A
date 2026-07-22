import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";

const Registro = () => {
    const [nuevoUsuario, setNuevoUsuario] = useState({
        correo: "",
        contraseña: "",
        rol: "visualizador"
    });
    const [error, setError] = useState("");
    const navegar = useNavigate();

    const handlerRegistro = (e) => {
        e.preventDefault();
        api.post("/usuarios/register", nuevoUsuario)
            .then(() => {
                navegar("/login");
            })
            .catch((err) => {
                setError("Error al registrar usuario");
                console.log(err);
            });
    };

    return (
        <div>
            <h2>Registro de Usuario</h2>
            <div>{error}</div>
            <form onSubmit={handlerRegistro}>
                <div>
                    <label htmlFor="reg_correo">Correo: </label>
                    <input
                        type="text"
                        name="correo"
                        id="reg_correo"
                        value={nuevoUsuario.correo}
                        onChange={(e) => setNuevoUsuario(prev => ({ ...prev, correo: e.target.value }))}
                    />
                </div>
                <div>
                    <label htmlFor="reg_pass">Contraseña: </label>
                    <input
                        type="password"
                        name="contraseña"
                        id="reg_pass"
                        value={nuevoUsuario.contraseña}
                        onChange={(e) => setNuevoUsuario(prev => ({ ...prev, contraseña: e.target.value }))}
                    />
                </div>
                <div>
                    <label htmlFor="reg_rol">Rol: </label>
                    <select
                        name="rol"
                        id="reg_rol"
                        value={nuevoUsuario.rol}
                        onChange={(e) => setNuevoUsuario(prev => ({ ...prev, rol: e.target.value }))}
                    >
                        <option value="visualizador">visualizador</option>
                        <option value="admin">admin</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="Registrar" />
                </div>
            </form>
            <br />
            <button onClick={() => navegar("/")}>Inicia Sesion</button>
        </div>
    );
};

export default Registro;
