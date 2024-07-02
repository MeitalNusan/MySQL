import "../Home/cssHome.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc, doc } from "firebase/firestore";
import { db, imageDb } from "../../firebase/firebase.js";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import "./cssEdit.css"



 

export const CreateHome3  = () =>{

    const navigate = useNavigate();
    const [urlImDesc, setUrlImDesc] = useState("");
    const [urlImDesc2, setUrlImDesc2] = useState("");
    const [urlImDesc3, setUrlImDesc3] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
  
    const guardarInfo = async (e) => {
      e.preventDefault();
    
    //   if (!deporte || !marca || !prenda) {
    //     console.log("Please fill in all fields");
    //     return;
    //   }
    
      
        const newD = {
          img:urlImDesc,
          img2:urlImDesc2,
          img3:urlImDesc3,
        };
    
        try {
          await addDoc(collection(db, "imgHome3"), { ...newD });
          navigate("/");
        } catch (error) {
          console.error(error);
          // Handle error, display a message, etc.
        }
    
        setIsLoading(false);
        // Clear form fields after submission
        setUrlImDesc("");
    
        setIsLoading(false);
        // Clear form fields after submission
        setUrlImDesc2("");
        
        setIsLoading(false);
        // Clear form fields after submission
        setUrlImDesc3("");
        
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
    const fileHandler2 = async (e) => {
      try {
        const archivoII = e.target.files[0];
    
        // Check if a file is selected
        if (!archivoII) {
          console.error("No file selected");
          return;
        }
    
        // Check if the selected file is an image
        if (!archivoII.type.startsWith("image/")) {
          console.error("Invalid file type. Please select an image file.");
          return;
        }
    
        const refArchivoII = ref(imageDb, `documentos/${archivoII.name}`);
        await uploadBytes(refArchivoII, archivoII);
        const imageUrl2 = await getDownloadURL(refArchivoII);
        setUrlImDesc2(imageUrl2);
      } catch (error) {
        console.error("Error uploading image:", error);
        // Handle the error, display a message, etc.
      }
    
    };
    const fileHandler3 = async (e) => {
      try {
        const archivoII = e.target.files[0];
    
        // Check if a file is selected
        if (!archivoII) {
          console.error("No file selected");
          return;
        }
    
        // Check if the selected file is an image
        if (!archivoII.type.startsWith("image/")) {
          console.error("Invalid file type. Please select an image file.");
          return;
        }
    
        const refArchivoII = ref(imageDb, `documentos/${archivoII.name}`);
        await uploadBytes(refArchivoII, archivoII);
        const imageUrl2 = await getDownloadURL(refArchivoII);
        setUrlImDesc3(imageUrl2);
      } catch (error) {
        console.error("Error uploading image:", error);
        // Handle the error, display a message, etc.
      }
    
    };
    

    return(
      <>
      <h1 className="titulo"> Create tres finales </h1>
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
            <label className="form-label">Agregar Imagen2: </label>
            <input
            type="file"
            id="file2"
            placeholder="agregar imagen"
            className="form-control"
            onChange={fileHandler2}
            />
            <label className="form-label">Agregar Imagen3: </label>
            <input
            type="file"
            id="file3"
            placeholder="agregar imagen"
            className="form-control"
            onChange={fileHandler3}
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