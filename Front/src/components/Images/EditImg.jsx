import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "../Spinner";

export const EditImg = () => {
    const [titulo, setTitulo] = useState("");
    const [img, setImg] = useState(null); // Para archivos, inicialízalo como null
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const API = "http://localhost:8000/img/";

    const { id } = useParams();

    const getImgById = async () => {
        try {
            const respuesta = await axios.get(API + id);
            setTitulo(respuesta.data.name); // Asegúrate de usar 'name' en lugar de 'titulo' si es el campo correcto
            setCargando(false);
        } catch (error) {
            console.error("Error al obtener la imagen:", error);
            setError("Error al obtener la imagen. Inténtalo de nuevo más tarde.");
            setCargando(false);
        }
    };

    useEffect(() => {
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
                formData.append("image", img); // Agrega el archivo al FormData
            }

            await axios.put(API + id, formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Asegura que el servidor reconozca el FormData
                },
            });

            navigate("/");
        } catch (error) {
            console.error("Error al actualizar la imagen:", error);
            setError("Error al actualizar la imagen. Inténtalo de nuevo más tarde.");
        }
    };

    const handleFileChange = (e) => {
        setImg(e.target.files[0]); // Captura el archivo seleccionado
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
