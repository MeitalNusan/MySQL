import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../Home/cssHome.module.css";
import { Spinner } from "../spinner/Spinner";
import zapaNB from "../Images/imagenes/zapaNB.jpg"
import lionel from "../Images/imagenes/lionel.jpg"
import zapaOl from"../Images/imagenes/zapaOlymcomp.png"
import { GetAllImg } from "../getImgs/getAllImg";
import { FotosGral } from "../fotosGeneral/fotosGral";
import { Mellis } from "../FotosMellis/MellisGral";

 
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
       

        <br /><br />
    <div className={styles.zapa}>
  <button className={styles.boton}> "DESCUBRÍ MAS →" </button>
    <GetAllImg apiEndpoint="http://localhost:8000/homeImg/"/>

    <br /><br /><br /><br />
   </div>
    

   <br /><br /><br /><br />

   <Mellis apiEndpoint="http://localhost:8000/mellisImg/"/>
  
   <div>
     <FotosGral apiEndpoint="http://localhost:8000/img/"/>
   </div>


  

  
</>
    );
};









