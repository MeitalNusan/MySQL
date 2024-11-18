import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "../Home/cssHome.module.css";
 import { Spinner } from "../Spinner";
import zapaNB from "../Images/imagenes/zapaNB.jpg"
import lionel from "../Images/imagenes/lionel.jpg"
import zapaOl from"../Images/imagenes/zapaOlymcomp.png"
import { Mellis } from "../Mellis/Mellis";
import { MdOutlineEdit, MdDelete } from "react-icons/md";


 
const API= "http://localhost:8000/homeImg/";

export const Home = () => {
  const [file, setFile] = useState([])
  const [cargando, setCargando] = useState(true);

    
  const getAllPost = async () => {
    try {
        const searchURL = API
        const res = await axios.get(searchURL);
        setFile(res.data);
    } catch (error) {
        console.error("Error fetching images:", error);
    } finally {
        setCargando(false);
    }
};
  const deletePost = async (id) => {
      try {
          await axios.delete(`${API}${id}`);
          getAllPost();
      } catch (error) {
          console.error("Error deleting image:", error);
      }
  };

    

  const confirmarDelete = (id) =>{
    Swal.fire({
        title: "Estas seguro?",
        text: "No se podrá revertir",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            deletePost(id)
          Swal.fire({
            title: "Eliminado!",
            text: "Tu documento ha sido eliminado",
            icon: "success",
          });
        }
      });
    } 

    

useEffect(()=>{
    setCargando(true);
     getAllPost()
 },[])

if(cargando){
    return <Spinner/>
}

    return (
      <> 
   <section className={styles.carousel}>
     <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" data-bs-interval="4000" data-bs-pause="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src={zapaNB} class="d-block w-100" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img src={lionel} class="d-block w-100" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img src={zapaOl} class="d-block w-100" alt="Third slide" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </button>
</div>
</section>
       

  
     {/*  <div className={styles.conteiner3}>
         <div className="numero2">
          <Link  to="/" ><img className='img2' src={lionel} alt="" /></Link>
          </div>
          <div className="numero2">
          <Link  to="/" ><img className='img2' src={zapaNB} alt="" /></Link>
          </div>
          <div className="numero2">
          <Link  to="/" ><img className='img2' src={zapaOl} alt="" /></Link>
          </div>
           
          
        </div> */}
        
        <div>
        <Mellis className={styles.descubre} title="Ver Más">
      {file.map((foto) => (
        <div key={foto.id}> 
          <Link to="#">
            <img
              src={URL.createObjectURL(new Blob([Uint8Array.from(foto.data.data)], { type: foto.type }))}
              className="fotos"
              alt={`Foto ${foto.id}`} // Reemplaza con una descripción adecuada
            />
          </Link>
          <button className="btn btn-danger" onClick={() => confirmarDelete(foto.id)}>
                <MdDelete />
          </button>
        </div>
      ))}
    </Mellis>
</div> 
<div>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  
</div>

  
</>
    );
};









