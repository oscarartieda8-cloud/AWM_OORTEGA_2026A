import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AutorForm = (props) => {
    const [nuevoAutor, setNuevoAutor] = useState({ nombre: "" });
    const [errorNombre, setErrorNombre] = useState("");

    const { id } = useParams();
    const navegar = useNavigate();
    const { onAgregar, onActualizar, autores } = props;

    useEffect(() => {
        if (id) {
            const autorEditado = autores.find((a) => a.id == id);
            if (autorEditado) {
                setNuevoAutor(autorEditado);
            }
        }
    }, [id]);

    const handlerSubmit = async (e) => {
        e.preventDefault();

        if (nuevoAutor.nombre.length < 3) {
            setErrorNombre("El nombre debe tener al menos 3 caracteres.");
            return;
        }
        setErrorNombre("");

        try {
            if (id) {
                await onActualizar(id, nuevoAutor);
            } else {
                await onAgregar(nuevoAutor);
            }
            navegar("/autores");
        } catch (err) {
            console.error("Error al guardar el autor:", err);
        }
    };

    return (
        <div>
            <h1>Autor Fav</h1>
            <button onClick={() => navegar("/autores")}>Regresar a Inicio</button>

            <h2>{id ? "Edit this author" : "Add a new author:"}</h2>

            <form onSubmit={handlerSubmit}>
                <div>
                    <label htmlFor="autor_nombre">Nombre: </label>
                    <input
                        type="text"
                        name="nombre"
                        id="autor_nombre"
                        value={nuevoAutor.nombre}
                        onChange={(e) =>
                            setNuevoAutor((prev) => ({ ...prev, nombre: e.target.value }))
                        }
                    />
                </div>

                <div>
                    {errorNombre}
                </div>

                <div>
                    <button type="button" onClick={() => navegar("/autores")}>
                        Cancelar
                    </button>
                    <input type="submit" value="Guardar" />
                </div>
            </form>
        </div>
    );
};

export default AutorForm;
