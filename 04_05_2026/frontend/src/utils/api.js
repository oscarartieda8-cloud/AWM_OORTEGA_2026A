// queremos crear una instancia personalizada de axios para conectarnos a la API con onfiguracion de nuestro interés

import axios from "axios";

export const api = axios.create( //creamos una instancia personalizada de axios
    {
        baseURL: import.meta.env.VITE_URL_BASE //nuestro servidor 0w0
    }
); 
