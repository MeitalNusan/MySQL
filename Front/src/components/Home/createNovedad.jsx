import "../Home/cssHome.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc, doc } from "firebase/firestore";
import { db, imageDb } from "../../firebase/firebase.js";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import "./cssEdit.css"

 
 

export const CreateHome2  = () =>{

    const navigate = useNavigate();
    const [urlImDesc, setUrlImDesc] = useState("");
     const [isLoading, setIsLoading] = useState(false);
  
  
    const guardarInfo = async (e) => {
      e.preventDefault();
    
    //   if (!deporte || !marca || !prenda) {
    //     console.log("Please fill in all fields");
    //     return;
    //   }
    
      
        const newD = {
          img3:urlImDesc,
        };
    
        try {
          await addDoc(collection(db, "imgHome2"), { ...newD });
          navigate("/");
        } catch (error) {
          console.error(error);
          // Handle error, display a message, etc.
        }
    
        setIsLoading(false);
        // Clear form fields after submission
        setUrlImDesc("");
    
        setIsLoading(false);
         
       }  
      
    
    const fileHandler = async (e) => {
      try {
        const archivoI = e.target.files[0];
    
        // Check if a file is selected
        if (!archivoI) {
          console.error("No file selected");
          return;
        }
    
        // Check if the selected file is an image
        if (!archivoI.type.startsWith("image/")) {
          console.error("Invalid file type. Please select an image file.");
          return;
        }
    
        const refArchivo = ref(imageDb, `documentos/${archivoI.name}`);
        await uploadBytes(refArchivo, archivoI);
        const imageUrl = await getDownloadURL(refArchivo);
        setUrlImDesc(imageUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
        // Handle the error, display a message, etc.
      }
    }
     

    return(
      <>
      <h1 className="titulo"> Create Novedad</h1>
        <div className="conteiner">
            <form onSubmit={guardarInfo}>
            <label className="form-label">Agregar Imagen: </label>
            <input
            type="file"
            id="file1"
            placeholder="agregar imagen"
            className="form-control"
            onChange={fileHandler}
            />
        <button className="btn btn-primary" disabled={isLoading}>
          {isLoading ? "Creating..." : "Crear"}
        </button>      

        <Link className="btn btn-danger" to="/">
          Cancelar
        </Link>
      </form>
    </div>
    </>
    )

}