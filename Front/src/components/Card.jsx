import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "./Spinner";
import Modal from "react-modal";
import "./cssCard.css"

export const Card = () => {
    const [img, setImg] = useState(null); // Cambiado a un solo objeto de imagen en lugar de un array
    const [cargando, setCargando] = useState(true);

    const API = "http://localhost:8000/img/";

    const { id } = useParams();

    const getImgById = async () => {
        try {
            const respuesta = await axios.get(API + id);
            // Verificar el tipo de respuesta.data y asignar según corresponda
            if (respuesta.data) {
                setImg(respuesta.data); // Si es un solo objeto de imagen
            }
            setCargando(false);
        } catch (error) {
            console.error("Error al obtener la imagen:", error);
            setCargando(false);
        }
    };

    useEffect(() => {
        getImgById();
    }, [id]);

    if (cargando) {
        return <Spinner />;
    }

    return (
        <div className="card">
           <p> {img && (
                <img
                    className="cardImage"
                    src={URL.createObjectURL(new Blob([Uint8Array.from(img.data.data)]), { type: img.type })}
                    alt={img.name} 
                />
            )}</p>
               <h3>{img.name}</h3>
        </div>
    );
};
