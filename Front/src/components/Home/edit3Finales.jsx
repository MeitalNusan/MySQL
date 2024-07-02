import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { getDoc, updateDoc,doc } from "firebase/firestore"
import { db } from "../../firebase/firebase.js"
import "./cssEdit.css"




export const EditHome3 = () =>{
    
    const [img, setImg] = useState("")
    const [img2, setImg2] = useState("")
    const [img3, setImg3] = useState("")
    // const [img4, setImg4] = useState("")

    const navigate = useNavigate()
    const {id} = useParams()


//buscar item por ID en la base de datos
    const getDeportebyId = async (id) =>{
        const deporteDoc = await getDoc(doc(db, "imgHome3", id))

        if(deporteDoc.exists()){
            setImg(deporteDoc.data().img)
            setImg2(deporteDoc.data().img2)
            setImg2(deporteDoc.data().img3)
            // setImg2(deporteDoc.data().img4)

         }else{
            console.log("no existe")

        }
    }

// llamar a la función pero en un useEffect para que se renderice cuando quiero
    useEffect(()=>{
        getDeportebyId(id)
    },[])


//modificar lo que busque por ID
const update = async (e) => {
    e.preventDefault();

    // Basic validation
    // if (!deporte || !marca || !prenda) {
    //     // Display an error message or prevent form submission
    //     console.log("Please fill in all fields");
    //     return;
    // }

    const deporteDoc = doc(db, "imgHome3", id);

    try {
        let imgDataUrl = ""; // Initialize with an empty string
        let imgDataUrl2 = ""; // Initialize with an empty string
        let imgDataUrl3 = ""; // Initialize with an empty string
        // let imgDataUrl4 = ""; // Initialize with an empty string

        // Check if img is a valid File object
        if (img || img2 ||img3 || img4 instanceof File) {
            // Convert File to data URL
            imgDataUrl = await convertFileToDataUrl(img);
            imgDataUrl2 = await convertFileToDataUrl(img2);
            imgDataUrl3 = await convertFileToDataUrl(img3);
            // imgDataUrl4 = await convertFileToDataUrl(img4);
        } else {
            // Handle the case where img is not a valid File object
            console.error("Invalid image file");
            // You might want to display an error message to the user or handle it differently
        }

        const data = {
            img: imgDataUrl,
            img2: imgDataUrl2,
            img3: imgDataUrl3,
            // img4: imgDataUrl4,
        };

        await updateDoc(deporteDoc, data);
        navigate("/");
    } catch (error) {
        // Handle errors, including the conversion error
        console.error("Error updating document:", error);
    }
};
// Helper function to convert File to data URL
const convertFileToDataUrl = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.onerror = (error) => {
            reject(error);
        };

        reader.readAsDataURL(file);
    });
};

    return (
        <>
        <h1 className="titulo"> Edit tres fotos finales</h1>
        <div className="conteiner">
             <div className="row">
                <div className="col-3">
                    <form onSubmit={update}>
                        <div className="mb-3">
                              <label className="form-label">Imagen:</label>
                            <input
                                onChange={(e) => setImg(e.target.files[0])}
                                className="form-control"
                                type="file"
                            />
                              <label className="form-label">Imagen2:</label>
                            <input
                                onChange={(e) => setImg2(e.target.files[0])}
                                className="form-control"
                                type="file"
                            />

                            <label className="form-label">Imagen3:</label>
                            <input
                                onChange={(e) => setImg3(e.target.files[0])}
                                className="form-control"
                                type="file"
                            />
                            {/* <label className="form-label">Imagen4:</label>
                            <input
                                onChange={(e) => setImg4(e.target.files[0])}
                                className="form-control"
                                type="file"
                            /> */}

                        </div>
                        <button type="submit" className="btn btn-primary">Editar</button>
                       <Link className="btn btn-danger" to="/">Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>      
        </>
    )
}