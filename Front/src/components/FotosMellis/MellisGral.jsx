import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete, MdOutlineEdit } from "react-icons/md";  
import styles from "../FotosMellis/cssMellis.module.css";
import { deleteImgHome } from "../Delete/deleteImgHome";
 import { Link } from "react-router-dom";


export const Mellis = ({ apiEndpoint }) => {
    const [images, setImages] = useState([]);  
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
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

    const handleDelete = (id) => {
        deleteImgHome(apiEndpoint, id, updateImagesList); 
    };

    const updateImagesList = () => {
        setImages((prevImages) => prevImages.filter(image => image.id !== id));
    };

    return (
        <div className={styles.mellis}>
            {images.map((foto) => (
                <div key={foto.id}>
                    <img
                        src={URL.createObjectURL(new Blob([Uint8Array.from(foto.data.data)], { type: foto.type }))}
                        className={styles.fotoMelli}
                        alt={`Foto ${foto.id}`}  
                        
                    />
                    <div>
                    <button className="btn btn-danger" onClick={() => handleDelete(foto.id)}>
                        <MdDelete /> 
                    </button>
                    <Link to={`/editMellis/${foto.id}`} className="btn btn-primary">
                         <MdOutlineEdit />  
                    </Link>
                    </div>
                   
                </div>
            ))}
        </div>
    );
};
