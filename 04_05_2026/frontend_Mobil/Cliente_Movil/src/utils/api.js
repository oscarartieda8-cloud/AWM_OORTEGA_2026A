// queremos crear una instancia personalizada de axios para conectarnos a la API con onfiguracion de nuestro interés

import axios from "axios";

export const api = axios.create( //creamos una instancia personalizada de axios
    {
        baseURL: 'http://192.168.1.28:8000' //nuestro servidor 0w0
    }
); 
