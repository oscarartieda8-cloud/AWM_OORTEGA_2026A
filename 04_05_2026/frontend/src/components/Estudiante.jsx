/*Componente func con operador flecha */

const Estudiante = (props) => {
    //los Props tendrán en el mismito orden que pusimos un {nombre: "...", edad: 00, url: "..."}
    //Vamos a desestructurar los elementos
    const {nombre, edad, url} = props;
    return (

        <div>
            <h1>{nombre}</h1>
            <h2>{edad}</h2>
            {url ? <a href={url}>Home Page</a> : <p>no disponible jeje</p>}
        </div>
    );
}

export default Estudiante; // para poder ser usado en otros componentes "hacerlo visble"