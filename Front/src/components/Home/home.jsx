import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../Home/cssHome.module.css";
import { Spinner } from "../spinner/Spinner";
import { GetAllImg } from "../getImgs/getAllImg";
import { FotosGral } from "../fotosGeneral/fotosGral";
import { Mellis } from "../FotosMellis/MellisGral";
import { Carrousel } from "../fotosCarrousel/carrousel";

 
const API= `${import.meta.env.VITE_BACKEND_URL}/homeImg/`;

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
   <Carrousel apiEndpoint={`${import.meta.env.VITE_BACKEND_URL}/carrousel`}/>

   
     
    <div >
   
    <GetAllImg apiEndpoint={`${import.meta.env.VITE_BACKEND_URL}/homeImg`}/>
   </div>
    

   <Mellis apiEndpoint={`${import.meta.env.VITE_BACKEND_URL}/mellisImg`}/>

    <FotosGral apiEndpoint={`${import.meta.env.VITE_BACKEND_URL}/img`}/>


  
</>
    );
};









