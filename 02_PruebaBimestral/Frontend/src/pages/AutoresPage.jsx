import { useNavigate } from "react-router-dom";

const AutoresPage = (props) => {
    const { autores, onEliminar } = props;
    const navegar = useNavigate();
    const rol = localStorage.getItem("rol");

    return (
        <div className="contenedor-autores">
            <h1>Autores Favoritos</h1>

            {rol == "admin" ? (
                <button onClick={() => navegar("/autores/nuevo")}>Add an author</button>
            ) : null}

            <table border="1">
                <thead>
                    <tr>
                        <th>Autor</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {autores.map((autor) => (
                        <tr key={autor.id}>
                            <td>{autor.nombre}</td>
                            <td>
                                {rol == "admin" ? (
                                    <div>
                                        <button onClick={() => navegar(`/autores/${autor.id}/editar`)}>
                                            Editar
                                        </button>
                                        <button onClick={() => onEliminar(autor.id)}>
                                            Borrar
                                        </button>
                                    </div>
                                ) : (
                                    <span>Solo lectura</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AutoresPage;
