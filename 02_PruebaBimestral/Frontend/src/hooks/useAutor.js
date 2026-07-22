import { useState, useEffect } from "react";
import { api } from "../utils/api";

export const useAutor = () => {
    const [autores, setAutores] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        api.get("/autores", 
            {
            headers: { Authorization: `Bearer ${token}` }
            }
        )
            .then((response) => {
                setAutores(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const agregarAutor = async (nuevo) => {
        const token = localStorage.getItem("token");
        try {
            const res = await api.post("/autores", nuevo, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setAutores((prev) => [...prev, res.data]);
            return res.data;
        } catch (err) {
            console.log(err);
            throw err;
        }
    };

    const eliminarAutor = async (id) => {
        const token = localStorage.getItem("token");
        try {
            await api.delete(`/autores/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setAutores((prev) => prev.filter((autor) => (autor.id ?? autor._id) != id));
        } catch (err) {
            console.log(err);
            throw err;
        }
    };

    const actualizarAutor = async (id, nuevo) => {
        const token = localStorage.getItem("token");
        try {
            const res = await api.put(`/autores/${id}`, nuevo, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setAutores((prev) =>
                prev.map((autor) => ((autor.id ?? autor._id) == id ? res.data : autor))
            );
            return res.data;
        } catch (err) {
            console.log(err);
            throw err;
        }
    };

    return { autores, agregarAutor, eliminarAutor, actualizarAutor };
};