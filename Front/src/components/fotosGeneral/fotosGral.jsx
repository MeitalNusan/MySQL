import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete, MdOutlineEdit } from "react-icons/md";  
import styles from "../Home/cssHome.module.css";
import { deleteImgHome } from "../Delete/deleteImgHome";
 import { Link } from "react-router-dom";
 import { useAuth } from "../../Hooks/AuthContext";


export const FotosGral = ({ apiEndpoint }) => {
    const [images, setImages] = useState([]);  
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useAuth();
    
  
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(apiEndpoint);
                setImages(response.data);  
            } catch (error) {
                console.error("Error fetching images:", error);
                setError("Error fetching images");  
            } finally {
                setLoading(false);  
            }
        };
    
        fetchImages();
    }, [apiEndpoint]);
  
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
            const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/img/${id}`);
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
                navigate("/")
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
        <div className={styles.conteiner3}>
            {images.map((foto) => (
                <div key={foto.id}>
                    <img
                        src={URL.createObjectURL(new Blob([Uint8Array.from(foto.data.data)], { type: foto.type }))}
                        className={styles.fotosGral}
                        alt={`Foto ${foto.id}`}  
                    />
                   {user && user.isAdmin && (
                        <>
                            <button className="btn btn-danger" onClick={() => handleDelete(foto.id)}>
                                <MdDelete /> 
                            </button>
                            <Link to={`/editGral/${foto.id}`} className="btn btn-primary">
                                <MdOutlineEdit />  
                            </Link>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};
