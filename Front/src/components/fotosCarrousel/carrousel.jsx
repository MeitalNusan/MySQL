import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete, MdOutlineEdit } from "react-icons/md";  
import styles from "../fotosCarrousel/cssCarrou.module.css";
import { deleteImgHome } from "../Delete/deleteImgHome";
import { Link } from "react-router-dom";
import { useAuth } from "../../Hooks/AuthContext";

export const Carrousel = ({ apiEndpoint }) => {
  const [images, setImages] = useState([]);  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();
  

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        setImages(response.data);  // Asume que la respuesta es un array de imágenes
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

  const updateImagesList = (id) => {
    setImages((prevImages) => prevImages.filter(image => image.id !== id));
  };

  return (
    <section className={styles.carousel}>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000" data-bs-pause="false">
        <div className="carousel-inner">
          {images.map((foto, index) => (
            <> 
            
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={foto.id}>
              <img
                src={URL.createObjectURL(new Blob([Uint8Array.from(foto.data.data)], { type: foto.type }))} 
                className={styles.fotos} 
                alt={`Foto ${foto.id}`}  
              />
               <div/>
                 { user && user.isAdmin && (
                        <div className={styles.botones} >
                            <button className="btn btn-danger" onClick={() => handleDelete(foto.id)}>
                                <MdDelete /> 
                            </button>
                            <Link to={`/editAdidas/${foto.id}`} className="btn btn-primary">
                                <MdOutlineEdit />  
                            </Link>
                        </div>
                    )}
              </div>
             
               
            </>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </section>
   );
};
