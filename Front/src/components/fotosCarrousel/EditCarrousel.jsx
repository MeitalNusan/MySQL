import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';  // Importamos useParams y useNavigate
import { Spinner } from "../spinner/Spinner";

export const EditCarrousel  = () => {
    const { id } = useParams();  // Obtenemos el id desde la URL
    const navigate = useNavigate();  // Usamos useNavigate para redirigir después de actualizar
    const [titulo, setTitulo] = useState("");
    const [img, setImg] = useState(null);  // Para archivos, inicialízalo como null
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getImgById = async () => {
            try {
                const respuesta = await axios.get(`http://localhost:8000/carrousel/${id}`);  // URL específica
                setTitulo(respuesta.data.name);  // Asumiendo que el nombre de la imagen es 'name'
                setCargando(false);
            } catch (error) {
                console.error("Error al obtener la imagen:", error);
                setError("Error al obtener la imagen. Inténtalo de nuevo más tarde.");
                setCargando(false);
            }
        };

        getImgById();  // Llamada para obtener los datos de la imagen por ID
    }, [id]);

    if (cargando) {
        return <Spinner />;  // Muestra el spinner mientras carga
    }

    const update = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("name", titulo);
            if (img) {
                formData.append("image", img);  // Agrega el archivo al FormData
            }

            // Actualiza la imagen en la API
            await axios.put(`http://localhost:8000/carrousel/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",  // Asegura que el servidor reconozca el FormData
                },
            });

            alert("Imagen actualizada con éxito!");
            navigate('/');  // Redirige a la página principal después de actualizar
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
            <h1>Editar Imagen</h1>
            {error && <p>{error}</p>}
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">Titulo</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}  // Cambiar el título de la imagen
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Imagen</label>
                    <input
                        type="file"
                        onChange={handleFileChange}  // Cambiar la imagen
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
