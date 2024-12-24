import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';   
import { Spinner } from "../../components/spinner/Spinner";


export const EditAdidas  = () => {
    const { id } = useParams();   
    const navigate = useNavigate();   
    const [titulo, setTitulo] = useState("");
    const [img, setImg] = useState(null);   
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getImgById = async () => {
            try {
                const respuesta = await axios.get(`http://localhost:8000/adidas/${id}`);   
                setTitulo(respuesta.data.name);  
                setCargando(false);
            } catch (error) {
                console.error("Error al obtener la imagen:", error);
                setError("Error al obtener la imagen. Inténtalo de nuevo más tarde.");
                setCargando(false);
            }
        };

        getImgById();   
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

            
            await axios.put(`http://localhost:8000/adidas/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",   
                },
            });

            alert("Imagen actualizada con éxito!");
            navigate('/adidas');   
        } catch (error) {
            console.error("Error al actualizar la imagen:", error);
            setError("Error al actualizar la imagen. Inténtalo de nuevo más tarde.");
        }
    };

    const handleFileChange = (e) => {
        setImg(e.target.files[0]);   
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
