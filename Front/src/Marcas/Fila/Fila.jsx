import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdDelete, MdOutlineEdit } from "react-icons/md";  
import styles from "../../components/Home/cssHome.module.css"
import { deleteImgHome } from "../../components/Delete/deleteImgHome";

export const Fila = () => {
    const [images, setImages] = useState([]);  
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchImages = async () => {
        try {
          const response = await axios.get("http://localhost:8000/fila/");
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
  
    //Eliminar
    const handleDelete = (id) => {
        deleteImgHome(apiEndpoint, id, updateImagesList); 
      };
    //Actualiza lista despues de eliminar la foto
      const updateImagesList = () => {
        setImages((prevImages) => prevImages.filter(image => image.id !== id));
    };
  
    return (
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
            <button className="btn btn-danger" onClick={() => handleDelete(foto.id)}>
              <MdDelete /> 
            </button>
            <Link to={`/editFila/${foto.id}`} className="btn btn-primary">
              <MdOutlineEdit />  
            </Link>
          </div>
        ))}
      </div>
    );
  };