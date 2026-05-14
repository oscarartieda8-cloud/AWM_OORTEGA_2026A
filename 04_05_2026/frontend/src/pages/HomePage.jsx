import { Link } from "react-router-dom";

const HomePage = () => {
    return(
        <div>
            <h1>BIENVENIDO</h1> 
            <Link to={"/estudiantes"}> Estudiantes </Link>
            <br />
            <Link to={"/estudiantes/nuevo"}> AGREGAR </Link>
        </div>
    );
}

export default HomePage;