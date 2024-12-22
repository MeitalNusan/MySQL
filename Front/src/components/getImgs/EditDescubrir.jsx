import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';  
import { Spinner } from "../spinner/Spinner";

export const EditDescub = () => {
    const { id } = useParams();   
    const navigate = useNavigate();   
    const [titulo, setTitulo] = useState("");
    const [img, setImg] = useState(null);   
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getImg = async () => {
            try {
                const respuesta = await axios.get(`http://localhost:8000/homeImg/${id}`);  // URL específica
                setTitulo(respuesta.data.name);  // Asumiendo que el nombre de la imagen es 'name'
                setCargando(false);
            } catch (error) {
                console.error("Error al obtener la imagen:", error);
                setError("Error al obtener la imagen. Inténtalo de nuevo más tarde.");
                setCargando(false);
            }
        };

        getImg();   
    }, [id]);

    if (cargando) {
        return <Spinner />;   
    }

    const update = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("name", titulo);
            if (img) {
                formData.append("image", img);   
            }

            // Actualiza la imagen en la API
            await axios.put(`http://localhost:8000/homeImg/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",  
                },
            });

            alert("Imagen actualizada con éxito!");
            navigate('/');   
        } catch (error) {
            console.error("Error al actualizar la imagen:", error);
            setError("Error al actualizar la imagen. Inténtalo de nuevo más tarde.");
        }
    };

    const handleFileChange = (e) => {
        setImg(e.target.files[0]);  // Cambiar el archivo de la imagen
    };

    return (
        <div>
            <h1>Editar Descubrir mas</h1>
            {error && <p>{error}</p>}
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">Titulo</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}   
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Imagen</label>
                    <input
                        type="file"
                        onChange={handleFileChange}   
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    EDITAR
                </button>
            </form>
        </div>
    );
};