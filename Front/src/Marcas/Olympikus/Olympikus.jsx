import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdDelete, MdOutlineEdit } from "react-icons/md";  
import styles from "../../components/Home/cssHome.module.css";
import { useAuth } from "../../Hooks/AuthContext";
 


export const Olympikus = () => {
    const [images, setImages] = useState([]);  
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useAuth();
    

    const navigate = useNavigate()
  
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/olympikus`);
                setImages(response.data);  
            } catch (error) {
                console.error("Error fetching images:", error);
                setError("Error fetching images");  
            } finally {
                setLoading(false);  
            }
        };
  
        fetchImages();
    }, []);
  
    if (loading) {
        return <div>Loading images...</div>;
    }
  
    if (error) {
        return <div>Error: {error}</div>;
    }
  
    if (images.length === 0) {
        return <div>No images found</div>;
    }
  
     const deleteImgHome = async (id) => {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/olympikus/${id}`);
            console.log("Image deleted:", response.data);
        } catch (error) {
            console.error("Error deleting image:", error);
            throw error; 
        }
    };
     const handleDelete = async (id) => {
        const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar esta imagen?");

        if (confirmDelete) {
            try {
                await deleteImgHome(id);  
                updateImagesList(id);  
                navigate("/olympikus")
            } catch (error) {
                console.error("Error deleting image:", error);
            }
        } else {
            console.log("Imagen no eliminada.");
         }
    };

     const updateImagesList = (id) => {
        setImages((prevImages) => prevImages.filter(image => image.id !== id));
    };
  
    return (
        <> 
        <br /> 
        <div className={styles.conteinerAdidas}>
            {images.map((foto) => (
                <div key={foto.id}>
                    <Link to="#">
                        <img
                            src={URL.createObjectURL(new Blob([Uint8Array.from(foto.data.data)], { type: foto.type }))} 
                            className={styles.fotosGral}
                            alt={`Foto ${foto.id}`}  
                        />
                    </Link>
                    {user && user.isAdmin && (
                        <>
                            <button className="btn btn-danger" onClick={() => handleDelete(foto.id)}>
                                <MdDelete /> 
                            </button>
                            <Link to={`/editOlympikus/${foto.id}`} className="btn btn-primary">
                                <MdOutlineEdit />  
                            </Link>
                        </>
                    )}
                </div>
            ))}
        </div>
        </>
    );
};
