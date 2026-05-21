import { useState, } from "react";
import { Formik } from 'formik';
import { useNavigate } from "react-router";

const EstudianteForm = (props) => {
    const [nuevoEstudiante, setNuevoEstudiante] = useState(
        {
            nombre: "",
            edad:0,
            url:""
        }
    );

    const navegar = useNavigate();

    const [errorNombre, setErrorNombre] = useState("");
    const [errorEdad, setErrorEdad] = useState("");

    const { onAgregar } = props; 

    const handlerSubmit = (e) =>{
        e.preventDefault();
        if(nuevoEstudiante.nombre.length >= 8){
            onAgregar(nuevoEstudiante)
            setErrorNombre("")
            navegar("/estudiantes")
            
        }else if(nuevoEstudiante.edad >= 18){
            onAgregar(nuevoEstudiante)
            setErrorEdad("");
            navegar("/estudiantes")
        }else{
            setErrorEdad("Al menos 18!!!")
            setErrorNombre("DESGRACIADO MINIMO 8 LETRAS EN LOS NOMBRES!")
        }
        //aqui es donde se manda 2 VECEEES -- arreglado: una sola verificación
    }
    return (

        <form onSubmit={handlerSubmit}>
            <div>
                <label htmlFor="est_nombre">Nombre: </label>
                <input
                    type="text"
                    name="est_nombre"
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
                    name="est_edad"
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