import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";
{/*aca props son la func set de mi hook */ }
const LugarForm = (props) => {
    const [sitio, setSitio] = useState({
        id: 0,
        nombre: "",
        ciudad: "",
        pais: "",
        descripcion: ""
    });
    const { onAgregar } = props;

    const navegar = useNavigate();

    const HandlerSubmit = (e) => {
        e.preventDefault();
        if (sitio.id >= 1 && sitio.descripción != "") {
            onAgregar(sitio);
            navegar("/");
        }
    }
    //console.log(sitio)
    return (
        <div>
            <form onSubmit={HandlerSubmit}>
                <div>
                    <label htmlFor="id">Identificador</label>
                    <input type="number"
                        name="id"
                        id="id"
                        required
                        placeholder="Ingresa un Id"
                        value={sitio.id}
                        onChange={(e) => setSitio(prev => ({ ...prev, id: Number(e.target.value) }))}
                    />
                </div>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text"
                        name="nombre"
                        id="nombre"
                        required
                        placeholder="Ingrese el Nombre"
                        value={sitio.nombre}
                        onChange={(e) => setSitio(prev => ({ ...prev, nombre: e.target.value }))}
                    />
                </div>
                <div>
                    <label htmlFor="ciudad">Ciudad</label>
                    <select
                        name="ciudad"
                        id="ciudad"
                        required
                        value={sitio.ciudad}
                        onChange={(e) => setSitio(prev => ({ ...prev, ciudad: e.target.value }))}
                    >
                        <option value="">Seleccione una ciudad</option>

                        {/* Tus opciones reales */}
                        <option value="Quito">Quito</option>
                        <option value="Guayaquil">Guayaquil</option>
                        <option value="Cuenca">Cuenca</option>
                        <option value="Loja">Loja</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="nombre">País</label>
                    <input type="text"
                        name="pais"
                        id="pais"
                        required
                        placeholder="Ingrese Pais"
                        value={sitio.pais}
                        onChange={(e) => setSitio(prev => ({ ...prev, pais: e.target.value }))}
                    />
                </div>
                <div>
                    <label htmlFor="nombre">Desc:</label>
                    <input type="text"
                        name="descripción"
                        id="descripción"
                        required
                        placeholder="Ingrese Pais"
                        value={sitio.descripción}
                        onChange={(e) => setSitio(prev => ({ ...prev, descripción: e.target.value }))}
                    />
                </div>
                <div>
                    <input type="submit" id="submit_btn" value={"AGREGAR!!"} />
                </div>
                <div>

                </div>
            </form>
        </div>
    )
}

export default LugarForm;