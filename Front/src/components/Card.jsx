import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "./Spinner";

export const Card = () => {
    const [imgs, setImg] = useState({ name: "", image: "" });
    const [cargando, setCargando] = useState(true);

    const API = "http://localhost:8000/img/";

    const { id } = useParams();

    const getImgById = async () => {
        try {
            const respuesta = await axios.get(API + id);
            setImg(respuesta.data);
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
        <div className="car">
            <p>{imgs.name}</p>
            {/* Aquí puedes mostrar la imagen si la tienes */}
            {imgs.image && (
                <img
                    src={URL.createObjectURL(
                        new Blob([Uint8Array.from(imgs.image.data)]),
                        { type:imgs.image.type }
                    )}
                    alt={imgs.name}
                />
            )}
        </div>
    );
};
